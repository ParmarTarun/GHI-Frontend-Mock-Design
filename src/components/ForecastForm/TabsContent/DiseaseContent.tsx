import { FC } from "react";
import { forecastObjType } from "../../../types";

interface DiseaseContentProps {
  value: string;
  setValue: (k: keyof forecastObjType, v: string) => void;
}

const DiseaseContent: FC<DiseaseContentProps> = ({ value, setValue }) => {
  const diseases = ["disease1", "disease2", "disease3", "disease4"];
  return (
    <div className="content">
      <h3>Choose 1 from the following:</h3>
      <div className="attribute-options">
        {diseases.map((disease) => (
          <button
            className={`${value === disease ? "active" : ""}`}
            onClick={() => setValue("disease", disease)}
            key={disease}
          >
            {disease}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiseaseContent;
