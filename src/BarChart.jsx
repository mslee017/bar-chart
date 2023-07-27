import { useState } from 'react';
import './styles.css';
import { getData } from './api';

const BarChart = () => {
  const [barData, setBarData] = useState([]);

  const fetchData = async () => {
    const data = await getData();
    setBarData(data);
  };

  fetchData();

  const sortData = data => {
    const { ticketCount } = data;
    console.log(ticketCount);
  };

  sortData(barData);

  return (
    <>
      <label htmlFor="sort-select">Sort Chart</label>
      <select name="sort" id="sort-select">
        <option value="default">Default</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <div className="chart-background">
        {barData.map(data => (
          <div
            key={data.id}
            style={{ height: data.ticketCount, backgroundColor: data.colour }}
          >
            {data.ticketCount}
          </div>
        ))}
      </div>
    </>
  );
};

export default BarChart;
