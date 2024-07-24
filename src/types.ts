export type categoryType = "country" | "company" | "drug" | "disease";
export type attributeType = categoryType | "year" | "specification";

export type specificationType = {
  [key: string]: number;
};

export type forecastObjType = {
  country: string;
  company: string;
  drug: string;
  disease: string;
  year: string;
  specification: specificationType;
};
