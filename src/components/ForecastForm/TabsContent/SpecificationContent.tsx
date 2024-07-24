import React, { FC } from "react";
import { forecastObjType, specificationType } from "../../../types";

interface SpecificationContentProps {
  value: specificationType;
  setValue: (k: keyof forecastObjType, v: specificationType) => void;
}

const SpecificationContent: FC<SpecificationContentProps> = ({
  value,
  setValue,
}) => {
  const specifications: specificationType = {
    speci1: 23,
    speci2: 54,
    speci3: 67,
    speci4: 29,
  };

  const addSpecifications = (sp: string) => {
    const updatedValue = { ...value };
    if (updatedValue[sp] !== undefined) {
      delete updatedValue[sp];
    } else {
      updatedValue[sp] = specifications[sp];
    }
    setValue("specification", updatedValue);
  };

  const updateSpecification = (sp: string, v: number) => {
    setValue("specification", { ...value, [sp]: v });
  };

  return (
    <div className="content">
      <h3>Choose 1 or more from the following:</h3>
      <div className="attribute-options">
        {Object.keys(specifications).map((sp) => (
          <button
            className={`${value[sp] !== undefined ? " active" : ""}`}
            key={sp}
            onClick={() => addSpecifications(sp)}
          >
            {sp}
          </button>
        ))}
      </div>
      <div className="specification-values">
        {Object.entries(value).map(([sp, v]) => (
          <React.Fragment key={sp}>
            <h3 className="text-dark">
              {sp}: {v}
            </h3>
            <input
              type="range"
              min="0"
              max="100"
              value={v}
              className="speci-slider"
              onChange={(e) => {
                updateSpecification(sp, +e.target.value);
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SpecificationContent;
