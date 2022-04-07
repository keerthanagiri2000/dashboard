import { Doughnut } from "react-chartjs-2";


export function DonutChart() {
  const data = {
    
    datasets: [
      {
        data: [5.8, 3, 2],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        hoverBackgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        borderWidth: 1,
      },
    ],
    text: "20%",
  };

  const options1 = {
    responsive: true,
    cutoutPercentage: 85,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      usePointStyle: "true",
      labels: {
        fontSize: 12,
        padding: 25,
        fontColor: "#6D7278",
        fontFamily: "kanit light",
      },
    },
  };
  return (
    <div className="donut-circle-container">
      <div>
        <Doughnut
          data={data}
          options={options1}
          height={250} />
      </div>
      <div className="donut-points">
        <div className="donut-btn-title">
          <div className="donut-blue-btn"></div>
          <p>Direct</p>
        </div>

        <div className="donut-btn-title">
          <div className="donut-green-btn"></div>
          <p>Social</p>
        </div>

        <div className="donut-btn-title">
          <div className="donut-tile-btn"></div>
          <p>Referral</p>
        </div>
      </div>
    </div>
  );
}
