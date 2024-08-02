document.getElementById('selectButton').addEventListener('click', function() {
    const dinners = [
        {
            name: 'Pizza',
            image: 'path/to/pizza.jpg',
            description: ' 必勝客、達美樂'
        },
        {
            name: 'Sushi',
            image: 'path/to/sushi.jpg',
            description: '藏壽司、壽司郎、爭鮮'
        },
        {
            name: 'Steak',
            image: 'path/to/Steak.jpg',
            description: ' 西堤、陶板屋、王品、貴族世家'
        },
        // 你可以再增加更多選項
    ];

    const randomIndex = Math.floor(Math.random() * dinners.length);
    const selectedDinner = dinners[randomIndex];

    document.getElementById('dinnerName').textContent = selectedDinner.name;
    document.getElementById('dinnerImage').src = selectedDinner.image;
    document.getElementById('dinnerImage').style.display = 'block';
    document.getElementById('dinnerDescription').textContent = selectedDinner.description;
});
