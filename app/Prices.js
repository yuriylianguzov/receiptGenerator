const OneThousand = 1000,
  TwoThousand = 2000,
  TaxRate = 0.25;

module.exports = class Prices {
  static get OneThousand() {
    return OneThousand;
  }
  static get TwoThousand() {
    return TwoThousand;
  }

  static get TaxRate() {
    return TaxRate;
  }
};
