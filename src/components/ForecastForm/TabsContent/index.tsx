import { Dispatch, FC, SetStateAction } from "react";
import {
  attributeType,
  forecastObjType,
  specificationType,
} from "../../../types";
import YearContent from "./YearContent";
import CountryContent from "./CountryContent";
import SpecificationContent from "./SpecificationContent";
import CompanyContent from "./CompanyContent";
import DiseaseContent from "./DiseaseContent";
import DrugContent from "./DrugContent";

interface TabsContentProps {
  forecastObj: forecastObjType;
  setForecastObj: Dispatch<SetStateAction<forecastObjType>>;
  tab: attributeType;
}

const TabsContent: FC<TabsContentProps> = ({
  tab,
  forecastObj,
  setForecastObj,
}) => {
  const updateForecastObj = (
    k: keyof forecastObjType,
    v: string | specificationType
  ) => {
    setForecastObj((prev) => {
      return {
        ...prev,
        [k]: v,
      };
    });
  };

  const getContnent = () => {
    switch (tab) {
      case "year":
        return (
          <YearContent value={forecastObj.year} setValue={updateForecastObj} />
        );
      case "country":
        return (
          <CountryContent
            value={forecastObj.country}
            setValue={updateForecastObj}
          />
        );
      case "company":
        return (
          <CompanyContent
            value={forecastObj.company}
            setValue={updateForecastObj}
          />
        );
      case "disease":
        return (
          <DiseaseContent
            value={forecastObj.disease}
            setValue={updateForecastObj}
          />
        );
      case "drug":
        return (
          <DrugContent value={forecastObj.drug} setValue={updateForecastObj} />
        );
      case "specification":
        return (
          <SpecificationContent
            value={forecastObj.specification}
            setValue={updateForecastObj}
          />
        );
    }
  };

  return <div className="tabs-contents">{getContnent()}</div>;
};

export default TabsContent;
