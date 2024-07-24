import { Dispatch, FC, SetStateAction } from "react";
import { categoryType } from "../types";

interface CategoriesProps {
  category: categoryType | undefined;
  setCategory: Dispatch<SetStateAction<categoryType | undefined>>;
}

const CategoryTabs: FC<CategoriesProps> = ({ category, setCategory }) => {
  return (
    <div className="category-tabs">
      <h2 className="text-primary">Categories</h2>
      <p>Choose a category to forecast</p>
      {/* <hr /> */}
      <div className="cards-wrapper">
        {["Country", "Company", "Drug", "Disease"].map((el) => (
          <div
            className={`category-card ${
              category === el.toLowerCase() ? "active" : ""
            }`}
            onClick={() => setCategory(el.toLowerCase() as categoryType)}
            key={el}
          >
            {el.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
