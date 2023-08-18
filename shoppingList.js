const fs = require("fs");

const jsonString = fs.readFileSync("./shoppingList.json", "utf-8");
const jsonData = JSON.parse(jsonString);
const UserDetails= require("./UserDetails");
const ShoppingListDetails= require("./PriceCalculation");

function generateHTML(data) {
  const userDetailsHTML = UserDetails(data.user);
  const shoppingListHTML = ShoppingListDetails(data.shoppingList);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <link rel="stylesheet" href="shoppingList.css" />
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Shopping List</title>
    </head>
    <body id="font">
    <div>
      <p>${userDetailsHTML}</p> 
      <p>${shoppingListHTML}</p>  
    </div>

    <div id="foot">
    <strong>Thank you & Visit Again</strong>
    <br>For Queries & Complaints 
    WhatsApp using 9100811811
    <br>www.facebook.com/ratnadeepsupermarket
    </div>
    </body>
    </html>`;
}

const Content = generateHTML(jsonData);
fs.writeFileSync("./shoppingList.html", Content);
