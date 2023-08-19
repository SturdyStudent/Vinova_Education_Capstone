import { Box, Typography, styled } from "@mui/material";
import CoursesCard from "../CourseCard/CourseCard";
import ArticleCard from "../ArticleCard/ArticleCard";
import {
  articleEducationContentList,
  courseCardEducationContent,
} from "../../assets/js/default-props";
import { Settings } from "react-slick";
import OverflowContainer from "../../pages/HomePage/containers/OverflowContainer";
import CategoryList from "../CategoryList/CategoryList";

const ArticleContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  margin: "24px 0",
}));
function EducationContentTab() {
  return (
    <div>
      <CategoryList />
      <Box height={"25px"} />
      <Typography
        fontSize={"16px"}
        fontWeight={600}
        lineHeight={"24px"}
        color={"black"}
      >
        Recommended Articles!
      </Typography>
      <Box height={"18px"} />
      <OverflowContainer>
        {courseCardEducationContent.map((item) => (
          <CoursesCard {...item} />
        ))}
      </OverflowContainer>
      <ArticleContainer>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
        >
          Latest Articles
        </Typography>
        {articleEducationContentList.map((item) => (
          <ArticleCard {...item} />
        ))}
      </ArticleContainer>
    </div>
  );
}

export default EducationContentTab;
