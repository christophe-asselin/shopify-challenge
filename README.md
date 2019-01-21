# My Shopify challenge submission

How to setup this project:
1. Make sure [Node.js](https://nodejs.org/en/) is installed.
2. Run the server by running the command `node index.js`.
3. You should now be able to make requests to the API. You can use a program like [Postman](https://www.getpostman.com/) to easily test http requests.

Possible requests:
- Get all items: Send an HTTP GET request to http://localhost:8080/items?available=false
- Get all available items: Send an HTTP GET request to http://localhost:8080/items?available=true
- Get a specific item: Send an HTTP GET request to http://localhost:8080/items/item_name example: http://localhost:8080/items/snowboard
- Buy a product: Send an HTTP PUT request to http://localhost:8080/items/item_name
