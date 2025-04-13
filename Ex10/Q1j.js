const records = [
    [1, "Alen", 39],
    [2, "Deena", 47],
    [3, "Diana", 21],
    [4, "Jack", 54],
    [5, "Jain", 23],
    [6, "Kelvin", 61],
    [7, "Louis", 69],
    [8, "Rex", 49]
];

function sortDescending() {
    let sortedData = [...records].sort((a, b) => b[2] - a[2]);
    let tableContainer = document.getElementById("contentArea");
    tableContainer.innerHTML = "";

    let table = document.createElement("table");
    table.border = 1;

    let header = table.createTHead();
    let headerRow = header.insertRow();
    let headers = ["PID", "Name", "Age"];
    headers.forEach(title => {
        let th = document.createElement("th");
        th.textContent = title;
        headerRow.appendChild(th);
    });

    let tbody = table.createTBody();
    sortedData.forEach((row) => {
        let tr = tbody.insertRow();
        row.forEach((cell) => {
            let td = tr.insertCell();
            td.textContent = cell;
        });
    });

    tableContainer.appendChild(table);
}

function searchRecord() {
    let container = document.getElementById("contentArea");
    container.innerHTML = `
        <div>
            <form id="searchForm">
                <fieldset>
                    <label for="pid">Enter PID to search:</label>
                    <input type="number" id="pid" min="0">
                    <button type="submit">Search</button>
                    <div id="searchResult"></div>
                </fieldset>
            </form>
        </div>`;

    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let enteredPID = parseInt(document.getElementById("pid").value);
        let record = records.find(entry => entry[0] === enteredPID);
        let resultDiv = document.getElementById("searchResult");

        if (record) {
            resultDiv.innerHTML = `<p>Record Found!<br>Name: ${record[1]}<br>Age: ${record[2]}</p>`;
        } else {
            resultDiv.innerHTML = `<p>No record found</p>`;
        }
    });
}

function filterRange() {
    let container = document.getElementById("contentArea");
    container.innerHTML = `
        <div>
            <form id="rangeForm">
                <fieldset>
                    <label for="start">Enter age range:</label>
                    <input type="number" id="start" min="0" max="100"> -
                    <input type="number" id="end" min="0" max="100">
                    <button type="submit">Submit</button>
                    <div id="rangeResult"></div>
                </fieldset>
            </form>
        </div>`;

    document.getElementById("rangeForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let minAge = parseInt(document.getElementById("start").value);
        let maxAge = parseInt(document.getElementById("end").value);
        let resultDiv = document.getElementById("rangeResult");
        resultDiv.innerHTML = "";

        let filteredRecords = records.filter(entry => entry[2] >= minAge && entry[2] <= maxAge);
        if (filteredRecords.length > 0) {
            filteredRecords.forEach(record => {
                resultDiv.innerHTML += `<p>Record Found!<br>PID: ${record[0]}<br>Name: ${record[1]}<br>Age: ${record[2]}</p>`;
            });
        } else {
            resultDiv.innerHTML = `<p>No records found</p>`;
        }
    });
}
