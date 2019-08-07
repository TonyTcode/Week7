fetch('http://localhost:3000/todolist')
    .then(response => response.json())
    .then(json => console.log(json))
    