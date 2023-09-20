// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

const items = [
    {
        name: "HP CE2",
        category: "Laptop",
        priceUSD: 280000,
    },
    {
        name: "Dell",
        category: "Keybord",
        priceUSD: 1499,
    },
    {
        name: "Apple",
        category: "Mouse",
        priceUSD: 1599,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);