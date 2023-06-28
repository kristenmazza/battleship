const Ship = (length, name) => {
  const shipName = name;
  let hits = 0;
  const getLength = () => length;
  const hit = () => {
    hits += 1;
    return hits;
  };
  const isSunk = () => hits === length;

  return { shipName, getLength, hit, isSunk };
};

module.exports = Ship;
