// Select all price elements
const prices = document.querySelectorAll(".price");

let total = 0;

// Loop through each price and add to total
prices.forEach(function(price) {
    total += parseInt(price.textContent);
});

// Create new row
const newRow = document.createElement("tr");

// Create new cell
const newCell = document.createElement("td");

// Make it span across 2 columns
newCell.setAttribute("colspan", "2");

// Add total text
newCell.textContent = "Total Price: " + total;

// Append cell to row
newRow.appendChild(newCell);

// Append row to table
document.querySelector("table").appendChild(newRow);


