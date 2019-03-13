function checkCashRegister(price, cash, cid) {
  
    let changeDue = cash - price;
    
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
    let cashInDrawer = 0;
    cid.forEach((penny) => {
      cashInDrawer += penny[1];
      console.log(cashInDrawer, penny[1]);
    });
    
    // Creating a new object with money(key) and quantity in drawer (value)
    let quantityOfEach = {};
    cid.forEach((money) => {
      quantityOfEach[money[0]] = Math.round((money[1] / currency[money[0]])*100) /100;
    });
  
    // LOGIC PARTS
    // Lack of change removed here
    if(changeDue > cashInDrawer){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    // Perfect change removed here
    if(cashInDrawer - changeDue === 0){
      return {status: "CLOSED", change: cid}; 
    }
    
  
    // For loop and while loop that gives a change array with all the correct coins and notes needed
    let change = [];
    for(let key in currency){
      if(quantityOfEach[key] > 0 && changeDue >= currency[key]){
          let value = 0;
          let arr = [];
          while(quantityOfEach[key] > 0 && changeDue >= currency[key]){
            value += currency[key];
            changeDue -= currency[key];
            quantityOfEach[key] -= 1;
          }
          arr = [key, value];
          change.push(arr);
          
       }
    }
  
  //   console.log(changeDue, quantityOfEach);
    // If after sorting, not correct change - removed here
    if(changeDue > 0.01){return {status: "INSUFFICIENT_FUNDS", change: []};};
    
    
    
    return change;
    
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));