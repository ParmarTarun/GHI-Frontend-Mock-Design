import { FC, useEffect, useState } from "react";
import { attributeType, categoryType, forecastObjType } from "../../types";
import Tabs from "./Tabs";
import { defaultForecastObj, getTabsData } from "../../utils";
import TabsContent from "./TabsContent";

interface ForecastFormProps {
  category: categoryType;
}

const ForecastForm: FC<ForecastFormProps> = ({ category }) => {
  const [selectedAtrribute, setSelectedAtrribute] =
    useState<attributeType>("year");
  const [forecastObj, setForecastObj] =
    useState<forecastObjType>(defaultForecastObj);

  // TODO: avoid this function call on every render
  const tabsData = getTabsData(category);
  console.log(Object.entries(forecastObj));
  const validateForecastObj = !!Object.values(forecastObj).every((el) =>
    el.length === undefined ? Object.keys(el).length : el.length
  );

  const resetForecastObj = () => {
    setForecastObj(defaultForecastObj);
    setSelectedAtrribute("year");
  };

  useEffect(() => resetForecastObj, [category]);

  return (
    <div className="forecast-form" id="forecast-form">
      <div className="form-heading">
        <div>
          <h2 className="text-dark">Forecasting:</h2>
          <h1 className="text-primary">{category.toUpperCase()}</h1>
        </div>
        <button onClick={resetForecastObj}>Reset</button>
      </div>
      <hr />

      <div className="form-body">
        <Tabs
          forecastObj={forecastObj}
          tabsData={tabsData}
          attribute={selectedAtrribute}
          setAttribute={setSelectedAtrribute}
        />
        <TabsContent
          tab={selectedAtrribute}
          forecastObj={forecastObj}
          setForecastObj={setForecastObj}
        />
      </div>
      <div className="form-action">
        <button disabled={!validateForecastObj}>NEXT</button>
      </div>
    </div>
  );
};

export default ForecastForm;
