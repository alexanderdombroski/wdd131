// courses.js
export const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    changeStudent: function (sectionNum, amount) {
        const i = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (i >= 0) {
            this.sections[i].enrolled += amount;
            updateCourses();
        }
    },
    init: function () {
        updateCourses();
        updateTitles();
    }
};

function updateTitles() {
    document.getElementById("courseName").innerText = aCourse.name
    document.getElementById("courseCode").innerText = aCourse.code
}

function updateCourses() {
    const table =  document.getElementById("sections");
    table.innerHTML = ""
    aCourse.sections.forEach(section => {
        table.innerHTML += `
        <tr>
            <td>${section.sectionNum}</td>        
            <td>${section.roomNum}</td>        
            <td>${section.enrolled}</td>        
            <td>${section.days}</td>        
            <td>${section.instructor}</td>        
        </tr>`
    });
}