Shipments CRUD Page Documentation
Overview
The Shipments CRUD page is a web application that allows users to view and manage shipments data. The application retrieves the data from an external API and displays it in a table format. Users can view details of a single shipment by clicking on a button in the table, and they can delete or update shipments data using additional buttons.

Requirements
The following are the requirements for the Shipments CRUD page:

Load shipments data with AJAX from https://my.api.mockaroo.com/shipments.json?key=5e0b62d0. If the link is not available, an offline version of the file can be used.
Display data in a table format that includes shipment ID, name, date, origin, and destination.
Provide a button in the table to open a panel that shows details of a single shipment, including additional data such as status, weight, and dimensions.
Allow users to delete a shipment from the table by clicking a delete button.
Allow users to update shipment data from the details panel by changing field values in the UI.
Implement the application with either vanilla JavaScript or React. Bonus points are awarded for using React.
Use a CSS template to style the application. The template can be obtained from https://www.creative-tim.com/templates/free.
Use Axios to handle the AJAX requests.
Use Redux for state management. Bonus points are awarded for using Thunk middleware.
Implementation
The application was implemented using React, Axios, and Redux with Thunk middleware. The following are the steps involved in the implementation:

Set up the project structure and create the HTML file.
Install the required packages, including React, Axios, and Redux.
Create a component to handle the table data and use Axios to retrieve the data from the API.
Create a component to handle the details panel and use Redux to manage the state.
Create a component to handle the delete button and dispatch an action to remove the shipment from the table.
Create a component to handle the update button and dispatch an action to update the shipment data in the details panel.
Use a CSS template to style the application.
Conclusion
The Shipments CRUD page is a web application that allows users to view and manage shipments data. The application was implemented using React, Axios, and Redux with Thunk middleware, and it meets all of the requirements outlined in the documentation.
