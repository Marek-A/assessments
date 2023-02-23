# Documentation for ShipmentsTable Component

## Overview

This is a React functional component called ShipmentsTable. It is responsible for rendering a table of shipment data with buttons to delete a shipment and view the details of a shipment.
The component fetches the data from a local JSON file/ from API using Axios, and is wrapped with Bootstrap components.

## Dependencies

- React: a JavaScript library for building user interfaces.
- React Bootstrap: a front-end framework built on top of Bootstrap.
- Axios for API fetch.

## State

The ShipmentsTable component has the following states:

- shipments: an array that holds all shipment data fetched from the local JSON file.
- selectedShipment: an object that represents the currently selected shipment.
- showInfoBox: a boolean value that determines whether the shipment details panel is displayed or not.

## Methods

The ShipmentsTable component has the following methods:

- handleDelete(orderNo)
  This method takes an orderNo parameter and deletes the corresponding shipment from the shipments array state. If the deleted shipment was currently selected, it deselects the shipment by setting selectedShipment to null.

- handleRowClick(shipment)
  This method takes a shipment parameter and sets it as the currently selected shipment by updating the selectedShipment state. It also hides the shipment details panel if it was previously displayed.

- handleInfo(e, shipment)
  This method takes two parameters: an event object e and a shipment object. It prevents the event from propagating and sets the shipment object as the currently selected shipment. It also shows the shipment details panel by setting showInfoBox to true.

- handleCloseInfoBox()
  This method hides the shipment details panel by setting showInfoBox to false.
