// Named function using arrow syntax to compute the average of prelim, midterm, and final
export const computeAverage = (prelim, midterm, final) => {
  return (prelim + midterm + final) / 3;
};

// Default function using arrow syntax to check if the average meets the passing standard (>= 75)
const isPassing = (average) => {
  return average >= 75 ? "PASSING" : "PROBATION";
};

export default isPassing;