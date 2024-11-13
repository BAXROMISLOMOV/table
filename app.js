const tableBody = document.querySelector('#dataTable tbody');
const form = document.getElementById('itemForm');
const inputField = document.getElementById('listItem');

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

document.querySelectorAll('.delBtn').forEach(button => {
    button.addEventListener('click', () => {
        deleteRow(button);
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = inputField.value.trim();
    if (name === '') {
        alert("Please enter a name");
        return;
    }

    const newRow = document.createElement('tr');
    const newId = tableBody.rows.length + 1; 
    const age = Math.floor(Math.random() * 50) + 20;

    newRow.innerHTML = `
        <td>${newId}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>
            <button class="delBtn">del</button>
            <button class="editBtn">edit</button>
        </td>
    `;

    newRow.querySelector('.delBtn').addEventListener('click', (event) => {
        deleteRow(event.target);
    });

    tableBody.appendChild(newRow);

    inputField.value = '';
});