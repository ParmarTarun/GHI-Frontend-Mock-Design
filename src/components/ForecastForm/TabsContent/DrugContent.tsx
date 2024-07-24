import { FC } from "react";
import { forecastObjType } from "../../../types";

interface DrugContentProps {
  value: string;
  setValue: (k: keyof forecastObjType, v: string) => void;
}

const DrugContent: FC<DrugContentProps> = ({ value, setValue }) => {
  const drugs = ["drug1", "drug2", "drug3", "drug4"];
  return (
    <div className="content">
      <h3>Choose 1 from the following:</h3>
      <div className="attribute-options">
        {drugs.map((drug) => (
          <button
            className={`${value === drug ? "active" : ""}`}
            onClick={() => setValue("drug", drug)}
            key={drug}
          >
            {drug}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrugContent;
