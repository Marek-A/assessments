import React from 'react';
import Button from 'react-bootstrap/Button';
import { useShipments } from '../hooks/useShipments'; //IMPORTED HOOK 
function ShipmentsTable() {
    const { shipments, handleDelete, handleUpdate } = useShipments();
    return (
        <div id="page-container">
            <section id="table-container">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>ORDER NUMBER</th>
                            <th>DELIVERY DATE</th>
                            <th>CUSTOMER</th>
                            <th>TRACKING NUMBER</th>
                            <th>STATUS</th>
                            <th>CONSIGNEE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map((shipment) => (
                            <tr key={shipment.orderNo}>
                                <td>{shipment.orderNo}</td>
                                <td>{shipment.date}</td>
                                <td>{shipment.customer}</td>
                                <td>{shipment.trackingNo}</td>
                                <td>{shipment.status}</td>
                                <td>{shipment.consignee}</td>
                                <td>
                                    <Button variant="success" onClick={() => handleUpdate(shipment.orderNo, 'status', 'Delivered')}>UPDATE</Button>
                                    <Button variant="warning" onClick={() => handleDelete(shipment.orderNo)}>DELETE</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default ShipmentsTable;
