exports.add = (a, b) => {
  return a + b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  if (b === 0) {
    throw new Error("Impartirea la zero nu este permisa...!");
  }

  return a / b;
};

exports.stringReverse = (sir) => {
  return sir.split("").reverse().join("");
};

exports.getLength = (sir) => {
  return sir.length;
};

exports.getLengthEqualsFive = (sir) => {
  if (sir.length === 5) {
    return true;
  }
  return false;
};

exports.promiseResolve = () => {
  return Promise.resolve("Resolved !");
};
