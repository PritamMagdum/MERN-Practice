const employees = [
  { name: "Pritam", position: "Developer", salary: 50000 },
  { name: "Surendar", position: "Designer", salary: 45000 },
  { name: "Akash", position: "Manager", salary: 60000 },
  { name: "Vignesh", position: "Tester", salary: 40000 },
  { name: "Prakash", position: "HR", salary: 35000 },
];

function renderEmployeeList() {
  const tableBody = document.querySelector("#employeeTable tbody");
  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>$${employee.salary.toLocaleString()}</td>
      `;
    tableBody.appendChild(row);
  });
}

function calculateTotalSalary() {
  const totalSalary = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  document.getElementById(
    "totalSalaryDisplay"
  ).innerText = `Total Salary: $${totalSalary.toLocaleString()}`;
}

document
  .getElementById("calSalary")
  .addEventListener("click", calculateTotalSalary);

renderEmployeeList();
