import { Dispatch, FC, SetStateAction } from "react";
import { attributeType, forecastObjType } from "../../types";

interface TabsProps {
  forecastObj: forecastObjType;
  tabsData: attributeType[];
  attribute: attributeType;
  setAttribute: Dispatch<SetStateAction<attributeType>>;
}

const Tabs: FC<TabsProps> = ({
  forecastObj,
  tabsData,
  attribute,
  setAttribute,
}) => {
  const getAttributeValue = (attribute: attributeType): string => {
    let value = forecastObj[attribute];
    if (attribute === "specification") {
      value = Object.keys(value).length
        ? `${Object.keys(value).length} selected`
        : "";
    }
    return value as string;
  };

  return (
    <div className="tabs">
      {tabsData.map((tab) => {
        const value = getAttributeValue(tab);
        return (
          <div
            className={`tab 
              ${attribute === tab ? " active" : ""}
              ${!!value ? " completed" : ""}
            `}
            onClick={() => setAttribute(tab)}
            key={tab}
          >
            <h4>{tab}</h4>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
