function generateRandomList() {
    const categories = document.getElementsByName('category');
    let selectedCategories = [];

    categories.forEach((category) => {
        if (category.checked) {
            selectedCategories.push(category.value);
        }
    });

    const values = {
        Location: ["Monte-Carlo", "Sweden", "Mexico", "Croatia", "Portugal", "Sardegna", "Kenya", "Estonia", "Finland", "Greece", "Chile", "Japan", "Mediterraneo", "Pacifico", "Oceania", "Scandia", "Iberia"],
        Stage: Array.from({ length: 12 }, (_, i) => (i + 1).toString()),
        Weather: ["Dry", "Wet"],
        Car: ["WRC", "WRC2", "JWRC", "WRC '17-21", "WRC '97-11", "Rally2", "Rally4", "NR4/R4", "S2000", "S1600", "F2 Kit", "Group A", "Group B 4WD", "Group B RWD", "H3 RWD", "H2 RWD", "H2 FWD", "H1 FWD"]
    };

    const randomValues = {
        Location: () => values.Location[Math.floor(Math.random() * values.Location.length)],
        Weather: () => values.Weather[Math.floor(Math.random() * values.Weather.length)],
        Car: () => values.Car[Math.floor(Math.random() * values.Car.length)],
    };

    let resultList = [];

    selectedCategories.forEach((category) => {
        if (category !== "Stage") {
            resultList.push(randomValues[category]());
        }
    });

    // Generate a Stage value
    if (selectedCategories.includes("Stage")) {
        const stageValue = "Stage " + (Math.floor(Math.random() * 12) + 1);
        resultList.push(stageValue);
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultList.join(', ');
}

// Show/hide value checkboxes when category checkboxes change
document.getElementsByName('category').forEach((categoryCheckbox) => {
    categoryCheckbox.addEventListener('change', function () {
        const valuesDiv = categoryCheckbox.parentElement.querySelector('.values');
        valuesDiv.style.display = categoryCheckbox.checked ? 'block' : 'none';
        
        // Check/uncheck related value checkboxes based on the category checkbox
        const valueCheckboxes = valuesDiv.querySelectorAll('input[name="values"]');
        valueCheckboxes.forEach((valueCheckbox) => {
            valueCheckbox.checked = categoryCheckbox.checked;
        });
    });
});
