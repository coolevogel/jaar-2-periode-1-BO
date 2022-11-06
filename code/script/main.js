fetch("/agenda.json").then(
    function (response) {
        return response.json();
    }
)