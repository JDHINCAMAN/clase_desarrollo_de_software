//DOMContentLoaded para que no ejecute js hasta que el html este cargado
document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');

    /* Ejemplo desde la terminal
    btn.onclick = function() {
        console.log('Title:', title.value);
        console.log('Description:', description.value);
    }*/

    function addTodo() {
        if (title.value === '' || description.value === '') {
            //console.error('Title and description are required');
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        } /*else {
            console.log('OK');
        }*/

        alert.classList.add('d-none');
        const row = table.insertRow();
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger mb-1 ml-1">
                  <i class="fa fa-trash"></i>
                </button>
            </td>
        `;
    }

    btn.onclick = addTodo;
})

/* Ejemplo
btn.addEventListener('click', function () {
    console.log('Click');
})*/