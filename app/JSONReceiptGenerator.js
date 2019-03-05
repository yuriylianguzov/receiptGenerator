const ReceiptGenerator = require("./ReceiptGenerator");
module.exports = class JSONReceiptGenerator extends ReceiptGenerator {
  generate() {
    let result = JSON.stringify(this.generateData());
    // console.log("\nJSON RECEIPT", "\n" + result);
    return result;
  }
};
