import Table from "react-bootstrap/Table";

const AccordionHoldings = (props) => {
  const { companies } = props;
  console.log("ah", companies);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <p>No. of Holdings</p>
        <p>Change</p>
      </div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company Name</th>
              <th>Index Weight</th>
              <th>Last</th>
              <th>Change</th>
              <th>%Change</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((sector) => (
              <tr>
                <td>{sector.symbol}</td>
                <td>{sector.company_name}</td>
                <td>{sector.index_weight}</td>
                <td>{sector.last_value}</td>
                <td>{sector.change_value}</td>
                <td>{sector.change_percent}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AccordionHoldings;
