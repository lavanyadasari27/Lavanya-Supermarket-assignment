const fs = require("fs");

const jsonString = fs.readFileSync("./shoppingList.json", "utf-8");
const jsonData = JSON.parse(jsonString);

function UserDetails(user) {
  return `
    <p><strong></strong> ${user.storename}</p>
    <p><strong></strong> ${user.address}</p>
    <p>GST NO:${user["GST NO"]}, PH:${user["Phone number"]}</p>`;
}

function ItemGST(item) {
  if (item.category === "Essential") {
    return item.Price * 0.01;
  } else if (item.category === "Luxury") {
    return item.Price * 0.1;
  } else if (item.category === "Default") {
    return item.Price * 0.05;
  } else {
    return 0;
  }
}

function ShoppingListDetails(shoppingList) {
  let Total = 0;
  let grandTotal = 0;

  let shoppingListDescription = `
  <div>
  <div>
  ***************************** TAX INVOICE ******************************
  </div>
  <div><th>Name</th>
  <th>Quantity</th>
  <th>Measurement</th>
  <th>Category</th>
  <p>---------------------------------------------------------------------</p>
  </div>
  </div>`;
  shoppingList.forEach((item) => {
    const gstPrice = ItemGST(item);
    const itemPriceWithGst = item.Price + gstPrice; ////Price of item including Gst for 1 quantity
    const itemAmountWithGST = itemPriceWithGst * item.quantity;

    Total += item.Price * item.quantity;
    grandTotal += itemAmountWithGST;
    shoppingListDescription += ` 
    <div>
    <p>${item.name} ${item.quantity} ${item.measurement} ${
      item.Price
    } ${itemAmountWithGST.toFixed(2)}  </p>
    <p>--------------------------------------------------------------------</p>
    </div>`;
  });
  shoppingListDescription += ` 
    <div>
    <strong>Total: ${Total.toFixed(2)}</strong>
    <br><strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
    <br>--------------------------------------------------------------------
    </div>`;

  return shoppingListDescription;
}

function generateHTML(data) {
  const userDetailsHTML = UserDetails(data.user);
  const shoppingListHTML = ShoppingListDetails(data.shoppingList);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Shopping List</title>
    </head>
    <body>
    <div>
      <h1>User Information</h1>
      ${userDetailsHTML}
      
      <h1>Shopping List</h1>
       ${shoppingListHTML}
    </div>

    <div>
    For Queries & Complaints 
    WhatsApp using 9100811811
    <br>www.facebook.com/ratnadeepsupermarket
    
    </div>
    </body>
    </html>`;
}

const Content = generateHTML(jsonData);
fs.writeFileSync("./shoppingList.html", Content);
