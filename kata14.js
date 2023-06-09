// We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

// Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

// Valid denominations are as follows:

// Twenty dollars
// Ten dollars
// Five dollars
// Two dollars
// One dollar
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)

const calculateChange = function(total, cash) {
  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  let change = cash - total;
  const result = {};

  // Loop through each denomination and its value in the denominations object
  for (const [denomination, value] of Object.entries(denominations)) {
    // Calculate how many times the denomination can be used as change
    const count = Math.floor(change / value);
    // If the denomination can be used at least once as change
    if (count > 0) {
      // Add the denomination and its count to the result object
      result[denomination] = count;
      // Subtract the value of the denominations used as change from the remaining change
      change -= count * value;
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3; }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2; }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4; }