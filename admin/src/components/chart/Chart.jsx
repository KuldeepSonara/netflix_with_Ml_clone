import "./Chart.scss";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react'; // Don't forget to import React if you're using JSX

const Chart = ({ title, data, datakeys, grid }) => {

  return (
    <div className="chart">
        <h3 className="chartTitle">
            {title}
        </h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={datakeys} stroke="#5550bd"/>
                <Tooltip/>
                { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/> }
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Chart; // Export the Chart component as default
