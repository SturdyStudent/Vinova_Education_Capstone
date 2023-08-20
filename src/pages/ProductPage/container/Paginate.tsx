import { LoadType } from "../../../services/interface";
import { Box, Typography, styled, Button } from "@mui/material";
import ReactPaginate from "react-paginate";
import LeftCaret from "../../../assets/icons/caretLeft.svg";
import RightCaret from "../../../assets/icons/caretRight.svg";
import { ReactSVG } from "react-svg";

interface IPaginate {
  loadType: string;
  handlePageClick: (event: { selected: number }) => void;
  pageCount: number;
  loadMoreProducts: () => void;
}
const LoadMoreButton = styled(Button)(() => ({
  background: "#2271b1",
  border: "none",
  textTransform: "none",
}));

function Paginate({
  loadType,
  handlePageClick,
  pageCount,
  loadMoreProducts,
}: IPaginate) {
  return (
    <div>
      {" "}
      {loadType == LoadType.Pagination ? (
        <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<ReactSVG src={RightCaret} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            activeClassName="font-bold text-xl"
            previousLabel={<ReactSVG src={LeftCaret} />}
            renderOnZeroPageCount={null}
            className="flex text-lg gap-4 mx-auto items-center text-blue-800"
          />{" "}
        </Box>
      ) : loadType == LoadType.Load_More ? (
        <Box display={"flex"} justifyContent={"center"}>
          <LoadMoreButton onClick={() => loadMoreProducts()}>
            <Typography color={"white"}>Load more</Typography>
          </LoadMoreButton>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}

export default Paginate;
