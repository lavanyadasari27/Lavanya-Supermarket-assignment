const itemGST=require("./ItemGST");

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
    const gstPrice = itemGST(item);
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

module.exports = ShoppingListDetails;