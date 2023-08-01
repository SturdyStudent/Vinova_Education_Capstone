import { Box, Typography, styled } from "@mui/material";
import CoursesCard from "../CourseCard/CourseCard";
import ArticleCard from "../ArticleCard/ArticleCard";
import Slider, { Settings } from "react-slick";
import {
  articleEducationList,
  courseCardEducation,
} from "../../assets/js/default-props";

const CategoryButton = styled(Box)(() => ({
  padding: "4px 12px",
  borderRadius: "16px",
  border: "1px solid var(--gray-200, #E6E6E6)",
  width: "fit-content",
  ":hover": {
    background: "var(--primary-500, #FDC600)",
    cursor: "pointer",
  },
}));
const CategoryContainer = styled(Box)(() => ({
  padding: "0 !important",
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
  const categoryList = ["All", "Marketing", "Accounting", "Branding"];

  return (
    <div>
      <CategoryContainer>
        {categoryList.map((item) => (
          <CategoryButton>
            <Typography
              fontSize={"14px"}
              lineHeight={"20px"}
              color={"black"}
              fontWeight={600}
            >
              {item}
            </Typography>
          </CategoryButton>
        ))}
      </CategoryContainer>
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
      <Slider {...memberSettings}>
        {courseCardEducation.map((item) => (
          <CoursesCard {...item} />
        ))}
      </Slider>
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
