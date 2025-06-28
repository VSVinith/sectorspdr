import { useEffect, useState } from "react";
import SectorBar from "../SectorBar";
import "./index.css";
import { Button, Accordion } from "react-bootstrap";
import AccordionHoldings from "../AccordionHoldings";

const SectorTracker = () => {
  const durationTabs = [
    { time: "1 Days", value: "1d" },
    { time: "5 Days", value: "5d" },
    { time: "1 Month", value: "1m" },
    { time: "3 Months", value: "3m" },
    { time: "6 Months", value: "6m" },
    { time: "1 Year", value: "1y" },
    { time: "5 Years", value: "5y" },
    { time: "YTD", value: "ytd" },
  ];

  const [sectorData, setSectorData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [duration, setDuration] = useState("1d");

  const getSectorData = async () => {
    const api = "https://run.mocky.io/v3/f8f30091-6b88-4d45-ae5b-fd5e7960deb5";
    const response = await fetch(api);
    const data = await response.json();
    setSectorData(data.etfs);
  };

  const getHoldingsData = async () => {
    const api = "https://run.mocky.io/v3/41bb8873-4e2b-4208-bcc9-ad2d58040e15";
    const response = await fetch(api);
    const data = await response.json();
    const cos = data.sectors.map((company) => company.holdings);
    setCompanies(cos);
    console.log("acc2", cos.length);
  };

  useEffect(() => {
    getSectorData();
    getHoldingsData();
  }, []);

  const changeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div className="ms-5 ps-5">
      <h1>SECTOR TRACKER</h1>
      {durationTabs.map((duration) => (
        <Button
          className="me-3"
          onClick={changeDuration}
          value={duration.value}
        >
          {duration.time}
        </Button>
      ))}

      {sectorData.map((etf, i) => (
        <div className="d-flex justify-content-center">
          <div className="sector w-75">
            <Accordion className="custom-accordion" flush>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>
                  <div className="w-75">
                    <h6>
                      {etf.symbol} &nbsp; {etf.name}
                    </h6>
                  </div>
                  <div className="w-25">
                    <SectorBar percentage={etf.performance[`${duration}`]} />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {companies[i] ? (
                    <AccordionHoldings companies={companies[i]} />
                  ) : (
                    <p>No holdings available for this sector.</p>
                  )}

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectorTracker;
