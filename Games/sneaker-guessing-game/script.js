const headerDiv = document.getElementById('header-div')
const level = document.getElementById('level-counter');
const score = document.getElementById('score');
const sneakerTitle= document.getElementById('sneaker-title');
const sneakerImage = document.getElementById('sneaker-img');
const guessButton = document.getElementById('guess-button');
const guessDiv = document.getElementById('input-div');
const gameDiv = document.getElementById('game-div');
const textDiv = document.getElementById('text-div');
let gamePosition = ""; 
let levelIndex = 1; 
let sneakerIndex = 0; 
let totalScore = 0;
guessButton.addEventListener('click', advanceGame);


function startGame() {
    console.log(sneakerArray.length); //to remove
    level.innerHTML = levelIndex.toString() + "/10";
    sneakerIndex = Math.floor(Math.random() * 231);
    sneakerTitle.innerHTML = sneakerArray[sneakerIndex].title;
    sneakerImage.src = sneakerArray[sneakerIndex].imageUrl;
    gamePosition = "viewing";
    levelIndex++;   
}

function loadNextLevel() {
    if(levelIndex > 10) {
        loadEndScreen();
        return;
    }
    gameDiv.style.display = "block";
    textDiv.style.display = 'none';
    guessButton.innerHTML = "Guess Price Button"
    level.innerHTML = levelIndex.toString() + "/10";
    sneakerIndex = Math.floor(Math.random() * 231);
    sneakerTitle.innerHTML = sneakerArray[sneakerIndex].title;
    sneakerImage.src = sneakerArray[sneakerIndex].imageUrl;
    gamePosition = "viewing";
    levelIndex++;
}
function advanceGame() {
    if(gamePosition == "viewing") {
        guessPrice();
        return;
    }
    if(gamePosition == "guessing") {
        showScore();
        return;
    }
    if(gamePosition == "results") {
        loadNextLevel();
        return;
    }
}
function guessPrice() {
    console.log('guessPrice function reached');//to remove
    guessButton.innerHTML = "Submit";
    gameDiv.style.display = "none";
    guessDiv.style.display = "flex";
    gamePosition = "guessing";
}

function showScore() {
    console.log('showScore function reached'); //to remove
    guessButton.innerHTML = "Next"
    let guess = 0; 
    if(!isNaN(document.getElementById('guess-input').value) && !(document.getElementById('guess-input').value === "")) {
        guess = parseInt(document.getElementById('guess-input').value);
    } 
    console.log("guess: " + guess)
    let scoreToAdd = 100 - (Math.abs(sneakerArray[sneakerIndex].lastSale - guess));
    if(scoreToAdd < 0) scoreToAdd = 0;
    totalScore = totalScore + scoreToAdd;
    score.innerHTML = "SCORE: " + totalScore.toString();
    document.getElementById('guess-input').value = "";
    guessDiv.style.display = "none";
    gameDiv.style.display = "none";
    textDiv.style.display = "flex";
    document.getElementById('product-text').innerHTML = sneakerArray[sneakerIndex].title;
    document.getElementById('shoe-price').innerHTML = "$"  + sneakerArray[sneakerIndex].lastSale.toString() + " USD"
    document.getElementById('player-answer').innerHTML = "Your guess: " + guess.toString();
    document.getElementById('points-gained').innerHTML = "Points Gained: " + scoreToAdd.toString()
    gamePosition = "results";
}

function loadEndScreen() {
    console.log('loadEndScreen function reached');//to remove
    gamePosition = "finished";
    gameDiv.style.display = "none";
    headerDiv.style.display = "none";
    document.getElementById('product-text').style.display = "none";
    document.getElementById('shoe-price').style.display = "none";
    document.getElementById('player-answer').style.display = "none";
    document.getElementById('points-gained').style.display = "none";
    document.getElementById('final-score').innerHTML = "Final Score: " + totalScore.toString();
    document.getElementById('final-message').style.display = "block";
}


