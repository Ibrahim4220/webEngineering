function log(msg) {
    document.getElementById("output").textContent += msg + "\n";
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}

// Task 1
function task1() {
    clearOutput();

    var a = 10;
    let b = 20;
    const c = 30;

    a = 15;
    b = 25;

    log("var: " + a + " let: " + b + " const: " + c);
}

// Task 2
function task2() {
    clearOutput();

    const square = (num) => num * num;
    log("Square of 5: " + square(5));
}

// Task 3
function task3() {
    clearOutput();

    class Student {
        constructor(name, marks) {
            this.name = name;
            this.marks = marks;
        }

        display() {
            log("Name: " + this.name + " Marks: " + this.marks);
        }
    }

    const s1 = new Student("Ibrahim", 85);
    s1.display();
}

// Task 4
function task4() {
    clearOutput();

    const studentObj = {
        name: "Ibrahim",
        age: 20,
        course: "BSCS"
    };

    const jsonData = JSON.stringify(studentObj);
    log("JSON: " + jsonData);

    const parsedData = JSON.parse(jsonData);
    log("Object: " + JSON.stringify(parsedData));
}

// Task 5
function task5() {
    clearOutput();

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            log("First 5 Post Titles:");
            for (let i = 0; i < 5; i++) {
                log(data[i].title);
            }
        })
        .catch(err => log("Error: " + err));

    fetch("https://jsonplaceholder.typicode.com/wrongURL")
        .then(res => res.json())
        .then(data => log(data))
        .catch(err => log("Failed Request: " + err));
}