import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    lables: ["yes", "no"],
    datasets: [
      {
        lable: "poll",
        data: [50, 50],
        backgroundColor: ["#4CD7F6", "#E17CFD"],
        borderColor: ["#4CD7F6", "#E17CFD"],
        cutout: [95],
        radius: 55
       
      },
    ],
  };

  const option = {responsive: true};

  const textCenter={
    id: 'textCenter',
    beforeDatasetDraw(chart , args ,pluginOptions){
        const {ctx , data } = chart ;
        ctx.save();
        ctx.font = 'bolder 10px Roboto';
        ctx.fillStyle = 'black' ;
        ctx.textAlign = 'center'
        ctx.textBaseline= 'middle'
        ctx.fillText(" 50% Direct" , chart.getDatasetMeta(0).data[0].x ,chart.getDatasetMeta(0).data[0].y)
    }
  }
  return (
    <div>
      <Doughnut data={data} option={option} plugins={[textCenter]}>
        {" "}
      </Doughnut>
    </div>
  );
};

export default DoughnutChart;
