const Prices = require("./Prices");
const Product = require("./Product");
const RECEIPT_TYPE_TEXT = "text";
const RECEIPT_TYPE_HTML = "html";
const RECEIPT_TYPE_JSON = "json";

module.exports = class ReceiptGenerator {
  constructor(entity) {
    this.entity = entity;
    this.data = {
      items: [],
      totalTax: null
    };
  }

  generate() {
    let totalAmount = 0;
    this.entity.lines.forEach(line => {
      let thisAmount = 0;
      switch (line.product.price) {
        case Prices.OneThousand:
          if (line.quantity >= 5)
            thisAmount += line.quantity * line.product.price * 0.9;
          else thisAmount += line.quantity * line.product.price;
          break;
        case Prices.TwoThousand:
          if (line.quantity >= 3)
            thisAmount += line.quantity * line.product.price * 0.8;
          else thisAmount += line.quantity * line.product.price;
          break;
      }
      totalAmount += thisAmount;
      let res = {
        companyName: this.entity.companyName,
        quantity: line.quantity,
        price: line.product.price,
        type: line.product.productType,
        name: line.product.productName,
        amount: thisAmount,
        subtotal: totalAmount
      };
      this.data.items.push(res);
    });
    this.data.totalTax = totalAmount * Prices.TaxRate;
    return this.data;
  }
};
