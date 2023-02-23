import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function ShipmentsTable() {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [showInfoBox, setShowInfoBox] = useState(false);

  // Fetch data from API using axios, but disabled due to site being overloaded
  // We can enable it once the site is back online
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
  //     );
  //     setShipments(result.data);
  //   };
  //   fetchData();
  // }, []);

  // Instead of using the API, fetch data from a local file named shipmentsdata.json
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/shipmentsdata.json');
      const data = await result.json();
      setShipments(data);
    };
    fetchData();
  }, []);

  // Delete a shipment from the list when the delete button is clicked
  const handleDelete = (orderNo) => {
    setShipments(shipments.filter((shipment) => shipment.orderNo !== orderNo));

    // Deselect the shipment if it was selected and then deleted
    if (selectedShipment && selectedShipment.orderNo === orderNo) {
      setSelectedShipment(null);
    }
  };

  // When a row in the table is clicked, select the corresponding shipment
  const handleRowClick = (shipment) => {
    setSelectedShipment(shipment);
    setShowInfoBox(false); // Close the info box if it was open
  };

  // When the info button is clicked, show the info box and select the corresponding shipment
  const handleInfo = (e, shipment) => {
    e.stopPropagation();
    setSelectedShipment(shipment);
    setShowInfoBox(true);
  };

  // When the close button is clicked in the info box, hide the info box
  const handleCloseInfoBox = () => {
    setShowInfoBox(false);
  };
  return (
    <div>

      {/* ------------------------ SHIPMENT INFO PANEL ------------------------ */}
      {selectedShipment && showInfoBox && (
        <div className="info-box">
          <div className="info-header">
            <h2>Shipment Details</h2>
            <Button variant="danger" onClick={handleCloseInfoBox}>X</Button>
          </div>
          <div className="info-content">
            <label>
              Order No:
              <input type="text" value={selectedShipment.orderNo} onChange={(e) => setSelectedShipment({ ...selectedShipment, orderNo: e.target.value })} />
            </label>
            <label>
              Date:
              <input type="text" value={selectedShipment.date} onChange={(e) => setSelectedShipment({ ...selectedShipment, date: e.target.value })} />
            </label>
            <label>
              Customer:
              <input type="text" value={selectedShipment.customer} onChange={(e) => setSelectedShipment({ ...selectedShipment, customer: e.target.value })} />
            </label>
            <label>
              Tracking No:
              <input type="text" value={selectedShipment.trackingNo} onChange={(e) => setSelectedShipment({ ...selectedShipment, trackingNo: e.target.value })} />
            </label>
            <label>
              Status:
              <input type="text" value={selectedShipment.status} onChange={(e) => setSelectedShipment({ ...selectedShipment, status: e.target.value })} />
            </label>
            <label>
              Consignee:
              <input type="text" value={selectedShipment.consignee} onChange={(e) => setSelectedShipment({ ...selectedShipment, consignee: e.target.value })} />
            </label>
            <div>
            </div>
            <div className="update-button-container">
              <Button variant="success" >Update</Button>
              {/* Update button is not functional */}
            </div>
          </div>
        </div>
      )}


      {/* ------------------------ TABLE ------------------------ */}
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Delivery Date</th>
            <th>Customer</th>
            <th>Tracking No</th>
            <th>Status</th>
            <th>Consignee</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.orderNo} onClick={() => handleRowClick(shipment)}>
              <td>{shipment.orderNo}</td>
              <td>{shipment.date}</td>
              <td>{shipment.customer}</td>
              <td>{shipment.trackingNo}</td>
              <td>{shipment.status}</td>
              <td>{shipment.consignee}</td>
              <td>
                <Button variant="primary" onClick={(e) => handleInfo(e, shipment)}>INFO</Button>
                {/* Info button - functional - opens info panel */}
              </td>
              <td>
                <Button variant="danger" onClick={(e) => { e.stopPropagation(); handleDelete(shipment.orderNo); }}>X</Button>
                {/* Delete button - functional - deletes shipment, will come back after refresh*/}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </div >
  );
}

export default ShipmentsTable;
