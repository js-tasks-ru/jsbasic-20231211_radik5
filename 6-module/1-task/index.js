export default class UserTable {
  constructor(rows) {
    let table = document.createElement("table");
    for (let item of rows) {
      let row = table.insertRow();
      let cellName = row.insertCell();
      let cellAge = row.insertCell();
      let cellSalary = row.insertCell();
      let cellCity = row.insertCell();
      let cellCross = row.insertCell();
      cellName.innerHTML = item["name"];
      cellAge.innerHTML = item["age"];
      cellSalary.innerHTML = item["salary"];
      cellCity.innerHTML = item["city"];
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "[x]";
      cellCross.append(deleteBtn);
    }
    table.addEventListener("click", function (event) {
      if (event.target.closest("button").innerText === "[x]") {
        event.target.closest("tr").remove();
      }
    });
    this.elem = table;
  }
  elem;
}
