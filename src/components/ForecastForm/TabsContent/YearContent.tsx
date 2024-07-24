import { FC } from "react";
import { forecastObjType } from "../../../types";

interface YearContentProps {
  value: string;
  setValue: (k: keyof forecastObjType, v: string) => void;
}

const YearContent: FC<YearContentProps> = ({ value, setValue }) => {
  const years = ["2010", "2013", "2015", "2017"];
  return (
    <div className="content">
      <h3>Choose 1 from the following:</h3>
      <div className="attribute-options">
        {years.map((yr) => (
          <button
            className={`${value === yr ? "active" : ""}`}
            onClick={() => setValue("year", yr)}
            key={yr}
          >
            {yr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearContent;
