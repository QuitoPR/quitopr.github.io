document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const output = document.getElementById("output");

    generateButton.addEventListener("click", generateRandomCombination);

    function generateRandomCombination() {
        const categories = ["stage1", "stage2", "stage3", "rallyIberia", "portugal", "germany"];
        let selectedCategories = [];

        for (const category of categories) {
            const checkbox = document.getElementById(category);

            if (checkbox.checked) {
                selectedCategories.push(checkbox.value);
            }
        }

        if (selectedCategories.length > 0) {
            const randomCategory = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
            output.textContent = randomCategory;
        } else {
            output.textContent = "No categories selected.";
        }
    }
});
