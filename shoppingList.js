const fs = require("fs");

const jsonString = fs.readFileSync("./shoppingList.json", "utf-8");
const jsonData = JSON.parse(jsonString);



function generateHTML(data) {

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
      
      <h1>Shopping List</h1>
       
    </body>
    </html>`;
}




const htmlContent = generateHTML(jsonData);
fs.writeFileSync("./shoppingList.html", htmlContent);