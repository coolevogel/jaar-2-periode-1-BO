fetch("/agenda.json").then(
    function (response) {
        return response.json();
    }
)


const checkboxes = document.getElementsByClassName('popup__checkbox')[0];

console.log(checkboxes.checked)