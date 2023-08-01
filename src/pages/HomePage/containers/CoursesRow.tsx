import ItemDisplay from "./ItemDisplay";
import { ICourseCard } from "../../../services/interface";
import CoursesCard from "../../../components/CourseCard/CourseCard";
import OverflowContainer from "./OverflowContainer";

interface ICoursesRow {
  coursesCardList: Array<ICourseCard>;
}

function CoursesRow({ coursesCardList }: ICoursesRow) {
  return (
    <div>
      <ItemDisplay itemName="Courses for you" route="/education" />
      <OverflowContainer>
        {coursesCardList.map((item, index) => (
          <CoursesCard key={index} {...item} />
        ))}
      </OverflowContainer>
    </div>
  );
}

export default CoursesRow;
