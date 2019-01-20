# My Shopify challenge submission

How to setup this project:
1. Make sure [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) are installed.
2. Open the mongo shell by typing mongo in a terminal window.
3. Enter the following command in the mongo shell to add dummy items to the **inventory** collection in the database :
```
db.inventory.insertMany([
  { title: "snowboard", price: 150.00, inventory_count: 10 },
  { title: "skis", price: 100.00, inventory_count: 15 },
  { title: "helmet", price: 50.00, inventory_count: 20 },
  { title: "ski_poles", price: 50.00, inventory_count: 0 }
])
```
4. Close the mongo shell and make sure all required packages have been downloaded by running the command `npm install` in a terminal window at the project root.
5. Run the server by running the command `node index.js`.
6. You should now be able to make requests to the API. You can use a program like [Postman](https://www.getpostman.com/) to easily test http requests.

Possible requests:
- Get all items: Send an HTTP GET request to http://localhost:3000/items
- Get all available items: Send an HTTP GET request to http://localhost:3000/items?available
- Get a specific item: Send an HTTP GET request to http://localhost:3000/items/item_name example: http://localhost:3000/items/snowboard
- Buy a product: Send an HTTP PUT request to http://localhost:3000/items/item_name
