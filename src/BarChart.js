import { Bar } from "react-chartjs-2";

export function BarChart(){
  return(
    <div className="project-container">
      <div className="project-header">
        <p className="chart-title">Bar Chart</p>
      </div>
      <div className="barchart-card">
        <div className="barchart-card-1">
          <div><BarChartwrapper /></div>
        </div>
      </div>
    </div>
  );
}

export function BarChartwrapper(){
    return(
     
        <div className="barchart">
        <Bar
          data={{
            labels: ["January", "February", "March", "April","May","June","July","August"],
            datasets: [
              {
                label: "Value",
                data: ["3000","5000","7000","9000","12000","15000","17000","20000"],
                backgroundColor: ["#4e73df", "#4e73df", "#4e73df", "#4e73df","#4e73df","#4e73df","#4e73df","#4e73df"],
              },
            ],
          }}
          width={400}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            
          }}

          style={{width:"500px"}}
        />
      </div>
    )};