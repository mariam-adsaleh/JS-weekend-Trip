// Define the Course class
class Course {
    constructor(name, code, instructor, duration) {
        this.name = name;
        this.code = code;
        this.instructor = instructor;
        this.duration = duration;
    }
}

// Get the form element
const form = document.querySelector('form');

// Handle form submit event
form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Get the form input values
    const name = form.elements['name'].value;
    const code = form.elements['code'].value;
    const instructor = form.elements['instructor'].value;
    const duration = form.elements['duration'].value;

    // Create a new Course object using the input values
    const course = new Course(name, code, instructor, duration);

    // Log the course object to the console
    console.log(course);
});
