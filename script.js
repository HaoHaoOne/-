const dinners = [
    {
        name: 'Pizza',
        image: 'path/to/pizza.jpg',
        description: '必勝客、達美樂',
        links: [
            { name: '必勝客', url: 'https://www.pizzahut.com.tw/' },
            { name: '達美樂', url: 'https://www.dominos.com.tw/' }
        ]
    },
    {
        name: 'Sushi',
        image: 'path/to/sushi.jpg',
        description: '藏壽司、壽司郎、爭鮮',
        links: [
            { name: '藏壽司', url: 'https://www.kura-sushi.com.tw/' },
            { name: '壽司郎', url: 'https://www.sushiro.com.tw/' },
            { name: '爭鮮', url: 'https://www.sushiexpress.com.tw/' }
        ]
    },
    {
        name: 'Steak',
        image: 'path/to/Steak.jpg',
        description: '西堤、陶板屋、王品、貴族世家',
        links: [
            { name: '西堤', url: 'https://www.tasty.com.tw/' },
            { name: '陶板屋', url: 'https://www.taoban.com.tw/' },
            { name: '王品', url: 'https://www.wangsteak.com.tw/' },
            { name: '貴族世家', url: 'https://www.noblefamily.com.tw/' }
        ]
    }
];

document.getElementById('selectButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * dinners.length);
    const selectedDinner = dinners[randomIndex];

    document.getElementById('dinnerName').textContent = selectedDinner.name;
    document.getElementById('dinnerImage').src = selectedDinner.image;
    document.getElementById('dinnerImage').style.display = 'block';
    document.getElementById('dinnerDescription').textContent = selectedDinner.description;

    const linksContainer = document.getElementById('dinnerLinks');
    linksContainer.innerHTML = ''; // 清空先前的連結
    selectedDinner.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linkElement.target = '_blank'; // 在新標籤頁打開連結
        linksContainer.appendChild(linkElement);
        linksContainer.appendChild(document.createElement('br')); // 換行
    });
});
