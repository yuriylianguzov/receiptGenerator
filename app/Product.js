module.exports = class Product {
  constructor(productType = "", productName = "", price) {
    this.productType = productType;
    this.productName = productName;
    this.price = price;
  }
};
