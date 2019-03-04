const Order = require("./app/Order");
const Product = require("./app/Product");
const Prices = require("./app/Prices");
const TextReceiptGenerator = require("./app/TextReceiptGenerator");
const JSONReceiptGenerator = require("./app/JSONReceiptGenerator");
const HTMLReceiptGenerator = require("./app/HTMLReceiptGenerator");
// generate new order
const order = new Order("Moto Super AS");
const motorSuper = new Product("Car Insurance", "Super", Prices.TwoThousand);
order.addOrderLine(motorSuper, 1);
// generate text receipt
const textReceipt = new TextReceiptGenerator(order);
textReceipt.generate();
// generate json receipt
const JSONReceipt = new JSONReceiptGenerator(order);
JSONReceipt.generate();
// generate html receipt
const HTMLReceipt = new HTMLReceiptGenerator(order);
HTMLReceipt.generate();
