const dinners = [
    {
        name: '披薩',
        image: 'https://example.com/spaghetti.jpg',
        description: ' 必勝客、達美樂',
        links: [
            { name: '必勝客', url: 'https://www.pizzahut.com.tw/' },
            { name: '達美樂', url: 'https://www.dominos.com.tw/' }
        ]
    },
    {
        name: '壽司',
        image: 'https://example.com/sushi.jpg',
        description: '藏壽司、壽司郎、爭鮮',
        links: [
            { name: '藏壽司', url: 'https://www.kurasushi.tw/' },
            { name: '壽司郎', url: 'https://www.sushiro.com.tw/' },
            { name: '爭鮮', url: 'https://www.sushiexpress.com.tw/sushi-express/index' },
        ]
    },
    {
        name: '牛排',
        image: 'https://example.com/steak.jpg',
        description: '經典的意大利披薩，配上多種蔬菜和肉類。',
        links: [
            { name: '西堤', url: 'https://www.tasty.com.tw/' },
            { name: '陶板屋', url: 'https://www.tokiya.com.tw/' },
            { name: '王品', url: 'https://www.wowprime.com/zh-tw/' },
        ]
    }
];

document.getElementById('selectButton').addEventListener('click', () => {
    const randomDinner = dinners[Math.floor(Math.random() * dinners.length)];
    document.getElementById('dinnerName').textContent = randomDinner.name;
    document.getElementById('dinnerImage').src = randomDinner.image;
    document.getElementById('dinnerImage').style.display = 'block';
    document.getElementById('dinnerDescription').textContent = randomDinner.description;
    
    const linksContainer = document.getElementById('dinnerLinks');
    linksContainer.innerHTML = ''; // 清空先前的連結
    randomDinner.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linkElement.target = '_blank'; // 在新標籤頁打開連結
        linksContainer.appendChild(linkElement);
        linksContainer.appendChild(document.createElement('br')); // 換行
    });
});
