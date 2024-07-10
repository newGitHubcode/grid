document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const usrInput = document.getElementById("usrInput");
    const submitBtn = document.getElementById("submitBtn");
    const reloadBtn = document.getElementById("reloadBtn");

    let sum = 0;
    function generateGrid() {
        grid.innerHTML = "";
        sum = 0;
        for (let i = 0; i < 100; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            square.textContent = randomNumber;
            grid.appendChild(square);
            sum += randomNumber;
        }
    }

    generateGrid();

    submitBtn.addEventListener("click", function() {
        const usrGuess = parseInt(usrInput.value);
        if (usrGuess === sum) {
            alert("Correct!");
        } else {
            alert("Wrong");
        }
    });

    reloadBtn.addEventListener("click", function() {
        generateGrid();
        usrInput.value = "";
    });

    console.log(sum);
});
