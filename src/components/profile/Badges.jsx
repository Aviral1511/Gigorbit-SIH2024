import React, {useState} from "react";
import Badgebutton from "./Badgebutton";
import BadgeList from "./BadgeList";
const Badges = (props) => {
  return (
    <div className="w-[65vw] border-2 flex gap-4 border-[#a7a7a7] h-[40vh] flex-col rounded-xl m-4 items-center justify-center">
      <div className="w-[61vw] h-[30vh] m-2 mb-0 flex items-center justify-center">
        badge
      </div>
      <div className="w-[100%] flex justify-end mb-3 pr-5">
        <Badgebutton showBadgeList={props.showBadgeList} setShowBadgeList={props.setShowBadgeList}/>
      </div>
    </div>
  );
};

export default Badges;
