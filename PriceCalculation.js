const itemGST=require("./ItemGST");

function ShoppingListDetails(shoppingList) {
  let Total = 0;
  let grandTotal = 0;

  let shoppingListDescription = `
  <div id="cart_details">
  <div id="Tax_invoice">
  ***************************** TAX INVOICE ******************************
  </div>
  <div id="alignment">
  <p>---------------------------------------------------------------------</p>
  </div>
  <div id="description">
  <table>
  <strong>
  <tr>
  <th>Name</th>
  <th>Quantity</th>
  <th>Measurement</th>
  <th>Price</th>
  <th>Price(Includes GST)</th>
  </strong>
   </tr>
  </div>
  </div>`;
  shoppingList.forEach((item) => {
    const gstPrice = itemGST(item);
    const itemPriceWithGst = item.Price + gstPrice; ////Price of item including Gst for 1 quantity
    const itemAmountWithGST = itemPriceWithGst * item.quantity;

    Total += item.Price * item.quantity;
    grandTotal += itemAmountWithGST;
    shoppingListDescription += ` 
    <div id="items">
    <div id="list">
    <tr>
    <td>${item.name}</td>
    <td> ${item.quantity}</td>
     <td>${item.measurement}</td>
     <td>${item.Price}</td>
     <td>${itemAmountWithGST.toFixed(2)}</td>
    </tr>
    </div>
    </div>
    `;
  });
  shoppingListDescription += ` 
  </table>
  <div id="alignment">
    <p>---------------------------------------------------------------------</p>
    </div>
    <div id="TotalAmount">
    <strong>Total: ${Total.toFixed(2)}</strong>
    <br><strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
    <br>---------------------------------------------------------------------
    </div>`;

  return shoppingListDescription;
}

module.exports = ShoppingListDetails;