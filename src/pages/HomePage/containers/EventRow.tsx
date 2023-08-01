import { Box } from "@mui/material";
import { IEventCard } from "../../../services/interface";
import ItemDisplay from "./ItemDisplay";
import EventCard from "../../../components/EventCard/EventCard";

interface ICoursesRow {
  EventCardList: Array<IEventCard>;
}

function EventRow({ EventCardList }: ICoursesRow) {
  return (
    <div>
      <ItemDisplay itemName="Events" route="/event" />
      {EventCardList.map((item, index) => (
        <div key={index}>
          <EventCard
            brandName={item.brandName}
            avatar={item.avatar}
            courseTitle={item.courseTitle}
            smallLogo={item.smallLogo}
            date={item.date}
            to={item.to}
            from={item.from}
          />
          <Box height={"16px"} />
        </div>
      ))}
    </div>
  );
}

export default EventRow;
