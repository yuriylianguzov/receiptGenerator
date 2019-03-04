const ReceiptGenerator = require("./ReceiptGenerator");
module.exports = class TextReceiptGenerator extends ReceiptGenerator {
  generateTextReceipt() {
    let data = this.generate();
    let result = "";
    data.items.forEach(item => {
      result = result.concat(
        "",
        `Order receipt for ${item.companyName} \n${item.quantity} x ${
          item.type
        } ${item.name} = ${item.amount} \nSubtotal: ${item.subtotal} \nMVA: ${
          data.totalTax
        } \nTotal: ${item.subtotal + data.totalTax}`
      );
    });
    console.log("TEXT RECEIPT", "\n" + result);
    return result;
  }
};
