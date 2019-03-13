function checkCashRegister(price, cash, cid) {
    // Workout the change due
    let changeDue = cash - price;
    
    // Object of all US currency names and their value
    let currency = {
          "ONE HUNDRED": 100,
          "TWENTY" : 20,
          "TEN" : 10,
          "FIVE": 5,
          "ONE": 1,
          "QUARTER": 0.25,
          "DIME": 0.1,
          "NICKEL": 0.05,
          "PENNY": 0.01
        };
    
    // Adding up the cash in the drawer
    // initialise cashInDrawer variable
    let cashInDrawer = 0;

    // Iterate the provided cid(cash in drawer) array and add up the available cash in the drawer.
    cid.forEach(penny => {
      cashInDrawer += penny[1];
    });

    // Due to small numbers, javaScript will often give large amounts of decimal places.  This messes up the function later on, so cashInDrawer is converted to 2dp here.
    cashInDrawer = Number(cashInDrawer.toFixed(2));
    
    // Creating a new object with money(key) and quantity in drawer (value)
    let quantityOfEach = {};
    cid.forEach(money => {
      quantityOfEach[money[0]] = Number((money[1] / currency[money[0]]).toFixed(2));
    });
  
  
    // LOGIC PARTS
    // Lack of change removed here
    if (changeDue > cashInDrawer) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    // Perfect change removed here
    if (cashInDrawer - changeDue === 0) {
      return { status: "CLOSED", change: cid };
    }
    
    // For loop and while loop that gives a change array with all the correct coins and notes needed
    let change = [];
    for (let key in currency) {
      if (quantityOfEach[key] > 0 && changeDue >= currency[key]) {
        // value is the value of each currency item needed
        let value = 0;
        // initialise an empty array
        let arr = [];
        while (quantityOfEach[key] > 0 && changeDue >= currency[key]) {
            value += currency[key];
            changeDue -= currency[key];
            // again, change number to 2 dp to fix accuracy bug
            changeDue = Number(changeDue.toFixed(2));
            // keeps track of available coins in till
            quantityOfEach[key] -= 1;
          }
          // creates new nested array
          arr = [key, value];
          //pushes array into original array
          change.push(arr);
       }
    }
  
    // If after sorting, still not correct change available- removed here
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    // final return if there is enough change in the till and the correct currency available to give that change
    return { status: "OPEN", change: change };
}
    
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
    
// EXAMPLE FUNCTION CALL
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
