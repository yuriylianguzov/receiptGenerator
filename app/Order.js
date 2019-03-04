const OrderLine = require("./OrderLine");
module.exports = class Order {
  constructor(companyName = "") {
    this.companyName = companyName;
    this.lines = [];
  }

  addOrderLine(orderLine, quantity) {
    this.lines.push(new OrderLine(orderLine, quantity));
  }
};
