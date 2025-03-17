const products = [
    {
        id: 1,
        img: '../images/shimano-curado.png',
        title: "Shimano Curado",
        price: "$197.99",
        desc: "The Shimano Curado is a high-performance baitcasting reel known for its durability, smooth casting, and precision, making it a favorite among anglers.",
        hotItem: true,
        category: "reels"
    },
    {
        id: 2,
        img: "../images/swim-bait.png",
        title: "Swim Bait",
        price: "$12.99",
        desc: "A realistic swim bait designed to mimic natural prey, attracting big fish with its lifelike swimming action.",
        hotItem: false,
        category: "lures"
    },
    {
        id: 3,
        img: "../images/lews-speed-spool.png",
        title: "Lew's Speed Spool",
        price: "$139.99",
        desc: "The Lew's Speed Spool is a lightweight, smooth, and reliable baitcasting reel, perfect for anglers looking for performance at a great value.",
        hotItem: false,
        category: "reels"
    },
    {
        id: 4,
        img: "../images/abu-garcia-revo5.png",
        title: "Abu Garcia Revo5",
        price: "$229.99",
        desc: "The Abu Garcia Revo5 offers exceptional casting control and durability, making it a top choice for serious anglers.",
        hotItem: true,
        category: "reels"
    },
    {
        id: 5,
        img: "../images/craw.png",
        title: "Craw",
        price: "$5.99",
        desc: "A soft plastic crawfish lure that imitates a real crawfish, making it highly effective for bass fishing.",
        hotItem: false,
        category: "lures"
    },
    {
        id: 6,
        img: "../images/crankbait.png",
        title: "Crankbait",
        price: "$8.99",
        desc: "A versatile crankbait that produces strong vibrations, making it irresistible to predatory fish.",
        hotItem: true,
        category: "lures"
    }
];

const grid = document.querySelector('.grid');

const renderProds = (arr) => {
    grid.innerHTML = "";

    arr.forEach(prod => {
        grid.innerHTML += `
            <div class="card" data-id="${prod.id}">
                <img src="${prod.img}" alt="${prod.title}" loading="lazy">
                <h3>${prod.title}</h3>
                <p>${prod.desc}</p>
                <div class="card-footer">
                        <h4>${prod.price}</h4>
                        <button>Buy Now</button>
                </div>
            </div>
        `;
    });
};

renderProds(products);

const filterSelect = document.querySelector("#categoryFilter");

filterSelect.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;

    let filterProducts;

    if (selectedCategory === 'all') {
        filterProducts = products;
    } else {
        filterProducts = products.filter(prod => prod.category === selectedCategory);
    }

    renderProds(filterProducts);
})

