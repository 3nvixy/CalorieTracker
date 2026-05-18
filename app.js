let foods = JSON.parse(localStorage.getItem("foods")) || [];
let dailyGoal = localStorage.getItem("dailyGoal") || null;

function updateDisplay() {
    const list = document.getElementById("foodList");
    const total = document.getElementById("totalCalories");

    list.innerHTML = "";
    let totalCalories = 0;

    foods.forEach((item, index) => {
        totalCalories += item.calories;

        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.calories} cal`;
        list.appendChild(li);
    });

    total.textContent = totalCalories;

    if (dailyGoal) {
        document.getElementById("goalDisplay").textContent =
            `Goal: ${dailyGoal} calories`;
    }
}

function addFood() {
    const name = document.getElementById("foodName").value;
    const calories = parseInt(document.getElementById("foodCalories").value);

    if (!name || !calories) return alert("Enter food and calories");

    foods.push({ name, calories });
    localStorage.setItem("foods", JSON.stringify(foods));

    document.getElementById("foodName").value = "";
    document.getElementById("foodCalories").value = "";

    updateDisplay();
}

function setGoal() {
    const goal = document.getElementById("goalInput").value;
    if (!goal) return alert("Enter a goal");

    dailyGoal = goal;
    localStorage.setItem("dailyGoal", goal);

    updateDisplay();
}

updateDisplay();
