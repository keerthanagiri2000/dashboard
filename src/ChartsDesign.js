import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";


export function ChartsDesign() {
  const data = [
    { month: "Jan", amount: 0 },
    { month: "Mar", amount: 10000 },
    { month: "May", amount: 5000 },
    { month: "Jul", amount: 13000 },
    { month: "sep", amount: 10000 },
    { month: "nov", amount: 20000 },
  ];
  return (
    <div className="spline-chart">
      <AreaChart width={600} height={350} data={data}>
        <Area dataKey="amount" fill="#f8f9fc" stroke="#4e73df" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
      </AreaChart>
    </div>
  );
}
