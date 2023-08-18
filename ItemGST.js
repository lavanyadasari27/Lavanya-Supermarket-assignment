function itemGST(item) {
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

module.exports= itemGST;