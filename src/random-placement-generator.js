// Randomly select starting X coordinate
export function selectStartX() {
  const x = Math.floor(Math.random() * 10);
  return x;
}

// Randomly select starting Y coordinate
export function selectStartY() {
  const y = Math.floor(Math.random() * 10);
  return y;
}

// Randomly select whether boat will be placed horizontally or vertically
export function selectDirection() {
  const randomNum = Math.floor(Math.random() * 2);
  const direction = randomNum === 0 ? "horizontal" : "vertical";
  return direction;
}
