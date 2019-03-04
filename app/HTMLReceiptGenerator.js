const ReceiptGenerator = require("./ReceiptGenerator");
module.exports = class HTMLReceiptGenerator extends ReceiptGenerator {
  generate() {
    let data = this.generateData();
    let result = `<html>\n<body>\n<h1>Order receipt for ${
      data.companyName
    }</h1>`;
    result = result.concat("", `\n<ul>`);
    data.items.forEach(item => {
      result = result.concat(
        "",
        `\n<li>${item.quantity} x ${item.type} ${item.name} = ${
          item.amount
        }</li>\n</ul> \n<h3>Subtotal: ${item.subtotal}</h3> \n<h3>MVA: ${
          data.totalTax
        }</h3> \n<h2>Total: ${item.subtotal +
          data.totalTax}</h2>\n</body>\n</html>`
      );
    });
    console.log("\nHTML RECEIPT", "\n" + result);
    return result;
  }
};
