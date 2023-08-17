const itemGST = require("./ItemGST");

function ShoppingListDetails(shoppingList) {
  let Total = 0;
  let grandTotal = 0;
  let totalGST = 0;
  let discount = 0;
  let itemAfterDiscount = 0;

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
  <th>GST(Item level)</th>
  </strong>
   </tr>
  </div>
  </div>`;
  shoppingList.forEach((item) => {
    const gstPrice = itemGST(item);
    totalGST += gstPrice * item.quantity;
    itemAfterDiscount = item.Price * 0.9;
    Total += itemAfterDiscount * item.quantity;
    shoppingListDescription += ` 
    <div id="items">
    <div id="list">
    <tr>
    <td>${item.name}</td>
    <td> ${item.quantity}</td>
     <td>${item.measurement}</td>
     <td>${item.Price}</td>
     <td>${gstPrice * item.quantity}</td>
    </tr>
    </div>
    </div>
    `;
  });
  if (Total > 1000) {
    discount = Total * 0.1;
  }
  grandTotal = Total - discount + totalGST;
  shoppingListDescription += ` 
  </table>
  <div id="alignment">
    <p>---------------------------------------------------------------------</p>
    </div>
    <div id="TotalAmount">
    <strong>Total: ${Total.toFixed(2)}</strong>
    <br><strong>Store level Discount: -${discount}</strong><br>
    <strong>GST: +${totalGST}</strong><br>
    <strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
    <br>---------------------------------------------------------------------
    </div>`;

  return shoppingListDescription;
}

module.exports = ShoppingListDetails;
