import { Box, Typography, styled } from "@mui/material";
import CoursesCard from "../CourseCard/CourseCard";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Settings } from "react-slick";
import {
  articleEducationList,
  categoryList,
  courseCardEducation,
} from "../../assets/js/default-props";
import OverflowContainer from "../../pages/HomePage/containers/OverflowContainer";
import CategoryButton from "../CategoryButton/CategoryButton";
import { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoryContainer = styled(Box)(() => ({
  padding: "0",
  display: "flex",
  gap: "8px",
}));
const ArticleContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  margin: "24px 0",
}));
const memberSettings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  draggable: true,
  arrows: false,
  className: "overflow-none",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
function EducationCourseTab() {
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
        Recommended Courses!
      </Typography>
      <Box height={"18px"} />
      <OverflowContainer>
        {courseCardEducation.map((item, index) => (
          <CoursesCard key={index} {...item} />
        ))}
      </OverflowContainer>
      <ArticleContainer>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
        >
          Latest Courses
        </Typography>
        {articleEducationList.map((item) => (
          <ArticleCard {...item} />
        ))}
      </ArticleContainer>
    </div>
  );
}

export default EducationCourseTab;
