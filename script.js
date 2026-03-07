const form = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");
const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const courseEl = document.getElementById("course");
const emailEl = document.getElementById("email");

function getGender() {
    const checked = document.querySelector('input[name="gender"]:checked');
    return checked ? checked.value : "";
}
function clearForm() {
    form.reset();
    nameEl.focus();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameEl.value.trim();
    const age = ageEl.value.trim();
    const gender = getGender();
    const course = courseEl.value;
    const email = emailEl.value.trim();

    if (!name || !age || !gender || !course || !email) return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${escapeHtml(name)}</td>
        <td>${escapeHtml(age)}</td>
        <td>${escapeHtml(course)}</td>
        <td>${escapeHtml(gender)}</td>
        <td>${escapeHtml(email)}</td>
        <td><button class="btn-delete" type="button">Delete</button></td>
`;

    tr.querySelector(".btn-delete").addEventListener("click", () => {
        tr.remove();
    });

    tableBody.appendChild(tr);
    clearForm();
});
function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}