//array with all the sneakers, contains nike, adidas, puma, jordan, reebok, and new balance. Scraped with Python's request module
//NOTE: Intial startGame call is at the bottom of this array, so the array loads first. 
const sneakerArray = [{
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Jackie-Robinson.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649445192",
    title: "Nike Dunk Low Jackie Robinson",
    lastSale: 365,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Max-Penny-1-Social-Status-Black-Varsity-Roayal.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656705071",
    title: "Nike Air Max Penny 1 Social Status Recess Black",
    lastSale: 230,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Max-Penny-1-Social-Status-Photon-Dust.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656705065",
    title: "Nike Air Max Penny 1 Social Status Recess Photon Dust",
    lastSale: 240,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409",
    title: "Nike Dunk Low Retro White Black Panda (2021)",
    lastSale: 182,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631122839",
    title: "Nike Air Force 1 Low '07 White",
    lastSale: 128,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611766850",
    title: "Nike Dunk Low White Black (2021) (W)",
    lastSale: 185,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613360456",
    title: "Nike Dunk Low Retro White Black (GS)",
    lastSale: 153,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Chlorophyll-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653041272",
    title: "Nike Dunk Low Chlorophyll",
    lastSale: 211,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Valerian-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652712361",
    title: "Nike Dunk Low Valerian Blue",
    lastSale: 163,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Coconut-Milk-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651696484",
    title: "Nike Dunk Low Coconut Milk",
    lastSale: 170,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645037142",
    title: "Nike Dunk High Black White (2021)",
    lastSale: 143,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Judge-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656661997",
    title: "Nike Dunk Low Judge Grey",
    lastSale: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606164536",
    title: "Nike Air Force 1 Low Supreme White",
    lastSale: 214,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Rose-Whisper-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654997",
    title: "Nike Dunk Low Rose Whisper (W)",
    lastSale: 144,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-07-Black-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607050715",
    title: "Nike Air Force 1 Low '07 Black Black",
    lastSale: 111,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654800213",
    title: "Nike Dunk Low Black White (2022)",
    lastSale: 125,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Reverse-Panda-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657781952",
    title: "Nike Dunk Low Reverse Panda",
    lastSale: 124,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Team-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648821059",
    title: "Nike Dunk Low Team Red (2022)",
    lastSale: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Los-Angeles-Dodgers-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657285119",
    title: "Nike SB Dunk Low Los Angeles Dodgers",
    lastSale: 217,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Racer-Blue-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654154937",
    title: "Nike Dunk Low Racer Blue White",
    lastSale: 155,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Jackie-Robinson-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651314154",
    title: "Nike Dunk Low Jackie Robinson (GS)",
    lastSale: 250,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Safari-Mix-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650480982",
    title: "Nike Dunk Low Safari Mix (W)",
    lastSale: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-World-Champs-Black-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655494428",
    title: "Nike Dunk Low World Champs Black White",
    lastSale: 151,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Blazer-Mid-77-Vintage-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325720",
    title: "Nike Blazer Mid 77 Vintage White Black",
    lastSale: 80,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Panda-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638807175",
    title: "Nike Dunk High Panda (2021) (W)",
    lastSale: 146,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624468188",
    title: "Nike Dunk Low Retro White Black (PS)",
    lastSale: 73,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-EMB-NBA-75th-Anniversary-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635520438",
    title: "Nike Dunk Low EMB NBA 75th Anniversary Chicago",
    lastSale: 149,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Valour-Blue-Team-Maroon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654859404",
    title: "Nike SB Dunk Low Philadelphia Phillies",
    lastSale: 217,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Humara-LX-Jacquemus-Beige-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657005041",
    title: "Nike Air Humara LX Jacquemus Light Bone Gold (W)",
    lastSale: 186,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Off-White-Black-Product-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655993157",
    title: "Nike Air Force 1 Mid Off-White Black",
    lastSale: 221,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Sun-Club-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656520314",
    title: "Nike Dunk Low Next Nature Sun Club Arctic Orange",
    lastSale: 127,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325289",
    title: "Nike Air Force 1 Low Supreme Black",
    lastSale: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Cortez-Union-Grain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655966102",
    title: "Nike Cortez SP Union Sesame",
    lastSale: 172,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Next-Nature-White-Mint-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654943",
    title: "Nike Dunk Low Next Nature White Mint (W)",
    lastSale: 129,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Court-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648131848",
    title: "Nike Dunk Low Championship Court Purple",
    lastSale: 165,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Two-Toned-Grey-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649690607",
    title: "Nike Dunk Low Two-Toned Grey (GS)",
    lastSale: 140,
    }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646687426",
        title: "adidas Yeezy Slide Onyx",
        lastSale: 146,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Restock-Pair-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639593302",
        title: "adidas Yeezy Slide Pure (Restock Pair)",
        lastSale: 147,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654264132",
        title: "adidas Yeezy Foam RNR Onyx",
        lastSale: 215,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Pure-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648503664",
        title: "adidas Yeezy Boost 350 V2 Bone",
        lastSale: 244,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653034864",
        title: "adidas Yeezy Slide Glow Green (2022) (Restock)",
        lastSale: 107,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656420652",
        title: "adidas Yeezy Boost 350 V2 Onyx",
        lastSale: 289,
        }, {
        imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606321670",
        title: "adidas Yeezy Boost 350 V2 Zebra",
        lastSale: 274,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Ochre-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638805392",
        title: "adidas Yeezy Slide Ochre",
        lastSale: 119,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Stone-Sage-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647445127",
        title: "adidas Yeezy Foam RNNR Stone Sage",
        lastSale: 215,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Core-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648065370",
        title: "adidas Yeezy Boost 350 V2 Core Black White",
        lastSale: 304,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sulfur-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654153626",
        title: "adidas Yeezy Foam RNNR Sulfur",
        lastSale: 161,
        }, {
        imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320792",
        title: "adidas Yeezy Boost 350 V2 Black Red (2017/2020)",
        lastSale: 332,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638996919",
        title: "adidas Yeezy Boost 350 V2 Beluga Reflective",
        lastSale: 319,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNR-Desert-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655490868",
        title: "adidas Yeezy Foam RNR Desert Sand",
        lastSale: 196,
        }, {
        imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Blue-Tint-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322199",
        title: "adidas Yeezy Boost 350 V2 Blue Tint",
        lastSale: 230,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628533740",
        title: "adidas Yeezy Boost 700 Wave Runner Solid Grey",
        lastSale: 329,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Dazzling-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647268107",
        title: "adidas Yeezy Boost 350 V2 Dazzling Blue",
        lastSale: 325,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Adilette-22-Slides-St-Desert-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654774522",
        title: "adidas Adilette 22 Slides St Desert Sand",
        lastSale: 90,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Ochre-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023377",
        title: "adidas Yeezy Foam RNNR Ochre",
        lastSale: 167,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Hi-Red-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655732626",
        title: "adidas Yeezy Boost 700 Hi-Res Red",
        lastSale: 313,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Adilette-22-Slides-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654149027",
        title: "adidas Adilette 22 Slides Black",
        lastSale: 77,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Adilette-22-Slides-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654149027",
        title: "adidas Adilette 22 Slides Grey",
        lastSale: 60,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-500-Granite-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653399233",
        title: "adidas Yeezy 500 Granite",
        lastSale: 220,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Blue-Glow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628537919",
        title: "adidas Yeezy 700 V3 Dark Glow",
        lastSale: 288,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634917162",
        title: "adidas Yeezy Boost 350 V2 MX Oat",
        lastSale: 201,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Rock-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656665081",
        title: "adidas Yeezy Boost 350 V2 MX Rock",
        lastSale: 220,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635875119",
        title: "adidas Yeezy Foam RNNR Vermillion",
        lastSale: 300,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Ultra-Boost-40-DNA-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1620058617",
        title: "adidas Ultra Boost 4.0 DNA White",
        lastSale: 82,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Bone-2022.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655925431",
        title: "adidas Yeezy Slide Bone (2022 Restock)",
        lastSale: 189,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Light-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629383966",
        title: "adidas Yeezy Boost 350 V2 Light",
        lastSale: 250,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Mono-Ice-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624459930",
        title: "adidas Yeezy Boost 350 V2 Mono Ice",
        lastSale: 268,
        }, {
        imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-500-Blush-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320491",
        title: "adidas Yeezy 500 Blush",
        lastSale: 259,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Adilette-22-Slides-Magic-Lime-St-Desert-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655323821",
        title: "adidas Adilette 22 Slides Magic Lime St Desert Sand",
        lastSale: 64,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-380-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655988278",
        title: "adidas Yeezy Boost 380 Onyx",
        lastSale: 220,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Geode-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650653021",
        title: "adidas Yeezy Boost 700 MNVN Geode",
        lastSale: 220,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Adilette-22-Slides-Black-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654149028",
        title: "adidas Adilette 22 Slides Black Grey",
        lastSale: 88,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Static-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1625589442",
        title: "adidas Yeezy Boost 700 V2 Static (2018/2022)",
        lastSale: 323,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Yeezy-450-Sulfur-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651599570",
        title: "adidas Yeezy 450 Sulfur",
        lastSale: 153,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Adilette-22-Slides-Magic-Lime-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654774517",
        title: "adidas Adilette 22 Slides Magic Lime",
        lastSale: 70,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-Lo-UFO.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654652541",
        title: "Puma LaMelo Ball MB.01 UFO",
        lastSale: 140,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Galaxy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651610682",
        title: "Puma LaMelo Ball MB.01 Galaxy",
        lastSale: 140,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Rick-and-Morty-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645637275",
        title: "Puma LaMelo Ball MB.01 Rick and Morty",
        lastSale: 300,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Galaxy-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651844996",
        title: "Puma LaMelo Ball MB.01 Galaxy (GS)",
        lastSale: 100,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Purple-Glimmer-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648504032",
        title: "Puma LaMelo Ball MB.01 Queen City",
        lastSale: 277,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-LaMelo-Ball-MB01-Lo-UFO-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655244047",
        title: "Puma LaMelo Ball MB.01 Lo UFO (GS)",
        lastSale: 90,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Buzz-City.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641587333",
        title: "Puma LaMelo Ball MB.01 Buzz City",
        lastSale: 215,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Grey-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648066335",
        title: "Puma LaMelo Ball MB.01 Rock Ridge Red Blast",
        lastSale: 150,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-J-Cole-Blood-Sweat-and-Tears.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609761776",
        title: "Puma RS-Dreamer J. Cole Blood, Sweat and Tears",
        lastSale: 115,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Red-Blast-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641328740",
        title: "Puma LaMelo Ball MB.01 Not From Here Red Blast",
        lastSale: 235,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-J-Cole-Ebony-and-Ivory.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607107260",
        title: "Puma RS-Dreamer J Cole Ebony and Ivory",
        lastSale: 72,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB1-Purple-Glimmer-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648504053",
        title: "Puma MB1 Queen City (GS)",
        lastSale: 216,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Red-Blast-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639998052",
        title: "Puma LaMelo Ball MB.01 Not From Here Red Blast (GS)",
        lastSale: 166,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Rock-Ridge-Red-Blast-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645645848",
        title: "Puma LaMelo Ball MB.01 Rock Ridge Red Blast (GS)",
        lastSale: 89,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Rick-and-Morty.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653667127",
        title: "Puma RS-X Rick and Morty",
        lastSale: 80,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-Queen-City-PS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648513004",
        title: "Puma LaMelo Ball MB.01 Queen City (PS)",
        lastSale: 175,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Slipstream-Low-Butter-Goods-Whisper-White-Prism-Violet-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651856901",
        title: "Puma Slipstream Low Butter Goods Whisper White Prism Violet",
        lastSale: 147,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-LaMelo-Ball-Galaxy.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654465662",
        title: "Puma RS-X LaMelo Ball Galaxy",
        lastSale: 105,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Ralph-Sampson-TMC-Peacoat.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637291561",
        title: "Puma Ralph Sampson Nipsey Hussle TMC Peacoat",
        lastSale: 61,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Thunder-Scuderia-Ferrari.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626899515",
        title: "Puma Thunder Scuderia Ferrari",
        lastSale: 87,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-J-Cole-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626806139",
        title: "Puma RS-Dreamer J Cole Red",
        lastSale: 58,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-E-Line.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646278080",
        title: "Puma RS-Dreamer E-Line",
        lastSale: 85,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-J-Cole-RS-Dreamer-Proto-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647439841",
        title: "Puma J Cole RS-Dreamer Proto White",
        lastSale: 60,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Sky-Dreamer-White.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626899124",
        title: "Puma Sky Dreamer White",
        lastSale: 39,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-Black-Blast-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652283699",
        title: "Puma LaMelo Ball MB.01 Black Red Blast (GS)",
        lastSale: 151,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Suede-Vintage-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1619563640",
        title: "Puma Suede Vintage Black",
        lastSale: 57,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-J-Cole-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320872",
        title: "Puma RS-Dreamer J. Cole Black",
        lastSale: 98,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Black-Red-Blast-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645556409",
        title: "Puma LaMelo Ball MB.01 Black Red Blast",
        lastSale: 250,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-J-Cole-Lime-Green-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634564220",
        title: "Puma RS-Dreamer J Cole Lime Green",
        lastSale: 69,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-MB01-LaMelo-Ball-Buzz-City-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641587363",
        title: "Puma LaMelo Ball MB.01 Buzz City (GS)",
        lastSale: 143,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-X-Toys-White.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607052429",
        title: "Puma RS-X Toys White",
        lastSale: 150,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-Dreamer-Super-Mario-64-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614744969",
        title: "Puma RS-Dreamer Super Mario 64",
        lastSale: 133,
        }, {
        imageUrl: "https://images.stockx.com/images/puma-mb-01-lamelo-ball-rick-and-morty-vault-nft-bce44af7-a48b-4fdd-89f5-96d1e73bcb26.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646456470",
        title: "StockX Vault NFT Puma MB.01 LaMelo Ball Rick and Morty - US M 10 Vaulted Goods",
        lastSale: 300,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Future-Rider-Super-Mario-64.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1610680136",
        title: "Puma Future Rider Super Mario 64",
        lastSale: 139,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Suede-Classic-XXI-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637789014",
        title: "Puma Suede Classic XXI Black White",
        lastSale: 51,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Suede-Animal-Crossing-New-Horizons.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631563561",
        title: "Puma Suede Animal Crossing New Horizons",
        lastSale: 121,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Slipstream-Low-Butter-Goods-Whisper-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632453535",
        title: "Puma Slipstream Low Butter Goods Whisper White",
        lastSale: 162,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-RS-X-Retro-Red-Grey-Indigo-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626898775",
        title: "Puma RS-X Retro Red Grey Indigo",
        lastSale: 92,
        }, {
        imageUrl: "https://images.stockx.com/images/Puma-Mirage-Sport-Maison-Kitsune-Blue-Depths.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637291567",
        title: "Puma Mirage Sport Maison Kitsune Blue Depths",
        lastSale: 105,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Stage-Haze-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653035159",
        title: "Jordan 1 Retro High OG Bleached Coral",
        lastSale: 209,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-2-Retro-Maison-Chateau-Rouge-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655474977",
        title: "Jordan 2 Retro SP Maison Chateau Rouge",
        lastSale: 238,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652711257",
        title: "Jordan 4 Retro Military Black",
        lastSale: 319,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Infrared-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645637225",
        title: "Jordan 4 Retro Infrared",
        lastSale: 237,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Low-Shadow-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649865016",
        title: "Jordan 1 Low Shadow Toe",
        lastSale: 159,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401817",
        title: "Jordan 4 Retro Military Black (GS)",
        lastSale: 225,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Low-Bred-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637253420",
        title: "Jordan 1 Low Bred Toe",
        lastSale: 132,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633542046",
        title: "Jordan 1 Retro High OG Patent Bred",
        lastSale: 181,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Light-Smoke-Grey-Anthracite-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643276910",
        title: "Jordan 1 Mid Light Smoke Grey Anthracite",
        lastSale: 145,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-11-Retro-Cool-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631898423",
        title: "Jordan 11 Retro Cool Grey (2021)",
        lastSale: 224,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Stage-Haze-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652346288",
        title: "Jordan 1 Retro High OG Bleached Coral (GS)",
        lastSale: 153,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Linen-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631115416",
        title: "Jordan 1 Mid Linen",
        lastSale: 182,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-5-Retro-Green-Bean-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655237336",
        title: "Jordan 5 Retro Green Bean (2022)",
        lastSale: 190,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Infrared-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646935173",
        title: "Jordan 4 Retro Infrared (GS)",
        lastSale: 187,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-11-Retro-Low-72-10-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651856525",
        title: "Jordan 11 Retro Low 72-10",
        lastSale: 170,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641394023",
        title: "Jordan 4 Retro Red Thunder",
        lastSale: 325,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-3-Retro-Dark-Iris.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656390901",
        title: "Jordan 3 Retro Dark Iris",
        lastSale: 197,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Heritage-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649081695",
        title: "Jordan 1 Retro High OG Heritage",
        lastSale: 157,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Low-OG-Bleached-Coral-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655965913",
        title: "Jordan 1 Low OG Bleached Coral",
        lastSale: 153,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Low-Inside-Out-Cream-White-Light-Grey-3.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657637344",
        title: "Jordan 1 Low Inside Out White Phantom",
        lastSale: 150,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Diamond-Shorts-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645637189",
        title: "Jordan 1 Mid Diamond Shorts",
        lastSale: 140,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Sonics-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646934930",
        title: "Jordan 1 Mid Sonics (2021)",
        lastSale: 127,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Dark-Marina-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642023273",
        title: "Jordan 1 Retro High OG Dark Marina Blue",
        lastSale: 170,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Dark-Teal-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638456935",
        title: "Jordan 1 Mid Armory Navy",
        lastSale: 182,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Blue-Mint-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401757",
        title: "Jordan 1 Mid Mystic Navy Mint Foam",
        lastSale: 105,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-7-Retro-Citrus-2022.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641240384",
        title: "Jordan 7 Retro Citrus (2022)",
        lastSale: 190,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Brotherhood-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645431855",
        title: "Jordan 1 Retro High OG Brotherhood",
        lastSale: 130,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Lightning-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023947",
        title: "Jordan 4 Retro Lightning (2021)",
        lastSale: 273,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-6-Retro-Midnight-Navy-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651610342",
        title: "Jordan 6 Retro Midnight Navy (2022)",
        lastSale: 184,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Atmosphere-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637087111",
        title: "Jordan 1 Retro High OG Atmosphere (W)",
        lastSale: 181,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-12-Retro-Playoffs-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646231976",
        title: "Jordan 12 Retro Playoffs (2022)",
        lastSale: 220,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Rebellionaire-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646841923",
        title: "Jordan 1 Retro High OG Rebellionaire",
        lastSale: 318,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-UNC-2022-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651844381",
        title: "Jordan 1 Mid UNC (2022) (W)",
        lastSale: 131,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Mid-Reverse-Bred-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649427468",
        title: "Jordan 1 Mid Reverse Bred (2021)",
        lastSale: 100,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-3-Retro-Desert-Elephant-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657197668",
        title: "Jordan 3 Retro Desert Elephant",
        lastSale: 177,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-Mystic-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656508719",
        title: "Jordan 1 Retro Low OG Mystic Navy",
        lastSale: 142,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-9-Retro-Chile-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652711343",
        title: "Jordan 9 Retro Chile Red",
        lastSale: 215,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Zen-Master-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655732734",
        title: "Jordan 4 Retro Zen Master",
        lastSale: 238,
        }, {
        imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611777406",
        title: "Jordan 1 Retro High White University Blue Black",
        lastSale: 425,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Pump-Omni-Zone-II-Celtics.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649270671",
        title: "Reebok Pump Omni Zone II Celtics",
        lastSale: 108,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-TV-Chalk-Glen-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650655520",
        title: "Reebok Club C 85 TV Chalk Glen Green",
        lastSale: 82,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Mid-Blue-Toe-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657782277",
        title: "Reebok Question Mid Blue Toe (2022)",
        lastSale: 136,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-x-Maison-Margiela-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629920780",
        title: "Reebok Club C Maison Margiela Tan",
        lastSale: 150,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-Revenge-Vintage-White-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644954507",
        title: "Reebok Club C Revenge Vintage White Green",
        lastSale: 104,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Pump-Omni-Zone-II-Pistons-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645801213",
        title: "Reebok Pump Omni Zone II Pistons",
        lastSale: 243,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Answer-DMX-OG-White-Red-2022.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656001867",
        title: "Reebok Answer DMX OG White Red (2022)",
        lastSale: 214,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Answer-IV-The-Tunnel.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641587333",
        title: "Reebok Answer IV The Tunnel",
        lastSale: 80,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Answer-IV-Stepover-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624468578",
        title: "Reebok Answer IV Stepover (2021)",
        lastSale: 202,
        }, {
        imageUrl: "https://images.stockx.com/images/adidas-Dame-7-Shaq-Reebok-Damenosis-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646843159",
        title: "adidas Dame 7 Shaq Reebok Damenosis",
        lastSale: 90,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Mid-Hot-Ones-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1627918422",
        title: "Reebok Question Mid Hot Ones",
        lastSale: 69,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Classic-Leather-Tabi-x-Maison-Margiela-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634225887",
        title: "Reebok Classic Leather Tabi Maison Margiela Tan",
        lastSale: 168,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Premier-Road-Modern-Mid-KANGHYUK-Core-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656661990",
        title: "Reebok Premier Road Modern Mid KANGHYUK Core Black",
        lastSale: 161,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-Bape-White-Contrast-Stitch-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638552556",
        title: "Reebok Club C 85 Bape White Contrast Stitch",
        lastSale: 174,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Pump-Omni-Zone-II-Dee-Brown-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1636388949",
        title: "Reebok Pump Omni Zone II Dee Brown (2021)",
        lastSale: 280,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-Maison-Margiela-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1619194225",
        title: "Reebok Club C Maison Margiela White",
        lastSale: 121,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-Cardi-B-Footwear-White-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1621443583",
        title: "Reebok Club C Cardi B Footwear White (W)",
        lastSale: 59,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Ghost-Smasher-Ghostbusters-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649685173",
        title: "Reebok Ghost Smasher Ghostbusters",
        lastSale: 105,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-Awake-NY-Snakeskin-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1623169194",
        title: "Reebok Club C Awake NY Snakeskin",
        lastSale: 40,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-Vintage-Chalk-Essential-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653632299",
        title: "Reebok Club C 85 Vintage Chalk Essential Blue",
        lastSale: 100,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Mid-Maison-Margiela-Memory-Of-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652836057",
        title: "Reebok Question Mid Maison Margiela Memory Of White",
        lastSale: 195,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Ex-O-Fit-Clean-Hi-Bait-x-Ghostbusters-x-Stranger-Things.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626900022",
        title: "Reebok Ex-O-Fit Clean Hi Bait x Ghostbusters x Stranger Things",
        lastSale: 100,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Pump-Omni-Zone-II-Jurassic-Park-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635270261",
        title: "Reebok Pump Omni Zone II Jurassic Park",
        lastSale: 162,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-Tyrell-Winston-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657606281",
        title: "Reebok Club C 85 Tyrrell Winston",
        lastSale: 155,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Mid-Candyland-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1627327063",
        title: "Reebok Question Mid Candy Land",
        lastSale: 79,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Low-Blueprint.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1640034823",
        title: "Reebok Question Low Blueprint",
        lastSale: 174,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-The-Answer-IV-OG-Step-Over.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655238878",
        title: "Reebok The Answer IV OG NBA Finals White Black",
        lastSale: 85,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Mid-Mocha-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652712648",
        title: "Reebok Question Mid Mocha Toe",
        lastSale: 105,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Kamikaze-II-Black-White-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1619736899",
        title: "Reebok Kamikaze II Black White (2020)",
        lastSale: 145,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Zig-Kinetica-II-Edge-ASAP-Nast-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646033357",
        title: "Reebok Zig Kinetica II Edge A$AP Nast",
        lastSale: 170,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Instapump-Fury-GTX-Citron-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635365871",
        title: "Reebok Instapump Fury X GTX Citron",
        lastSale: 140,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Question-Mid-Georgetown-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614197798",
        title: "Reebok Question Mid Georgetown (2020)",
        lastSale: 200,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-Prince-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632428115",
        title: "Reebok Club C 85 Prince White",
        lastSale: 134,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Shaqnosis-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611089242",
        title: "Reebok Shaqnosis White Black",
        lastSale: 479,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-Revenge-White-Seaport-Teal.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651611548",
        title: "Reebok Club C Revenge White Seaport Teal",
        lastSale: 68,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Kamikaze-II-Low-Nice-Kicks-NBA-Jam.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650593778",
        title: "Reebok Kamikaze II Low Nice Kicks NBA Jam",
        lastSale: 120,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-White-Gum-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654155155",
        title: "Reebok Club C 85 White Gum",
        lastSale: 90,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Classic-Leather-Black-Gum.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646686576",
        title: "Reebok Classic Leather Black Gum",
        lastSale: 85,
        }, {
        imageUrl: "https://images.stockx.com/images/Reebok-Club-C-85-Looney-Tunes-Props.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652901274",
        title: "Reebok Club C 85 Looney Tunes Props",
        lastSale: 99,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Olive-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657284651",
        title: "New Balance 550 Aime Leon Dore Olive",
        lastSale: 230,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Cream-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651781130",
        title: "New Balance 550 Cream Black",
        lastSale: 128,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613670436",
        title: "New Balance 550 White Grey",
        lastSale: 124,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-530-White-Silver-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657865292",
        title: "New Balance 530 White Silver Navy",
        lastSale: 99,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628002321",
        title: "New Balance 550 White Green",
        lastSale: 181,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Au-Lait-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649865272",
        title: "New Balance 550 Au Lait (W)",
        lastSale: 120,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Grey-Dark-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654154068",
        title: "New Balance 550 White Grey Dark Grey",
        lastSale: 122,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-9060-Sea-Salt.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657046586",
        title: "New Balance 9060 Sea Salt",
        lastSale: 186,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-2002R-Nightwatch-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645036785",
        title: "New Balance 2002R Nightwatch Green",
        lastSale: 145,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-9060-Joe-Freshgoods-Inside-Voices-Penny-Cookie-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653595155",
        title: "New Balance 9060 Joe Freshgoods Inside Voices Penny Cookie Pink",
        lastSale: 288,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-990v5-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607650731",
        title: "New Balance 990v5 Grey",
        lastSale: 155,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1630617711",
        title: "New Balance 550 White Red",
        lastSale: 135,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-2002R-Protection-Pack-Dark-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650653878",
        title: "New Balance 2002R Protection Pack Dark Navy",
        lastSale: 173,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Burgundy-Cyan-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642152924",
        title: "New Balance 550 Burgundy Cyan",
        lastSale: 115,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-2002R-Protection-Pack-Mirage-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650653906",
        title: "New Balance 2002R Protection Pack Mirage Grey",
        lastSale: 165,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-990v3-MiUSA-Teddy-Santis-Moonbeam-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657116451",
        title: "New Balance 990v3 MiUSA Teddy Santis Moonbeam",
        lastSale: 210,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-M2002-Protection-Pack-Rain-Cloud-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638287519",
        title: "New Balance 2002R Protection Pack Rain Cloud",
        lastSale: 323,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Silver-Birch-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655385965",
        title: "New Balance 550 Silver Birch (W)",
        lastSale: 122,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657781487",
        title: "New Balance 550 Aime Leon Dore Brown",
        lastSale: 293,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-UNC-White-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638903675",
        title: "New Balance 550 UNC White University Blue",
        lastSale: 192,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-2002R-Black-Dark-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657026514",
        title: "New Balance 2002R Black Dark Grey",
        lastSale: 136,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-990v3-JJJJound-Brown-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653423461",
        title: "New Balance 990v3 JJJJound Brown Black",
        lastSale: 271,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638903675",
        title: "New Balance 550 White Black",
        lastSale: 177,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Shadow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613412534",
        title: "New Balance 550 Shadow",
        lastSale: 114,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-530-Steel-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643116877",
        title: "New Balance 530 Steel Grey",
        lastSale: 95,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-57-40-Sea-Salt-Calm-Taupe-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646664722",
        title: "New Balance 57/40 Sea Salt Calm Taupe (W)",
        lastSale: 162,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613669984",
        title: "New Balance 550 White Blue",
        lastSale: 135,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Mint-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651519339",
        title: "New Balance 550 White Mint Green",
        lastSale: 160,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Vibrant-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657606123",
        title: "New Balance 550 White Vibrant Orange",
        lastSale: 147,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Sea-Salt-Yellow.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656058829",
        title: "New Balance 550 Sea Salt Yellow",
        lastSale: 115,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-9060-Joe-Freshgoods-Inside-Voices-Baby-Shower-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654198932",
        title: "New Balance 9060 Joe Freshgoods Inside Voices Baby Shower Blue",
        lastSale: 245,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-2002R-Bone-Light-Aluminum-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1615914171",
        title: "New Balance 2002R Bone Light Aluminum",
        lastSale: 116,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Purple.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655833636",
        title: "New Balance 550 Aime Leon Dore Purple",
        lastSale: 180,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-990v3-MiUSA-Teddy-Santis-Sea-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655918816",
        title: "New Balance 990v3 MiUSA Teddy Santis Sea Salt",
        lastSale: 226,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Green-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632509901",
        title: "New Balance 550 White Green Black",
        lastSale: 158,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Red-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642148870",
        title: "New Balance 550 White Red Black",
        lastSale: 140,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-327-Sea-Salt-Rust-Oxide-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647351424",
        title: "New Balance 327 Sea Salt Rust Oxide (W)",
        lastSale: 98,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-530-White-Nightwatch-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649688327",
        title: "New Balance 530 White Nightwatch Green",
        lastSale: 145,
        }, {
        imageUrl: "https://images.stockx.com/images/New-Balance-M2002-Protection-Pack-Sea-Sault-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649690006",
        title: "New Balance 2002R Protection Pack Sea Salt",
        lastSale: 278,
        }]
startGame()