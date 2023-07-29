import React from "react";
import { Box, Typography, styled, Tabs, Tab } from "@mui/material";
import CoursesCard from "../CourseCard/CourseCard";
import avatar1 from "../../assets/img/avatar1.png";
import avatar2 from "../../assets/img/avatar2.png";
import SmallLogo1 from "../../assets/img/smallLogo1.jpg";
import SmallLogo2 from "../../assets/img/smallLogo2.png";
import ArticleCard from "../ArticleCard/ArticleCard";
import EventImg from "../../assets/img/event_img.jpg";

function EducationCourseTab() {
  const categoryList = ["All", "Marketing", "Accounting", "Branding"];

  const CategoryButton = styled(Box)(({ theme }) => ({
    padding: "4px 12px",
    borderRadius: "16px",
    border: "1px solid var(--gray-200, #E6E6E6)",
    width: "fit-content",
    ":hover": {
      background: "var(--primary-500, #FDC600)",
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
      <div className="flex gap-2">
        <CoursesCard
          brandName="Meta"
          smallLogo={SmallLogo1}
          avatar={avatar1}
          courseTitle="Meta 101"
          duration="30 mins"
          isEducationCourse={true}
          summary="How to get started with Facebook"
        />
        <CoursesCard
          brandName="Meta"
          smallLogo={SmallLogo2}
          avatar={avatar2}
          courseTitle="Instagram 101"
          duration="30 mins"
          isEducationCourse={true}
          summary="How to get started with Instagram"
        />
      </div>
      <ArticleContainer>
        <Typography
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
        >
          Latest Courses
        </Typography>
        <ArticleCard
          brandName="Meta"
          smallLogo={SmallLogo1}
          avatar={EventImg}
          courseTitle="Unlocking Potential: How SMEs Can Maximize Growth and Efficiency"
          duration={19}
          isCourse={true}
        />
        <ArticleCard
          brandName="Meta"
          smallLogo={SmallLogo1}
          avatar={EventImg}
          courseTitle="2023 Small Business "
          duration={30}
          isCourse={true}
        />
        <ArticleCard
          brandName="Meta"
          smallLogo={SmallLogo1}
          avatar={EventImg}
          courseTitle="2023 Small Business "
          duration={19}
          isCourse={true}
        />
        <ArticleCard
          brandName="Meta"
          smallLogo={SmallLogo1}
          avatar={EventImg}
          courseTitle="2023 Small Business "
          duration={20}
          isCourse={true}
        />
      </ArticleContainer>
    </div>
  );
}

export default EducationCourseTab;
