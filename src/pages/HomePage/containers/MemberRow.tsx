import ItemDisplay from "./ItemDisplay";
import { IMemberCard } from "../../../services/interface";
import MemberCard from "../../../components/MemberCard/MemberCard";
import OverflowContainer from "./OverflowContainer";

interface IMemberRow {
  cardMemberList: Array<IMemberCard>;
}

function MemberRow({ cardMemberList }: IMemberRow) {
  return (
    <div>
      <ItemDisplay itemName="Get to know other members!" route="/member" />
      <OverflowContainer>
        {cardMemberList.map((item, index) => (
          <MemberCard
            key={index}
            backgroundPanel={item.backgroundPanel}
            profilePic={item.profilePic}
            industry={item.industry}
            memberName={item.memberName}
            companyName={item.companyName}
          />
        ))}
      </OverflowContainer>
    </div>
  );
}

export default MemberRow;
