const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const priceCells = document.querySelectorAll(".price");
  
  // Calculate the total price
  let total = 0;
  priceCells.forEach(cell => {
    total += Number(cell.textContent);
  });

  // Create a new row and cell for the total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Span the total cell across both columns
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append the total cell and row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);


