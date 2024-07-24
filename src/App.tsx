import { useEffect, useState } from "react";
import "./App.css";
import CategoryTabs from "./components/CategoryTabs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { categoryType } from "./types";
import ForecastForm from "./components/ForecastForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<categoryType>();

  useEffect(() => {
    if (!selectedCategory) return;
    // TODO: change to use "ref" instead
    setTimeout(
      () =>
        document
          .getElementById("forecast-form")
          ?.scrollIntoView({ behavior: "smooth" }),
      300
    );
  }, [selectedCategory]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CategoryTabs
        category={selectedCategory}
        setCategory={setSelectedCategory}
      />
      {!!selectedCategory && <ForecastForm category={selectedCategory} />}
    </div>
  );
}

export default App;
