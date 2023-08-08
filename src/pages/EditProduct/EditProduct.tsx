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
  MenuItem,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import DollarIcon from "@mui/icons-material/AttachMoney";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addNewProduct,
  getProductCategories,
  getProducts,
  updateProduct,
} from "../../services/api";
import BackHeader from "../../components/BackHeader/BackHeader";
import { useParams } from "react-router-dom";
import { IProducts } from "../../services/interface";
import { Controller } from "react-hook-form";
import SuccessModal from "../RegisterPage/containers/SuccessModal";
import _ from "lodash";
import { promises as fs } from "fs";

import * as yup from "yup";
import { parseArray, saveProductData } from "../../services/utils";
import { PRODUCT_DATA } from "../../assets/js/constants";

const schema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  images: yup.array().required().of(yup.string().required()),
});

type Inputs = {
  title: string;
  price: number;
  brand: string;
  category: string;
  images: string[];
};

function EditProduct() {
  const params = useParams();
  const id: number = params.id ? +params.id : 0;
  const [headerTitle, setHeaderTitle] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const [categoryList, setCategoryList] = useState<string[]>([]);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      price: 0,
      brand: "",
      category: "",
      images: [""],
    },
  });

  useEffect(() => {
    if (id != 0) {
      getProducts({ productID: id })
        .then((result) => {
          const productList: IProducts[] = parseArray(
            localStorage.getItem(PRODUCT_DATA)
          );
          const product: IProducts =
            _.find(productList, { id: result.data.id }) || result.data;

          setValue("title", product.title);
          setValue("brand", product.brand);
          setValue("category", product.category);
          setValue("images", product.images);
          setValue("price", product.price);
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

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const { title, brand, price, category, images } = data;
    if (id != 0) {
      await updateProduct(
        {
          title,
          price,
          brand,
          category,
          images,
        },
        id
      )
        .then((data) => {
          saveProductData(data.data as IProducts, id);
          setOpenSuccess(true);
        })
        .catch((e) => console.log(e));
    } else {
      await addNewProduct({
        title,
        price,
        brand,
        category,
        images,
      })
        .then((data) => {
          setOpenSuccess(true);
          saveProductData(data.data as IProducts);
        })
        .catch((e) => console.log(e));
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <Grid container>
                <Grid item md={4} xs={12}>
                  <label className="text-black">Title</label>
                </Grid>
                <Grid item md={8} xs={12}>
                  <StyledInput
                    value={value}
                    placeholder="Please type product title"
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <Grid container marginTop={"20px"}>
                <Grid item md={4} xs={12}>
                  <label className="text-black">Price</label>
                </Grid>
                <Grid item md={8} xs={12}>
                  <StyledInput
                    value={value}
                    type="number"
                    placeholder="Please type price"
                    endAdornment={<DollarIcon />}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
            )}
          />
          <Controller
            control={control}
            name="brand"
            render={({ field: { onChange, value } }) => (
              <Grid container marginTop={"20px"}>
                <Grid item md={4} xs={12}>
                  <label className="text-black">Brand</label>
                </Grid>
                <Grid item md={8} xs={12}>
                  <StyledInput
                    value={value}
                    placeholder="Please type a brand"
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
            )}
          />
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, value } }) => (
              <Grid container marginTop={"20px"}>
                <Grid item md={4} xs={12}>
                  <label className="text-black">Category</label>
                </Grid>
                <Grid item md={8} xs={12}>
                  <StyledSelect value={value} onChange={onChange}>
                    {categoryList.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </Grid>
              </Grid>
            )}
          />

          <Controller
            control={control}
            name="images"
            render={({ field: { onChange, value } }) => (
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
                  {value.map((item, index) => (
                    <div key={index} className="flex gap-4 w-full bg-white p-3">
                      <div className="w-2/3 text-left">
                        <StyledInput
                          placeholder="Paste your image url"
                          type="text"
                          fullWidth
                          value={value[index]}
                          onChange={(e) => {
                            value[index] = e.target.value;
                            onChange(value);
                          }}
                        />
                      </div>
                      <Box width={"40px"} height={"40px"}>
                        <img
                          src={
                            value[index] != ""
                              ? value[index]
                              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                          }
                          className="object-cover w-full h-full"
                        />
                      </Box>
                      <IconButton
                        onClick={() =>
                          onChange(
                            value.filter(
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
                    onClick={() => onChange([...value, ""])}
                  >
                    Add Image
                  </AddImageButton>
                </Grid>
              </Grid>
            )}
          />

          <div className="flex justify-center mt-6">
            <SubmitButton type="submit" value={"Submit Button"}>
              Submit
            </SubmitButton>
          </div>
        </form>
        <SuccessModal
          openNavbar={openSuccess}
          navigateLink="/dashboard"
          message="Update product successfully!"
          setOpenNavbar={setOpenSuccess}
        />
      </Container>
    </PageContainer>
  );
}

export default EditProduct;
