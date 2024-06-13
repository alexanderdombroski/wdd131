import { summaryTemplate, participantTemplate } from "./templates.js";

let count = 1;

(function initListeners() {
    document.getElementById("add").addEventListener("click", (_) => addParticipant(++count));
    document.getElementById("remove").addEventListener("click", (event) => removeParticipant(event, --count));
    document.querySelector("form").addEventListener("submit", (event) => submitForm(event, count));
})();

function submitForm(event, count) {
    event.preventDefault();
    event.target.hidden = true;
    const summary = document.getElementById("summary");
    summary.hidden = false;
    summary.innerText = summaryTemplate( // Get Name, Participant Count, and Total Fee
        document.getElementById("adult_name").value,
        count,
        Array.from(document.querySelectorAll("[id^='fee']")).reduce((acc, fee) => acc + Number(fee.value), 0)
    );
}

function addParticipant(count) {
    const participants = document.querySelector(".participants");
    participants.querySelector(`.participant${count - 1}`)
        .insertAdjacentHTML("afterend", participantTemplate(count));
    participants.querySelector("#remove").hidden = false;
    participants.classList.add("grid");
}

function removeParticipant(event, count) {
    const participants = document.querySelector(".participants");
    if (count == 1) {
        event.currentTarget.hidden = true;
        participants.classList.remove("grid");
    }
    participants.querySelector(`.participant${count + 1}`).remove();
}
