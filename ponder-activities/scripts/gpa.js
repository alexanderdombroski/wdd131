(function initGPATable() {
    const GPA = [
        ["A", "4.0"],
        ["A-", "3.7"],
        ["B+", "3.4"],
        ["B", "3.0"],
        ["B-", "2.7"],
        ["C+", "2.4"],
        ["C", "2.0"],
        ["C-", "1.7"],
        ["D+", "1.4"],
        ["D", "1.0"],
        ["D-", "0.7"],
        ["F", "0.0"],
        ["UW", "0.0"]
    ];
    const tableBody = document.querySelector("#gpa-table > tbody");
    GPA.forEach(([grade, gpaWeight]) => {
        tableBody.innerHTML += `<tr>
            <td><label for="${grade}">${grade}</label></td>
            <td><input gpa="${gpaWeight}" type="number" id="${grade}" onchange="calcGPA()"></td>
            <td>${gpaWeight}</td>
            </tr>`;
    });
})();

function calcGPA() {
    let gpaTotal = 0;
    let totalCredits = 0;
    document.querySelectorAll("input").forEach(input => {
        if (input.value !== "") {
            gpaTotal += parseFloat(input.value) * parseFloat(input.getAttribute("gpa"));
            totalCredits += parseInt(input.value);
        }
    }); 
    document.getElementById("output").innerText = `Total Credits: ${totalCredits} GPA: ${(gpaTotal / totalCredits).toFixed(2)}`;
}