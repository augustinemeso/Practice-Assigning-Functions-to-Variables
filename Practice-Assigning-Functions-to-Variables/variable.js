// Function to check task status
const checkTaskStatus = (taskName, isCompleted) => {
    if (isCompleted) {
        console.log(`Task ${taskName} is completed.`);
    } else {
        console.log(`Task ${taskName} is not completed yet.`);
    }
};

// Assign the function to a variable
const taskLogger = checkTaskStatus;

// Example usage
taskLogger("Finish homework", true);  // Output: Task Finish homework is completed.
taskLogger("Wash the dishes", false); // Output: Task Wash the dishes is not completed yet.
taskLogger("Read a book", true);      // Output: Task Read a book is completed.
