import React, { useState } from "react";
import Card from "../components/profile/Card";
import profileImage from "../assets/images/profile.jpeg";
import Badges from "../components/profile/Badges";
import BadgeList from "../components/profile/BadgeList";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { hideBadgeList } from "../redux/slices/badgeListSlice";
import CommonCard from "../components/profile/CommonCard";
import GaugeCard from "../components/profile/GaugeCard";
import Gigbits from '../components/profile/GigBits';

const UserProfile = () => {
  const { badgeList } = useSelector((state) => state.batchReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Gigbits />
      <div className="flex">
        {badgeList && (
          <div>
            <div className="absolute backdrop-blur-sm flex-col z-10 w-[100vw] h-[100vh] bg-blur flex justify-center items-center">
              <div
                onClick={() => dispatch(hideBadgeList())}
                className="w-[100%] flex justify-end mr-10 p-10 pb-0"
              >
                <CloseIcon />
              </div>
              <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <BadgeList />
              </div>
            </div>
          </div>
        )}
        <Card value={2} profileImage={profileImage} />
        <div className="flex flex-col">
          <Badges />
          <div className="flex gap-4 flex-wrap">
            <GaugeCard title={"Project Completed"}/>
            <CommonCard title={"Project Hosted"} content={5}/>
            <CommonCard title={"Balance"} content={5}/>
            <CommonCard title={"Average Response Time"} content={5}/>
            <CommonCard title={"Recent Delivery"} content={5}/>
            <CommonCard title={"Scheduled Meetings"} content={5}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
