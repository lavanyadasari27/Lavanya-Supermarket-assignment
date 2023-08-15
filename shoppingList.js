const fs = require("fs");

const jsonString = fs.readFileSync("./shoppingList.json", "utf-8");
const jsonData = JSON.parse(jsonString);



const htmlContent = generateHTML(jsonData);
fs.writeFileSync("./shoppingList.html", htmlContent);