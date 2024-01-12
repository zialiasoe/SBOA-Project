let table = document.getElementById('gradesTable');
let defaultResetTable = table.innerHTML;
let addAverageRow = document.querySelector('.table-average');
let addRow = document.querySelector('.table-add');
let deleteRow = document.querySelector('.table-delete');
let rowCount = 1;

// Add new row
addRow.addEventListener('click', function() {
    rowCount++;

    let defaultTemplate = `
    <tr>
      <td>${rowCount}</td>
      <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageA[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageB[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageC[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageD[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageE[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageF[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageG[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageH[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageI[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageJ[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageK[]" onchange="calculateAverage()"/>
            </td>
            <td>
              <input type="number" placeholder="--" oninput="limitInput(this)" name="AverageL[]" onchange="calculateAverage()"/>
            </td>
    </tr>`;

    // Create new row
    let newRow = document.createElement('tr');
    newRow.innerHTML = defaultTemplate.trim();
    let tbody = document.getElementById('gradesTbody1');
    tbody.appendChild(newRow);
});

// Delete last row
deleteRow.addEventListener('click', function() {
  var table = document.getElementById("gradesTbody1");
  if (table.rows.length > 1) {
      table.deleteRow(-1);
      rowCount--;
  }
});

// Reset
let resetTable = document.querySelector('.table-reset');
resetTable.addEventListener('click', function() {
    table.innerHTML = defaultResetTable;
    rowCount = 1;
});
