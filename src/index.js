if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitButton = document.getElementById("submit-data");
  const clearButton = document.getElementById("empty-table");

  submitButton.addEventListener("click", function () {
    var username = document.getElementById("input-username").value;
    var email = document.getElementById("input-email").value;
    var address = document.getElementById("input-address").value;
    var admin = document.getElementById("input-admin").value;
    let tableRef = document.getElementById("table");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);
    let newText = document.createTextNode(username);
    let newText1 = document.createTextNode(email);
    let newText2 = document.createTextNode(address);
    let newText3 = document.createTextNode(admin);
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
  });

  clearButton.addEventListener("click", function () {
    document.getElementById("table").innerHTML = "";
  });
}
