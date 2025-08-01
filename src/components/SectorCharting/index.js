import {
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Dropdown, Form } from "react-bootstrap";
import { useState } from "react";

const SectorCharting = () => {
  const data1m = [
    {
      date: "3/15/2025",
      valueXLK: 80.33,
      valueXLV: 60.57,
      valueXLF: 15.72,
      valueXLY: 35.96,
      valueXLP: 69.27,
      valueXLE: 71.29,
      valueXLI: 38.74,
      valueXLB: 80.05,
      valueXLU: 88.19,
      valueXLRE: 59.46,
      valueXLC: 31.19,
    },
    {
      date: "3/16/2025",
      valueXLK: 55.39,
      valueXLV: 65.86,
      valueXLF: 37.13,
      valueXLY: 33.8,
      valueXLP: 10.61,
      valueXLE: 36.55,
      valueXLI: 40.79,
      valueXLB: 49.81,
      valueXLU: 6.1,
      valueXLRE: 61.22,
      valueXLC: 44.76,
    },
    {
      date: "3/17/2025",
      valueXLK: 52.58,
      valueXLV: 85.71,
      valueXLF: 66.8,
      valueXLY: 62.82,
      valueXLP: 72.93,
      valueXLE: 44.4,
      valueXLI: 3.89,
      valueXLB: 85.76,
      valueXLU: 80.21,
      valueXLRE: 44.37,
      valueXLC: 48.35,
    },
    {
      date: "3/18/2025",
      valueXLK: 41.92,
      valueXLV: 64.92,
      valueXLF: 15.59,
      valueXLY: 39.12,
      valueXLP: 45.86,
      valueXLE: 90.52,
      valueXLI: 12.77,
      valueXLB: 80.02,
      valueXLU: 28.97,
      valueXLRE: 24.77,
      valueXLC: 2.9,
    },
    {
      date: "3/19/2025",
      valueXLK: 94.44,
      valueXLV: 16.37,
      valueXLF: 87.14,
      valueXLY: 10.02,
      valueXLP: 46.28,
      valueXLE: 42.37,
      valueXLI: 23.43,
      valueXLB: 32.9,
      valueXLU: 70.07,
      valueXLRE: 23.37,
      valueXLC: 32.24,
    },
    {
      date: "3/20/2025",
      valueXLK: 77.5,
      valueXLV: 50.44,
      valueXLF: 69.76,
      valueXLY: 45.12,
      valueXLP: 14.56,
      valueXLE: 79.15,
      valueXLI: 36.16,
      valueXLB: 46.51,
      valueXLU: 81.08,
      valueXLRE: 10.04,
      valueXLC: 58.63,
    },
    {
      date: "3/21/2025",
      valueXLK: 4.88,
      valueXLV: 40.85,
      valueXLF: 59.1,
      valueXLY: 41.69,
      valueXLP: 40.8,
      valueXLE: 43.03,
      valueXLI: 1.22,
      valueXLB: 71.7,
      valueXLU: 94.97,
      valueXLRE: 24.87,
      valueXLC: 8.01,
    },
    {
      date: "3/22/2025",
      valueXLK: 78.63,
      valueXLV: 92.47,
      valueXLF: 49.94,
      valueXLY: 1.69,
      valueXLP: 28.32,
      valueXLE: 49.91,
      valueXLI: 71.32,
      valueXLB: 69.13,
      valueXLU: 49.82,
      valueXLRE: 73.44,
      valueXLC: 53.48,
    },
    {
      date: "3/23/2025",
      valueXLK: 96.14,
      valueXLV: 33.02,
      valueXLF: 81.41,
      valueXLY: 87.29,
      valueXLP: 59.59,
      valueXLE: 21.04,
      valueXLI: 70.73,
      valueXLB: 98.13,
      valueXLU: 7.66,
      valueXLRE: 66.8,
      valueXLC: 49.78,
    },
    {
      date: "3/23/2025",
      valueXLK: 66.09,
      valueXLV: 90.29,
      valueXLF: 56.73,
      valueXLY: 44.81,
      valueXLP: 36.8,
      valueXLE: 25.6,
      valueXLI: 8.86,
      valueXLB: 97.54,
      valueXLU: 26.28,
      valueXLRE: 65.04,
      valueXLC: 18.62,
    },
    {
      date: "3/25/2025",
      valueXLK: 63.19,
      valueXLV: 74.0,
      valueXLF: 33.06,
      valueXLY: 3.37,
      valueXLP: 90.78,
      valueXLE: 28.2,
      valueXLI: 99.75,
      valueXLB: 37.64,
      valueXLU: 66.46,
      valueXLRE: 47.23,
      valueXLC: 66.9,
    },
    {
      date: "3/26/2025",
      valueXLK: 75.89,
      valueXLV: 36.19,
      valueXLF: 76.5,
      valueXLY: 26.04,
      valueXLP: 99.53,
      valueXLE: 58.09,
      valueXLI: 55.26,
      valueXLB: 73.93,
      valueXLU: 68.19,
      valueXLRE: 60.73,
      valueXLC: 99.09,
    },
    {
      date: "3/27/2025",
      valueXLK: 4.31,
      valueXLV: 47.45,
      valueXLF: 56.68,
      valueXLY: 49.86,
      valueXLP: 54.97,
      valueXLE: 75.58,
      valueXLI: 91.69,
      valueXLB: 9.72,
      valueXLU: 36.1,
      valueXLRE: 94.4,
      valueXLC: 85.24,
    },
    {
      date: "3/28/2025",
      valueXLK: 19.34,
      valueXLV: 30.14,
      valueXLF: 38.53,
      valueXLY: 14.14,
      valueXLP: 12.51,
      valueXLE: 16.57,
      valueXLI: 17.36,
      valueXLB: 75.91,
      valueXLU: 93.73,
      valueXLRE: 70.83,
      valueXLC: 11.75,
    },
    {
      date: "3/29/2025",
      valueXLK: 74.88,
      valueXLV: 20.24,
      valueXLF: 95.6,
      valueXLY: 1.35,
      valueXLP: 60.46,
      valueXLE: 61.34,
      valueXLI: 63.68,
      valueXLB: 87.61,
      valueXLU: 13.66,
      valueXLRE: 34.04,
      valueXLC: 49.06,
    },
    {
      date: "3/30/2025",
      valueXLK: 98.96,
      valueXLV: 82.31,
      valueXLF: 42.82,
      valueXLY: 91.52,
      valueXLP: 89.4,
      valueXLE: 55.46,
      valueXLI: 94.62,
      valueXLB: 93.63,
      valueXLU: 9.27,
      valueXLRE: 68.83,
      valueXLC: 61.28,
    },
    {
      date: "3/31/2025",
      valueXLK: 97.96,
      valueXLV: 40.22,
      valueXLF: 93.87,
      valueXLY: 5.88,
      valueXLP: 91.69,
      valueXLE: 5.63,
      valueXLI: 4.2,
      valueXLB: 64.3,
      valueXLU: 58.52,
      valueXLRE: 37.72,
      valueXLC: 43.07,
    },
    {
      date: "4/01/2025",
      valueXLK: 93.44,
      valueXLV: 90.0,
      valueXLF: 67.6,
      valueXLY: 71.0,
      valueXLP: 12.36,
      valueXLE: 53.42,
      valueXLI: 40.29,
      valueXLB: 46.48,
      valueXLU: 36.29,
      valueXLRE: 96.31,
      valueXLC: 62.95,
    },
    {
      date: "4/02/2025",
      valueXLK: 13.94,
      valueXLV: 1.4,
      valueXLF: 43.88,
      valueXLY: 79.63,
      valueXLP: 62.88,
      valueXLE: 13.27,
      valueXLI: 50.79,
      valueXLB: 31.4,
      valueXLU: 97.2,
      valueXLRE: 49.12,
      valueXLC: 29.06,
    },
    {
      date: "4/03/2025",
      valueXLK: 23.08,
      valueXLV: 93.14,
      valueXLF: 79.97,
      valueXLY: 21.92,
      valueXLP: 18.82,
      valueXLE: 32.64,
      valueXLI: 25.0,
      valueXLB: 81.75,
      valueXLU: 95.61,
      valueXLRE: 50.36,
      valueXLC: 88.68,
    },
    {
      date: "4/04/2025",
      valueXLK: 21.96,
      valueXLV: 24.26,
      valueXLF: 95.21,
      valueXLY: 21.46,
      valueXLP: 10.18,
      valueXLE: 16.88,
      valueXLI: 15.06,
      valueXLB: 9.52,
      valueXLU: 21.73,
      valueXLRE: 90.54,
      valueXLC: 49.45,
    },
    {
      date: "4/05/2025",
      valueXLK: 94.17,
      valueXLV: 62.96,
      valueXLF: 77.66,
      valueXLY: 60.41,
      valueXLP: 2.73,
      valueXLE: 48.18,
      valueXLI: 96.66,
      valueXLB: 15.9,
      valueXLU: 34.9,
      valueXLRE: 41.67,
      valueXLC: 39.83,
    },
    {
      date: "4/06/2025",
      valueXLK: 27.08,
      valueXLV: 95.19,
      valueXLF: 48.95,
      valueXLY: 14.53,
      valueXLP: 4.55,
      valueXLE: 98.14,
      valueXLI: 48.18,
      valueXLB: 65.82,
      valueXLU: 25.42,
      valueXLRE: 23.62,
      valueXLC: 64.47,
    },
    {
      date: "4/07/2025",
      valueXLK: 59.95,
      valueXLV: 78.25,
      valueXLF: 3.42,
      valueXLY: 79.76,
      valueXLP: 53.99,
      valueXLE: 90.67,
      valueXLI: 32.09,
      valueXLB: 72.13,
      valueXLU: 16.33,
      valueXLRE: 38.42,
      valueXLC: 28.45,
    },
    {
      date: "4/08/2025",
      valueXLK: 55.76,
      valueXLV: 72.15,
      valueXLF: 28.2,
      valueXLY: 96.01,
      valueXLP: 8.12,
      valueXLE: 46.31,
      valueXLI: 24.17,
      valueXLB: 40.51,
      valueXLU: 36.34,
      valueXLRE: 62.72,
      valueXLC: 59.84,
    },
    {
      date: "4/09/2025",
      valueXLK: 85.85,
      valueXLV: 5.12,
      valueXLF: 65.74,
      valueXLY: 12.11,
      valueXLP: 21.08,
      valueXLE: 39.51,
      valueXLI: 13.87,
      valueXLB: 59.54,
      valueXLU: 6.71,
      valueXLRE: 98.9,
      valueXLC: 93.02,
    },
    {
      date: "4/10/2025",
      valueXLK: 44.85,
      valueXLV: 85.42,
      valueXLF: 73.94,
      valueXLY: 46.8,
      valueXLP: 90.59,
      valueXLE: 94.08,
      valueXLI: 46.41,
      valueXLB: 81.27,
      valueXLU: 27.29,
      valueXLRE: 41.56,
      valueXLC: 4.23,
    },
    {
      date: "4/11/2025",
      valueXLK: 26.85,
      valueXLV: 86.1,
      valueXLF: 78.56,
      valueXLY: 38.57,
      valueXLP: 13.25,
      valueXLE: 59.93,
      valueXLI: 51.49,
      valueXLB: 74.05,
      valueXLU: 31.86,
      valueXLRE: 95.44,
      valueXLC: 25.34,
    },
    {
      date: "4/12/2025",
      valueXLK: 11.01,
      valueXLV: 82.5,
      valueXLF: 66.5,
      valueXLY: 74.14,
      valueXLP: 29.0,
      valueXLE: 4.69,
      valueXLI: 76.23,
      valueXLB: 5.43,
      valueXLU: 37.39,
      valueXLRE: 26.68,
      valueXLC: 94.2,
    },
    {
      date: "4/13/2025",
      valueXLK: 51.98,
      valueXLV: 48.51,
      valueXLF: 37.66,
      valueXLY: 97.41,
      valueXLP: 75.06,
      valueXLE: 92.31,
      valueXLI: 91.82,
      valueXLB: 75.68,
      valueXLU: 76.02,
      valueXLRE: 86.96,
      valueXLC: 41.85,
    },
  ];

  const dataytd = [
    {
      date: "01/01/2025",
      valueXLK: 45.03,
      valueXLV: 2.29,
      valueXLF: 50.47,
      valueXLY: 52.09,
      valueXLP: 97.01,
      valueXLE: 64.56,
      valueXLI: 26.91,
      valueXLB: 20.0,
      valueXLU: 14.5,
      valueXLRE: 7.39,
      valueXLC: 28.51,
    },
    {
      date: "1/15/2025",
      valueXLK: 31.08,
      valueXLV: 12.87,
      valueXLF: 80.12,
      valueXLY: 71.62,
      valueXLP: 23.45,
      valueXLE: 45.97,
      valueXLI: 54.43,
      valueXLB: 35.44,
      valueXLU: 90.43,
      valueXLRE: 41.15,
      valueXLC: 89.38,
    },
    {
      date: "2/01/2025",
      valueXLK: 73.4,
      valueXLV: 11.53,
      valueXLF: 95.35,
      valueXLY: 38.85,
      valueXLP: 64.46,
      valueXLE: 56.7,
      valueXLI: 42.83,
      valueXLB: 50.11,
      valueXLU: 23.51,
      valueXLRE: 48.47,
      valueXLC: 99.17,
    },
    {
      date: "2/15/2025",
      valueXLK: 46.3,
      valueXLV: 76.01,
      valueXLF: 42.43,
      valueXLY: 20.41,
      valueXLP: 80.59,
      valueXLE: 15.45,
      valueXLI: 55.45,
      valueXLB: 78.54,
      valueXLU: 35.13,
      valueXLRE: 49.25,
      valueXLC: 52.17,
    },
    {
      date: "3/01/2025",
      valueXLK: 31.6,
      valueXLV: 48.64,
      valueXLF: 34.49,
      valueXLY: 97.79,
      valueXLP: 78.1,
      valueXLE: 66.78,
      valueXLI: 38.5,
      valueXLB: 72.41,
      valueXLU: 12.6,
      valueXLRE: 7.24,
      valueXLC: 29.16,
    },
    {
      date: "3/15/2025",
      valueXLK: 78.35,
      valueXLV: 83.11,
      valueXLF: 47.44,
      valueXLY: 8.65,
      valueXLP: 6.25,
      valueXLE: 60.77,
      valueXLI: 14.68,
      valueXLB: 6.23,
      valueXLU: 53.04,
      valueXLRE: 63.7,
      valueXLC: 45.26,
    },
    {
      date: "4/01/2025",
      valueXLK: 13.43,
      valueXLV: 54.78,
      valueXLF: 88.99,
      valueXLY: 49.52,
      valueXLP: 97.22,
      valueXLE: 12.41,
      valueXLI: 45.49,
      valueXLB: 93.98,
      valueXLU: 50.87,
      valueXLRE: 64.89,
      valueXLC: 15.43,
    },
    {
      date: "4/15/2025",
      valueXLK: 62.68,
      valueXLV: 79.51,
      valueXLF: 97.5,
      valueXLY: 45.52,
      valueXLP: 72.65,
      valueXLE: 25.36,
      valueXLI: 70.14,
      valueXLB: 1.08,
      valueXLU: 76.44,
      valueXLRE: 50.45,
      valueXLC: 42.11,
    },
  ];

  const allData = { data1m, dataytd };

  const colors = [
    "#8884d8", // purple
    "#82ca9d", // green
    "#ffc658", // yellow-orange
    "#ff7300", // orange
    "#00c49f", // teal
    "#0088fe", // blue
    "#d0ed57", // lime
    "#a4de6c", // light green
    "#ff69b4", // pink
    "#b8860b", // dark goldenrod
    "#6a5acd", // slate blue
  ];

  const options = [
    "valueXLK",
    "valueXLV",
    "valueXLF",
    "valueXLY",
    "valueXLP",
    "valueXLE",
    "valueXLI",
    "valueXLB",
    "valueXLU",
    "valueXLRE",
    "valueXLC",
  ];

  const times = ["data1m", "data3m", "data6m", "data1y", "data5y", "dataytd"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [data, setData] = useState(data1m);

  console.log(data);

  const handleSelect = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleTimeSelect = (e) => {
    setData(allData[e.target.value]);
    console.log(e.target.value);
  };

  return (
    <div className="ms-5 ps-5">
      <h1>SECTOR CHARTING</h1>
      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Select ETFs
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => (
            <Form>
              <div key={option} className="mb-3">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  id={option}
                  label={option}
                  value={option}
                  onChange={handleSelect}
                />
              </div>
            </Form>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <select onChange={handleTimeSelect}>
        {times.map((time) => (
          <option value={time}>{time}</option>
        ))}
      </select>

      <LineChart
        width={1300}
        height={550}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[-25, 120]} />
        <Tooltip />
        <Legend />
        {selectedOptions.map((option, i) => (
          <Line
            type="cardinal"
            dataKey={option}
            stroke={colors[i % colors.length]}
            strokeWidth={3}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default SectorCharting;

