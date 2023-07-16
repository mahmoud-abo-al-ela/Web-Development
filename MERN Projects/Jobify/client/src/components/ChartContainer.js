import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useState } from "react";
const ChartContainer = () => {
  const { monthlyApplications: data } = useAppContext();
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button onClick={() => setBarChart(!barChart)} type="button">
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartContainer;
