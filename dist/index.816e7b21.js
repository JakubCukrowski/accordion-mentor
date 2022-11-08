const questionBtns = document.querySelectorAll("button i");
const answers = document.querySelectorAll("[data-id]");
const handleClick = (e)=>{
    const questionContainer = e.target.parentElement.parentElement;
    for (const answer of answers){
        if (e.target.parentElement.id === answer.dataset.id) {
            answer.classList.remove("hidden");
            // questionContainer.style.borderBottom = "none"
            questionContainer.firstElementChild.style.fontWeight = "700";
            e.target.style.rotate = "180deg";
        } else if (answer.classList.contains("hidden")) {
            for (const btn of questionBtns)if (btn !== e.target) btn.style.rotate = "0deg";
        } else {
            answer.classList.add("hidden");
            answer.parentElement.firstElementChild.firstElementChild.style.fontWeight = "400";
        }
    }
};
for (const btn of questionBtns)btn.addEventListener("click", handleClick);

//# sourceMappingURL=index.816e7b21.js.map
