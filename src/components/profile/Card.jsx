import React from "react";
import Rating from "./Rating";
import Avatar from "./Avatar";

const Card = (props) => {
  return (
    <div className="flex flex-col m-4 w-[30vw] min-h-[50vh] max-h-[content] rounded-lg border-[#a7a7a7] p-3 border-2 items-center">
      <div className="flex flex-col items-center">
      <div className="w-[30vw] rounded-lg h-[40vh] flex flex-col p-4 gap-4 items-center m-2">
        <Avatar profileImage={props.profileImage}/>
        <div className="flex w-[100%] items-center flex-col font-bold gap-1">
          <div className="text-2xl">Name</div>
          <div className="text-lg">userName</div>
        </div>
        <Rating value={props.value} />
      </div>

      <hr className="m-5 w-[90%] border-s-black" />
      <div className="flex w-[25vw] flex-col">
        <div>email</div>
        <div>phoneNumber</div>
      </div>
      <hr className="m-5 w-[90%] border-s-black" />
      <div className="flex w-[25vw] flex-col">
        <p className="flex w-[25vw] h-max-[content] whitespace-wrap overflow-hidden text-wrap">
          {/* {props.description} */}
          descriptionkn
          sdmakfnsjadknfsa,,,,,,,,,,,,,,,,,,,,,sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </p>
      </div>
      </div>
    </div>
  );
};

export default Card;
