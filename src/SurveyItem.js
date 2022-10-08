import React from "react";

const SurveyItem = ({
  title,
  thumb,
  completes,
  duration,
  qualifications,
  coins,
}) => {
  return (
    <div className="card w-80">
      <div className="flex items-center">
        <div
          className="card-thumb w-16 h-16 mr-2"
          style={{ backgroundImage: `url(./images/${thumb}.png)` }}
        ></div>
        <div className="">
          <div className="text-lg font-bold text-left">{title}</div>
          <div
            className={`complete-bg ${
              completes === 0 ? "no-complete" : "has-complete"
            }`}
          >
            {completes === 0 ? "NEW" : `${completes} completes left`}
          </div>
          <div className="flex items-center mt-1">
            <div
              className="card-thumb mr-1 w-3 h-3"
              style={{ backgroundImage: `url(./images/clock.png)` }}
            ></div>
            <div className="text-xs text-left font-medium">
              {duration} Mintues
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="card-thumb mr-1 w-3 h-3"
              style={{ backgroundImage: `url(./images/Questionmark.png)` }}
            ></div>
            <div className="text-xs text-left font-medium">
              {qualifications} qualifications
            </div>
          </div>
        </div>
      </div>
      <button class="rounded-lg w-full pt-1.5 pb-2 pink-bg-survey text-white mt-2 font-medium text-sm">
        {coins}
      </button>
    </div>
  );
};

export default SurveyItem;
