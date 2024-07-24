import { attributeType, forecastObjType } from "../types";
import { categoryType } from "../types";

export const getTabsData = (
  selectedCat: categoryType = "country"
): attributeType[] => {
  switch (selectedCat) {
    case "country":
      return ["year", "country", "disease", "drug", "company", "specification"];
    case "company":
      return ["year", "company", "country", "disease", "drug", "specification"];
    case "disease":
      return ["year", "disease", "country", "drug", "company", "specification"];
    case "drug":
      return ["year", "drug", "country", "disease", "company", "specification"];
    default:
      return ["year", "country", "disease", "drug", "company", "specification"];
  }
};

export const defaultForecastObj: forecastObjType = {
  company: "",
  country: "",
  disease: "",
  year: "",
  specification: {},
  drug: "",
};
