function stockPicker(arr) {
  var maximum_profit = -1;
  var buy_price = 0;
  var sell_price = 0;

  // Allows loop to keep iterating the buy price until 
  // a cheaper price is found.
  var change_buy_index = true;

  // Loop through the list of stock prices once.
  for (var i = 0; i < arr.length - 1; i++) {
    // Sellingl price is the next element on the list.
    sell_price = arr[i + 1];
    // If an unsuitable buying price is not found, set 
    // the buying price equal to the current element.
    if (change_buy_index) {
        buy_price = arr[i];
    }
    // If the selling price is less than the buying price, 
    // no profit is made, so continue to the next element
    // in the list (with a new buying price).
    if (sell_price < buy_price) {
        change_buy_index = true;
        continue;
    }
    // If the selling price is greater than the buying price,
    // check to see if the two indices give a better profit
    // than the current price.
    else {
        var temporary_profit = sell_price - buy_price;
        if (temporary_profit > maximum_profit) {
            maximum_profit = temporary_profit;
        }
        change_buy_index = false;
    }
  }
  return maximum_profit;
}

stockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]);
