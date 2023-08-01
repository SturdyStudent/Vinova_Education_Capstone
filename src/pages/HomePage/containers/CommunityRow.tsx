import { ICommunityCard } from "../../../services/interface";
import ItemDisplay from "./ItemDisplay";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";
import OverflowContainer from "./OverflowContainer";

interface ICommunityRow {
  communityCardList: Array<ICommunityCard>;
}

function CommunityRow({ communityCardList }: ICommunityRow) {
  return (
    <div>
      <ItemDisplay itemName="Join a community!" route="/group" />
      <OverflowContainer>
        {communityCardList.map((item, index) => (
          <CommunityCard
            key={index}
            logo={item.logo}
            communityName={item.communityName}
          />
        ))}
      </OverflowContainer>
    </div>
  );
}
export default CommunityRow;
