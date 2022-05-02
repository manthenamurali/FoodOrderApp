class Utils {
  static validateQuantity(quantity) {
    if (quantity === "" || parseInt(quantity) === 0) {
      return false;
    }

    return true;
  }
}

export default Utils;
