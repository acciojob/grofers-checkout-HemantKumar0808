// Select all prices
const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total dynamically
prices.forEach((price) => {
  total += parseInt(price.textContent);
});

// Create new row
const newRow = document.createElement("tr");

// Create new cell
const newCell = document.createElement("td");

// Set id (required for test case)
newCell.setAttribute("id", "ans");

// Span across 2 columns
newCell.setAttribute("colspan", "2");

// Add total value
newCell.textContent = total;

// Append cell to row
newRow.appendChild(newCell);

// Append row to table
document.querySelector("table").appendChild(newRow);