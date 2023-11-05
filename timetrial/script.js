document.addEventListener("DOMContentLoaded", function() {
    const stageValues = ["Stage 1", "Stage 2", "Stage 3"];
    const locationValues = ["Rally Iberia", "Portugal", "Germany"];
    
    const generateButton = document.getElementById("generate-button");
    const output = document.getElementById("output");
    
    generateButton.addEventListener("click", function() {
        const selectedCategories = [];
        
        const stageCheckbox = document.getElementById("stage-checkbox");
        const locationCheckbox = document.getElementById("location-checkbox");
        
        if (stageCheckbox.checked) {
            selectedCategories.push(...stageValues);
        }
        
        if (locationCheckbox.checked) {
            selectedCategories.push(...locationValues);
        }
        
        if (selectedCategories.length > 0) {
            const randomIndex = Math.floor(Math.random() * selectedCategories.length);
            const randomValue = selectedCategories[randomIndex];
            
            output.textContent = randomValue;
        } else {
            output.textContent = "Please select at least one category.";
        }
    });
});
