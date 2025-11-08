const questions = document.querySelectorAll(".question-box");

questions.forEach((box) => {
    box.addEventListener("click", () => {
        const answer = box.nextElementSibling; // get corresponding answer div
        const icon = box.querySelector("img");

        // close all others before opening the current one
        questions.forEach((item) => {
            if (item !== box) {
                item.nextElementSibling.style.display = "none";
                item.querySelector("img").src = "assets/images/icon-plus.svg";
            }
        });

        // toggle current answer visibility
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.src = "assets/images/icon-plus.svg";
        } else {
            answer.style.display = "block";
            icon.src = "assets/images/icon-minus.svg";
        }
    });
});
