const ReceiptGenerator = require("./ReceiptGenerator");
module.exports = class TextReceiptGenerator extends ReceiptGenerator {
  generate() {
    let data = this.generateData();
    let result = `Order receipt for ${data.companyName}`;
    data.items.forEach(item => {
      result = result.concat(
        "",
        `\n${item.quantity} x ${item.type} ${item.name} = ${
          item.amount
        } \nSubtotal: ${item.subtotal} \nMVA: ${
          data.totalTax
        } \nTotal: ${item.subtotal + data.totalTax}`
      );
    });
    // console.log("\nTEXT RECEIPT", "\n" + result);
    return result;
  }
};
