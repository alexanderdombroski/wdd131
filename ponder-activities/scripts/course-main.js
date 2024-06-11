// course-main.js
import { aCourse } from "./courses.js"

aCourse.init();

(function initListeners() {
    const sectionInput = document.getElementById("sectionNumber");
    document.getElementById("enrollStudent").addEventListener('click', (event) => aCourse.changeStudent(sectionInput.value, 1))
    document.getElementById("dropStudent").addEventListener('click', (event) => aCourse.changeStudent(sectionInput.value, -1))
})();