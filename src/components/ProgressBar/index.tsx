import React from "react";

interface Props {
  currentBar: number;
  totalBar: number;
}

const ProgressBar: React.FC<Props> = ({ currentBar, totalBar }) => {
  const progress = (currentBar / totalBar) * 100;

  // Dynamically generate labels based on progress
  const labels = [0, 50, 100];

  return (
    <div className="w-full bg-transparent rounded-md h-2 mt-4 relative">
      <div
        className="flex justify-between items-center px-1 text-gray-600 "
        style={{ width: "calc(100% - 2rem)" }}
      >
        {labels.map((label, index) => (
          <span
            key={index}
            style={{ left: `${label}%` }}
            className="flex absolute z-10 w-9 h-9 bg-blue-800 text-white rounded-full justify-center items-center p-2 -m-3"
          >
            {index + 1}
          </span>
        ))}
      </div>
      <div className="relative h-full">
        <div
          className="bg-blue-500 rounded-md h-1 absolute -left-2.5 -top-1"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
