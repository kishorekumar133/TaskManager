
var arobj = [
    { 'task': 'Internship', 'description': 'IBM', 'timer': '00:00:05'},

];
var table = document.getElementById("tb1");
function ts() {
    var table = document.getElementById("tb1");
    table.innerHTML = "";
    var rws = `<tr>
                <th>Task</th>
                <th>Description</th>
                <th>Duration</th>
            </tr>`
    table.innerHTML += rws;
    arobj.map((data) => {
        var row = `<tr>
    <td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.timer}</td>
    </tr>`
        table.innerHTML += row;
    })
}
ts();



seconds = 0;
minutes = 0;
hours = 0;
isRunning = false;
let formatedTime = ""

function timer() {
    if (!isRunning) {
        isRunning = true;
        time = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            } if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
            formatedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            document.getElementById("sw").innerText = formatedTime;
            document.getElementById("btn").innerText = "Stop";
            
        }, 1000)
    }
    else {
        document.getElementById("btn").innerText = "Start";
       // btn.style.backgroundColor = "green";
        clearInterval(time);
        isRunning = false;
    }
}

function reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    formatedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    document.getElementById("sw").innerText = formatedTime;
}


function add(n) {
    // var table = document.getElementById("tb1");
    console.log(formatedTime);
    if (n == 0) {
        var a = document.getElementById("task").value;
        var b = document.getElementById("description").value;
        var c = document.getElementById("sw").textContent;
        // table.remove();

        const obj = { task: a, description: b, timer: c }
        if (a != "" && b != "") {
            arobj.push(obj);
            document.getElementById("description").value = "";
            document.getElementById("task").value = "";
            table.innerHTML = "";
            var rw = `<tr>
            <th>Task</th>
            <th>Description</th>
            <th>Duration</th>
        </tr>`
            table.innerHTML += rw;

            arobj.map((data) => {
                var row = `<tr>
        <td>${data.task}</td>
        <td>${data.description}</td>
        <td>${data.timer}</td>
    </tr>`
                table.innerHTML += row;
            })

        }
    } else {

        var a = document.getElementById("filter").value;
        if (a == "") {
            ts();
        } else {
            table.innerHTML = "";

            var rw = `<tr>
        <th>Task</th>
        <th>Description</th>
        <th>Duration</th>
    </tr>`
            table.innerHTML += rw;
            const arr = arobj.filter((data) => data.task == a);
            arr.map((data) => {
                var row = `<tr>
    <td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.timer}</td>
</tr>`
                table.innerHTML += row
            })
        }
    }

}


function filter() {
    var a = document.getElementById("filter").value;
    var table = document.getElementById("tb2");
    // alert(a);
    // table.innerHTML += row;
    const arr = arobj.filter((data) => data.task == a);
    var table = document.getElementById("tb1");
    var row = `<tr><th>Task</th><th>Description</th><th>Timer</th></tr>`;
    table.innerHTML += row;
    arr.map((data) => {
        var row = `<tr>
    <td>${data.task}</td>
    <td>${data.description}</td>
    <td>${data.duration}</td>
</tr>`
        table.innerHTML += row
    })

}


