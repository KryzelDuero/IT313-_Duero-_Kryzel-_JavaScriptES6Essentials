// Import named and default exports from gradeUtils.js
import isPassing, { computeAverage } from './gradeUtils.js';

// Starter data provided in the lab instructions
const enrollees = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

// Requirement 2: Function returning a Promise that resolves with enrollees after a short delay
const getEnrollees = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Set to true normally. For testing error handling, you can temporarily set this to false.
      const success = true; 
      if (success) {
        resolve(enrollees);
      } else {
        reject(new Error("Failed to connect to the registrar API."));
      }
    }, 1000);
  });
};

// Requirement 3: Async function with try/catch block
const generateReport = async () => {
  try {
    const data = await getEnrollees();

    console.log("=== IT313 Enrollment Eligibility Report ===");

    // Requirement 4 & 5: Use destructuring and .map() to build a processed array
    const processedEnrollees = data.map((enrollee) => {
      const { name, prelim, midterm, final } = enrollee; // Destructuring
      const average = computeAverage(prelim, midterm, final);
      const status = isPassing(average);
      return { name, average, status };
    });

    // Print each enrollee report line using template literals (Requirement 8)
    processedEnrollees.forEach(({ name, average, status }) => {
      console.log(`${name}\t\tAverage: ${average.toFixed(2)} ${status}`);
    });

    // Requirement 6: Use .filter() to separate passing enrollees
    const passingEnrollees = processedEnrollees.filter(e => e.status === "PASSING");

    // Requirement 7: Use .reduce() to compute the class average across all enrollees
    const totalSum = processedEnrollees.reduce((acc, curr) => acc + curr.average, 0);
    const classAverage = totalSum / processedEnrollees.length;

    console.log("------------------------------------------");
    // Requirement 8: Print summary statistics using template literals
    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    console.log(`Passing: ${passingEnrollees.length}/${processedEnrollees.length}`);

  } catch (error) {
    console.error("Error generating report:", error.message);
  }
};

generateReport();