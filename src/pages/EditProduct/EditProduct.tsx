import {
  Button,
  Container,
  Typography,
  styled,
  Input,
  Grid,
  IconButton,
  Box,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ImportIcon from "@mui/icons-material/FileUpload";
import DollarIcon from "@mui/icons-material/AttachMoney";
import { useEffect, useState } from "react";
import {
  getProductCategories,
  getProducts,
  updateProduct,
} from "../../services/api";
import BackHeader from "../../components/BackHeader/BackHeader";
import { useParams } from "react-router-dom";
import { IProducts } from "../../services/interface";

function EditProduct() {
  const params = useParams();
  const id: number = params.id ? +params.id : 0;
  const [headerTitle, setHeaderTitle] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([""]);

  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    console.log(id);
    if (id != 0) {
      getProducts({ productID: id })
        .then((result) => {
          const product: IProducts = result.data;
          setBrand(product.brand);
          setCategory(product.category);
          setTitle(product.title);
          setImages(product.images);
          setPrice(product.price);
          setHeaderTitle("Edit Product");
        })
        .catch((e) => console.log(e));
    } else {
      setHeaderTitle("Add Product");
    }

    getProductCategories()
      .then((result) => {
        setCategoryList(result.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = async () => {
    await updateProduct(
      {
        id,
        title,
        price,
        brand,
        category,
        images,
      },
      1
    )
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const PageContainer = styled(Container)(() => ({
    minHeight: "100vh",
    padding: "50px 0",
  }));

  const StyledInput = styled(Input)(() => ({
    border: "1px solid #e2e2e2",
    width: "100%",
    padding: "3px",
    paddingLeft: "10px",
    fontSize: "14px",
  }));

  const StyledSelect = styled(Select)(() => ({
    background: "white",
    width: "100%",
    padding: "0px !important",
    "& div": {
      padding: "8px 0 8px 15px",
    },
  }));

  const AddImageButton = styled(Button)(() => ({
    textTransform: "none",
    width: "100%",
    background: "#0197f6",
    color: "white",
    fontWeight: 600,
  }));

  const SubmitButton = styled(Button)(() => ({
    fontWeight: 600,
    color: "white",
    borderRadius: "15px",
    textTransform: "none",
    padding: "0 15px",
    background: "#19cd94",
    width: "80px",
    height: "48px",
  }));

  return (
    <PageContainer
      className="bg-white w-full"
      sx={{ background: "#f5f5f8", minHeight: "100vh" }}
    >
      <BackHeader pageName={headerTitle} />
      <Container className="bg-white shadow-lg py-5">
        <Typography fontWeight={600} fontSize={"20px"} color={"black"}>
          Information
        </Typography>
        <form onSubmit={handleSubmit} className="mt-5">
          <Grid container>
            <Grid item md={4} xs={12}>
              <label className="text-black">Title</label>
            </Grid>
            <Grid item md={8} xs={12}>
              <StyledInput
                value={title}
                placeholder="Please type product title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container marginTop={"20px"}>
            <Grid item md={4} xs={12}>
              <label className="text-black">Price</label>
            </Grid>
            <Grid item md={8} xs={12}>
              <StyledInput
                value={Number(price.toFixed(2)).toLocaleString()}
                type="number"
                placeholder="Please type price"
                endAdornment={<DollarIcon />}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(+e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container marginTop={"20px"}>
            <Grid item md={4} xs={12}>
              <label className="text-black">Brand</label>
            </Grid>
            <Grid item md={8} xs={12}>
              <StyledInput
                value={brand}
                placeholder="Please type brand"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBrand(e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container marginTop={"20px"}>
            <Grid item md={4} xs={12}>
              <label className="text-black">Category</label>
            </Grid>
            <Grid item md={8} xs={12}>
              <StyledSelect
                value={category}
                onChange={(e: SelectChangeEvent<unknown>) =>
                  setCategory(e.target.value as string)
                }
              >
                {categoryList.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>
          <Grid container marginTop={"20px"}>
            <Grid item md={4}>
              <label className="text-black">Images</label>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
              display={"flex"}
              flexDirection={"column"}
              gap={"15px"}
              padding={"5px 10px"}
              alignItems={"start"}
              style={{ background: "#f5f8fe" }}
            >
              {images.map((item, index) => (
                <div key={index} className="flex gap-4 w-full bg-white p-3">
                  <div className="w-2/3 text-left">
                    <StyledInput
                      placeholder="Paste your image url"
                      type="text"
                      fullWidth
                      value={images[index]}
                      onChange={(e) => setImages([...images, e.target.value])}
                    />
                  </div>
                  <Box width={"40px"} height={"40px"}>
                    <img
                      src={
                        images[index] != ""
                          ? images[index]
                          : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                      }
                      className="object-cover w-full h-full"
                    />
                  </Box>
                  <IconButton
                    onClick={() =>
                      setImages(
                        images.filter(
                          (item, currentIndex) => currentIndex != index
                        )
                      )
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}{" "}
              <AddImageButton
                fullWidth
                onClick={() => setImages([...images, ""])}
              >
                Add Image
              </AddImageButton>
            </Grid>
          </Grid>
          <div className="flex justify-center mt-6">
            <SubmitButton type="submit" value={"Submit Button"}>
              Submit
            </SubmitButton>
          </div>
        </form>
      </Container>
    </PageContainer>
  );
}

export default EditProduct;
