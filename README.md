# IT313 Laboratory 2 - Modern JavaScript (ES6+) Essentials in Action

## Problem Description
This project simulates a registrar utility that processes raw student enrollee records, calculates their term averages, evaluates their eligibility status, and outputs a formatted report[cite: 11].

## Approach & ES6+ Features Used
- **Let/Const:** Used for block-scoped variable declarations.
- **Arrow Functions:** Used for concise function syntax in utilities and array methods.
- **Template Literals:** Used for clean string interpolation in console outputs.
- **Destructuring:** Used to cleanly extract properties (`name`, `prelim`, `midterm`, `final`) from objects.
- **Array Methods (`map`, `filter`, `reduce`):** Used to transform data, filter passing students, and compute totals[cite: 11, 12].
- **ES Modules:** Used `import` and `export` to modularize `gradeUtils.js`[cite: 11].
- **Promises & Async/Await:** Used to simulate an asynchronous API call wrapped in `try/catch` for error handling[cite: 11, 12].

## How to Run
1. Ensure Node.js is installed.
2. Run `npm install` if necessary.
3. Execute the main script using Node:
   ```bash
   node index.js