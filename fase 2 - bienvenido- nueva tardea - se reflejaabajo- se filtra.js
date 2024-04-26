function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "123" && password === "123") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("welcomePage").style.display = "block";
    } else {
        document.getElementById("loginError").style.display = "block";
    }
}

function showTaskForm() {
    document.getElementById("taskForm").style.display = "block";
}

function addTask() {
    var taskCode = document.getElementById("taskCode").value;
    var taskTitle = document.getElementById("taskTitle").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var taskStartDate = document.getElementById("taskStartDate").value;
    var clientName = document.getElementById("clientName").value;
    var projectId = document.getElementById("projectId").value;
    var comments = document.getElementById("comments").value;
    var taskStatus = document.getElementById("taskStatus").value;

    var taskTable = document.getElementById("taskTableBody");

    var newRow = taskTable.insertRow();
    newRow.innerHTML = `
        <td>${taskCode}</td>
        <td>${taskTitle}</td>
        <td>${taskDescription}</td>
        <td>${taskStartDate}</td>
        <td>${clientName}</td>
        <td>${projectId}</td>
        <td>${comments}</td>
        <td>${taskStatus}</td>
        <td><button onclick="updateTask(this)">Actualizar</button></td>
    `;

    clearFields();
}

function clearFields() {
    var inputs = document.querySelectorAll("#taskForm input, #taskForm textarea");
    inputs.forEach(function(input) {
        input.value = "";
    });
    document.getElementById("taskStatus").value = "Por hacer";
}

function updateTask(button) {
    var row = button.parentNode.parentNode;
    var taskCode = row.cells[0].innerText;
    var taskTitle = row.cells[1].innerText;
    var taskDescription = row.cells[2].innerText;
    var taskStartDate = row.cells[3].innerText;
    var clientName = row.cells[4].innerText;
    var projectId = row.cells[5].innerText;
    var comments = row.cells[6].innerText;
    var taskStatus = row.cells[7].innerText;

    /////Logica de datos
    function queryData() {
        
        var data = fetchData(); 
        
       
        if (data && data.length > 0) {
           
            window.location.href = "pagina3.html"; 
        } else {
            alert("No se encontraron datos para redirigir."); 
        }
    }
    
    function fetchData() {
        
        return [
            { id: 1, name: "Dato 1" },
            { id: 2, name: "Dato 2" },
            { id: 3, name: "Dato 3" }
        ];
    }
    
}

function queryData() {
   
}

function filterTasks() {
    var selectedStatus = document.getElementById("statusFilter").value;
    var rows = document.getElementById("taskTable").getElementsByTagName("tbody")[0].rows;

    for (var i = 0; i < rows.length; i++) {
        var status = rows[i].cells[7].innerText;
        if (selectedStatus === "Todos" || selectedStatus === status) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
