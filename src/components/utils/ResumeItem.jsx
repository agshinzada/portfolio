import React from "react";
import calendar from "../../assets/calendar.svg";

const ResumeItem = ({ date, name, location, description }) => {
  return (
    <div className="pb-10 mb-4 border-b border-[#242323]">
      <div className="flex gap-3 items-center mb-3">
        <img src={calendar} alt="calendar" className="w-8" />
        <span>{date}</span>
      </div>
      <div className="pl-10 flex flex-col gap-3">
        <h4 className="text-xl font-bold">{name}</h4>
        <div className="flex flex-col gap-1">
          <p className="text-md">{location}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
