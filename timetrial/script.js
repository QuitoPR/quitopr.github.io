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

    let resultList = [];

    selectedCategories.forEach((category) => {
        const randomValue = values[category][Math.floor(Math.random() * values[category].length)];
        resultList.push(category + ' ' + randomValue);
    });

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultList.join(', ');
}
