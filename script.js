document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rating = document.getElementById("rating").value;
    let feedback = document.getElementById("comments").value;

    if (name === "" || course === "" || rating === "") {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Please fill all required fields!";
    } else {
        
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText =
            `Thank you, ${name}! Your feedback for ${course} has been submitted.`;

        console.log({
            name: name,
            course: course,
            rating: rating,
            feedback: feedback
        });

        
        document.getElementById("feedbackForm").reset();
    }
});