const fs = require("fs");

const jsonString = fs.readFileSync("./shoppingList.json", "utf-8");
const jsonData = JSON.parse(jsonString);


function UserDetails(user) {
  return `
    <p><strong>Store Name:</strong> ${user.storename}</p>
    <p><strong>Address:</strong> ${user.address}</p>
    <p><strong>Phone Number:</strong> ${user["Phone number"]}</p>`;
}


function generateHTML(data) {
  const userDetailsHTML = UserDetails(data.user);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Shopping List</title>
    </head>
    <body>
      <h1>User Information</h1>
      ${userDetailsHTML}
      
      <h1>Shopping List</h1>
       
    </body>
    </html>`;
}

const Content = generateHTML(jsonData);
fs.writeFileSync("./shoppingList.html", Content);
