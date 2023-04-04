import { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}

function Analysis() {
  const types = [
    { name: "brewpub", count: 46 },
    { name: "closed", count: 10 },
    { name: "contract", count: 6 },
    { name: "large", count: 14 },
    { name: "micro", count: 112 },
    { name: "planning", count: 4 },
    { name: "reginal", count: 2 },
    { name: "properietor", count: 4 },
  ];
  const states = [
    { name: "Arizona", count: 3 },
    { name: "California", count: 11 },
    { name: "Colorado", count: 7 },
    { name: "Florida", count: 5 },
    { name: "Minnesota", count: 3 },
    { name: "New York", count: 5 },
    { name: "Oregon", count: 7 },
    { name: "Texas", count: 4 },
    { name: "Washington", count: 6 },
  ]


  return (
    <div className="Analysis">
      <h3>Types of Brewery</h3>
      <LineChart width={800} height={300} data={types}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" stroke="#8884d8"/>
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
      </LineChart>

      <h3>States of Brewery</h3>
      <LineChart width={800} height={300} data={states}>
        <Line type="monotone" dataKey="count" stroke="#0784d0" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" stroke="#0784d0"/>
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
      </LineChart>
    </div>
  );
}

export default Analysis;
