
import {CartesianGrid,Legend,Line,LineChart,Tooltip,XAxis,YAxis} from "recharts";
  
  const data = [
    { year: "2017", OLR: 32, E2X: 37, ORACLE: 60 },
    { year: "2018", OLR: 42, E2X: 42, ORACLE: 54 },
    { year: "2019", OLR: 51, E2X: 41, ORACLE: 54 },
    { year: "2020", OLR: 60, E2X: 37, ORACLE: 28 },
    { year: "2021", OLR: 51, E2X: 31, ORACLE: 27 },
    { year: "2022", OLR: 95, E2X: 44, ORACLE: 49 },
  ];
  
  function Recharts() {
    return (
      <LineChart width={600} height={300} data={data} margin={{top:10,right: 30,left:20,bottom: 5,}}>
        <Line type="monotone" dataKey="OLR" stroke="blue" strokeWidth={2} />
        <Line type="monotone" dataKey="E2X" stroke="red" strokeWidth={2} />
        <Line type="monotone" dataKey="ORACLE" stroke="orange" strokeWidth={2} />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <CartesianGrid strokeDasharray="2" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
       <Legend/>
      </LineChart>
    );
  };
  
  export default Recharts;