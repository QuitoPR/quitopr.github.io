function generateRandomList() {
    const categories = document.getElementsByName('category');
    let selectedCategories = [];

    categories.forEach((category) => {
        if (category.checked) {
            selectedCategories.push(category.value);
        }
    });

    const values = {
        Stage: ["1", "2", "3"],
        Location: ["Rally Iberia", "Portugal", "Germany"]
    };

    let resultList = [];

    selectedCategories.forEach((category) => {
        const randomValue = values[category][Math.floor(Math.random() * values[category].length)];
        resultList.push(category + ' ' + randomValue);
    });

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultList.join(', ');
}
