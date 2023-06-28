const Ship = (length) => {
  let hits = 0;
  const getLength = () => length;
  const hit = () => {
    hits += 1;
    return hits;
  };
  const isSunk = () => hits === length;

  return { getLength, hit, isSunk };
};

module.exports = Ship;
