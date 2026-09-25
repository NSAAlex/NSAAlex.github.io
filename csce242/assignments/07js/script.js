// Colors to randomly pick from when generating cars
const CAR_COLORS = [
  "#3fbfa6", // teal
  "#8fd14f", // lime green
  "#6c6fb5", // slate purple
  "#e8896f", // coral
  "#2b1a4d", // deep indigo
  "#bfe9fb", // pale blue
  "#c07fd1", // orchid
];

/**
 * Creates and places a single car on the road.*/
const createCar = (roadEl, color, topPercent, leftPercent) => {
  const car = document.createElement("div");
  car.className = "car";
  car.style.backgroundColor = color;
  car.style.top = `${topPercent}%`;
  car.style.left = `${leftPercent}%`;
  roadEl.appendChild(car);
  return car;
};

/*Fills the road with a given number of randomly-positioned,randomly-colored cars.*/
const loadCars = (roadEl, count) => {
  for (let i = 0; i < count; i++) {
    const color = CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)];
    // Keep cars roughly within the two lanes vertically (10%-75% of road height)(used chat to help determin this)
    const top = 10 + Math.random() * 65;
    // Keep cars within the horizontal bounds of the road, leaving room for car width
    const left = Math.random() * 88;
    createCar(roadEl, color, top, left);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const road = document.getElementById("road");
  loadCars(road, 8);
});