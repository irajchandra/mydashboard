import "./trafficsource.css";
import DoughnutChart from './doughnutchart'

const TrafficSource1 = () => {
  return (
    <div className="trafficsource1-container">
      <div className="title-wrapper1">
        <span>Traffic Sources</span>
      </div>

      <hr />

      <div className="source-graph1">
        <div className="left1">
          <div className="search-bar">
            <span className="source-type">Source</span>
            <span className="source-value">Traffic Source %</span>
          </div>
          <div className="source1">
            <div className="color-box1"></div>
            <span className="source-name1"> Direct</span>
            <span className="source-value1"> 50</span>          
          </div>

          <div className="source2">
            <div className="color-box2"></div>
            <span className="source-name2"> Search</span>
            <span className="source-value2"> 50</span>          
          </div>
        </div>

        <div className="right1">
        <DoughnutChart/>
        </div>
      </div>
    </div>
  );
};

export default TrafficSource1;
