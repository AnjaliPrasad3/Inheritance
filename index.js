// Define a base object
const person = {
    name: 'Unknown',
    age: 0,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// Function to handle form submission
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const school = document.getElementById('school').value;

    // Create a new object that inherits from the base object
    const student = Object.create(person);
    student.name = name;
    student.age = age;
    student.school = school;
    student.study = function() {
        return `${this.name} is studying at ${this.school}.`;
    };

    // Create another object that inherits from the student object
    const graduate = Object.create(student);
    graduate.name = name;
    graduate.age = age + 5; // Assuming graduation after 5 years
    graduate.graduate = function() {
        return `${this.name} has graduated from ${this.school}.`;
    };

    // Display the results on the web page
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>Person (Base Object):</h2>
        <p>${person.greet()}</p>

        <h2>Student:</h2>
        <p>${student.greet()}</p>
        <p>${student.study()}</p>

        <h2>Graduate:</h2>
        <p>${graduate.greet()}</p>
        <p>${graduate.study()}</p>
        <p>${graduate.graduate()}</p>
    `;
});
