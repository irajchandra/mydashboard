import "./graph.css";
import LineGraph from "./linegraph";

const Graph = () => {
  return (
    <div className="graph-displayer">
      <div className="text1">
        <span>Total visits</span>
      </div>

      <div className="text2">
        <span>42.43M</span>
      </div>

      <hr />

      <div className="graph-container">
        <LineGraph />
      </div>
    </div>
  );
};

export default Graph;
