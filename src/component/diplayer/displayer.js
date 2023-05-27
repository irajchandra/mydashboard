import "./displayer.css";
import Navbar from "./navbar/navbar";
import Graph from "./graph/graph";
import Statedisplayer from "./statesdiplayer/statedisplayer";
import TrafficSource1 from "./trafficsource/trafficsource1";
import TrafficSource2 from "./trafficsource/trafficsource2";

const Displayer = () => {
  return (
    <div className="displayer">
      <Navbar />
      <Graph/>
      <Statedisplayer/>
      <TrafficSource1/>
      <TrafficSource2/>

    </div>
  );
};

export default Displayer;
