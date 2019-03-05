const Order = require("./Order");
const Product = require("./Product");
const Prices = require("./Prices");
const TextReceiptGenerator = require("./TextReceiptGenerator");
const JSONReceiptGenerator = require("./JSONReceiptGenerator");
const HTMLReceiptGenerator = require("./HTMLReceiptGenerator");

test("Generates new order with correct Company Name", () => {
  expect(new Order("Moto Super AS").companyName).toBe("Moto Super AS");
});

test("Generates new product", () => {
  expect(new Product("Car Insurance", "Super", Prices.TwoThousand)).toEqual({
    productType: "Car Insurance",
    productName: "Super",
    price: 2000
  });
});

test("Can generate text receipt for Moto Super", () => {
  const order = new Order("Moto Super AS");
  const motorSuper = new Product("Car Insurance", "Super", Prices.TwoThousand);
  order.addOrderLine(motorSuper, 1);
  const textReceipt = new TextReceiptGenerator(order);
  expect(textReceipt.generate()).toBe(
    "Order receipt for Moto Super AS\n1 x Car Insurance Super = 2000 \nSubtotal: 2000 \nMVA: 500 \nTotal: 2500"
  );
});

test("Can generate JSON receipt for Moto Super", () => {
  const order = new Order("Moto Super AS");
  const motorSuper = new Product("Car Insurance", "Super", Prices.TwoThousand);
  order.addOrderLine(motorSuper, 1);
  const JSONReceipt = new JSONReceiptGenerator(order);
  expect(JSONReceipt.generate()).toBe(
    '{"items":[{"quantity":1,"price":2000,"type":"Car Insurance","name":"Super","amount":2000,"subtotal":2000}],"totalTax":500,"companyName":"Moto Super AS"}'
  );
});

test("Can generate HTML receipt for Moto Super", () => {
  const order = new Order("Moto Super AS");
  const motorSuper = new Product("Car Insurance", "Super", Prices.TwoThousand);
  order.addOrderLine(motorSuper, 1);
  const HTMLReceipt = new HTMLReceiptGenerator(order);
  expect(HTMLReceipt.generate()).toBe(
    "<html>\n<body>\n<h1>Order receipt for Moto Super AS</h1>\n<ul>\n<li>1 x Car Insurance Super = 2000</li>\n</ul>\n<h3>Subtotal: 2000</h3>\n<h3>MVA: 500</h3>\n<h2>Total: 2500</h2>\n</body>\n</html>"
  );
});
