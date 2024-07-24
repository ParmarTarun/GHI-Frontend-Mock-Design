import { FC } from "react";
import { forecastObjType } from "../../../types";

interface CountryContentProps {
  value: string;
  setValue: (k: keyof forecastObjType, v: string) => void;
}

const CountryContent: FC<CountryContentProps> = ({ value, setValue }) => {
  const countries = ["country1", "country2", "country3", "country4"];
  return (
    <div className="content">
      <h3>Choose 1 from the following:</h3>
      <div className="attribute-options">
        {countries.map((country) => (
          <button
            className={`${value === country ? "active" : ""}`}
            onClick={() => setValue("country", country)}
            key={country}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryContent;
