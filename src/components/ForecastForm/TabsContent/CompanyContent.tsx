import { FC } from "react";
import { forecastObjType } from "../../../types";

interface CompanyContentProps {
  value: string;
  setValue: (k: keyof forecastObjType, v: string) => void;
}

const CompanyContent: FC<CompanyContentProps> = ({ value, setValue }) => {
  const companies = ["company1", "company2", "company3", "company4"];
  return (
    <div className="content">
      <h3>Choose 1 from the following:</h3>
      <div className="attribute-options">
        {companies.map((company) => (
          <button
            className={`${value === company ? "active" : ""}`}
            onClick={() => setValue("company", company)}
            key={company}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanyContent;
