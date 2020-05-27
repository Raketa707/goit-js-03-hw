  
function calculateTotalPrice (allProducts, productName) {
    let total = 0;

    for (const item of allProducts) {
        let name = item.name;

        if (productName === name) {
            total += item.price * item.quantity;
        }
    }

    return total;
}

const allProducts = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
console.log(calculateTotalPrice(products, 'Сканер'));// 8100