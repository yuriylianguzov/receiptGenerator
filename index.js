const Order = require("./app/Order");
const Product = require("./app/Product");
const Prices = require("./app/Prices");
const TextReceiptGenerator = require("./app/TextReceiptGenerator");
// generate new order
const order = new Order("Moto Super AS");
const motorSuper = new Product("Car Insurance", "Super", Prices.TwoThousand);
order.addOrderLine(motorSuper, 1);
const receipt = new TextReceiptGenerator(order);
receipt.generateTextReceipt();
