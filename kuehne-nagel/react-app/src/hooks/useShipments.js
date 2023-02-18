import { useState, useEffect } from "react";
import axios from "axios";

export function useShipments() {
  const [shipments, setShipments] = useState([]);

useEffect(() => {
  const fetchShipments = async () => {
    try {
      const response = await axios.get("shipments.json");
      setShipments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchShipments();
}, []);

  // "handleDelete"
  // This function is responsible for handling the deletion of a shipment.
  // It receives the id of the shipment to be deleted as a parameter, then uses the filter() method to create a new array that excludes the shipment with the matching id.
  // The new array is then set as the new state of shipments using setShipments().

  const handleDelete = (id) => {
    const updatedShipments = shipments.filter(
      (shipment) => shipment.orderNo !== id
    );
    setShipments(updatedShipments);
  };

  // "handleUpdate"
  // This function is responsible for handling the update of a shipment.
  // It receives the id of the shipment to be updated, the field to be updated, and the new value to be set.
  // It uses the map() method to create a new array that has the updated value for the matching shipment, while keeping the other properties of the shipment unchanged.
  //The new array is then set as the new state of shipments using setShipments().

  const handleUpdate = (id, field, value) => {
    const updatedShipments = shipments.map((shipment) => {
      if (shipment.orderNo === id) {
        return { ...shipment, [field]: value };
      }
      return shipment;
    });
    setShipments(updatedShipments);
  };

  return { shipments, handleDelete, handleUpdate };
}
