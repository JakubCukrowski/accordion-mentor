const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll("[data-id]");
const handleClick = (e)=>{
    for (const answer of answers)if (e.currentTarget.parentElement.id === answer.dataset.id) {
        answer.classList.toggle("hidden");
        e.currentTarget.lastElementChild.style.rotate = "180deg";
        e.currentTarget.firstElementChild.style.fontWeight = "700";
        if (answer.classList.contains("hidden")) {
            e.currentTarget.lastElementChild.style.rotate = "0deg";
            e.currentTarget.firstElementChild.style.fontWeight = "400";
        }
    } else {
        answer.classList.add("hidden");
        questions.forEach((question)=>{
            if (e.currentTarget !== question) {
                question.lastElementChild.style.rotate = "0deg";
                question.firstElementChild.style.fontWeight = "400";
            }
        });
    }
};
for (const question of questions)question.addEventListener("click", handleClick);

//# sourceMappingURL=index.816e7b21.js.map
