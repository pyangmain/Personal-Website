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
    sneakerIndex = Math.floor(Math.random() * 430);
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
    guessButton.innerHTML = "Guess"
    level.innerHTML = levelIndex.toString() + "/10";
    sneakerIndex = Math.floor(Math.random() * 430);
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
    guessButton.innerHTML = "Submit";
    gameDiv.style.display = "none";
    guessDiv.style.display = "flex";
    gamePosition = "guessing";
}

function showScore() {
    guessButton.innerHTML = "Next"
    let guess = 0; 
    if(!isNaN(document.getElementById('guess-input').value) && !(document.getElementById('guess-input').value === "")) {
        guess = parseInt(document.getElementById('guess-input').value);
    } 
    console.log("guess: " + guess)
    let scoreToAdd = 100 - (Math.abs(sneakerArray[sneakerIndex].averageDeadstockPrice - guess));
    if(scoreToAdd < 0) scoreToAdd = 0;
    totalScore = totalScore + scoreToAdd;
    score.innerHTML = "SCORE: " + totalScore.toString();
    document.getElementById('guess-input').value = "";
    guessDiv.style.display = "none";
    gameDiv.style.display = "none";
    textDiv.style.display = "flex";
    document.getElementById('product-text').innerHTML = sneakerArray[sneakerIndex].title;
    document.getElementById('shoe-price').innerHTML = "$"  + sneakerArray[sneakerIndex].averageDeadstockPrice.toString() + " USD"
    document.getElementById('player-answer').innerHTML = "Your guess: " + guess.toString();
    document.getElementById('points-gained').innerHTML = "Points Gained: " + scoreToAdd.toString()
    gamePosition = "results";
}

function loadEndScreen() {
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
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Pure-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648503664",
    title: "adidas Yeezy Boost 350 V2 Bone",
    averageDeadstockPrice: 271,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656420652",
    title: "adidas Yeezy Boost 350 V2 Onyx",
    averageDeadstockPrice: 282,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606321670",
    title: "adidas Yeezy Boost 350 V2 Zebra",
    averageDeadstockPrice: 322,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Core-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648065370",
    title: "adidas Yeezy Boost 350 V2 Core Black White",
    averageDeadstockPrice: 331,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638996919",
    title: "adidas Yeezy Boost 350 V2 Beluga Reflective",
    averageDeadstockPrice: 314,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320792",
    title: "adidas Yeezy Boost 350 V2 Black Red (2017/2020)",
    averageDeadstockPrice: 399,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Blue-Tint-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322199",
    title: "adidas Yeezy Boost 350 V2 Blue Tint",
    averageDeadstockPrice: 310,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Dazzling-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647268107",
    title: "adidas Yeezy Boost 350 V2 Dazzling Blue",
    averageDeadstockPrice: 322,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634917162",
    title: "adidas Yeezy Boost 350 V2 MX Oat",
    averageDeadstockPrice: 264,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Mono-Ice-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624459930",
    title: "adidas Yeezy Boost 350 V2 Mono Ice",
    averageDeadstockPrice: 277,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Rock-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656665081",
    title: "adidas Yeezy Boost 350 V2 MX Rock",
    averageDeadstockPrice: 271,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Light-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629383966",
    title: "adidas Yeezy Boost 350 V2 Light",
    averageDeadstockPrice: 272,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Static-Black-Reflective-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322236",
    title: "adidas Yeezy Boost 350 V2 Static Black (Reflective)",
    averageDeadstockPrice: 500,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322741",
    title: "adidas Yeezy Boost 350 V2 Cream/Triple White",
    averageDeadstockPrice: 377,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Carbon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609432836",
    title: "adidas Yeezy Boost 350 V2 Carbon",
    averageDeadstockPrice: 282,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Zyon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325931",
    title: "adidas Yeezy Boost 350 V2 Zyon",
    averageDeadstockPrice: 270,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Ash-Pearl-2021.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1615819888",
    title: "adidas Yeezy Boost 350 V2 Ash Pearl",
    averageDeadstockPrice: 292,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607647321",
    title: "adidas Yeezy Boost 350 V2 Black (Non-Reflective)",
    averageDeadstockPrice: 512,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Mono-Cinder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635434704",
    title: "adidas Yeezy Boost 350 V2 Mono Cinder",
    averageDeadstockPrice: 283,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Israfil-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609432732",
    title: "adidas Yeezy Boost 350 V2 Israfil",
    averageDeadstockPrice: 297,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Mono-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645802628",
    title: "adidas Yeezy Boost 350 V2 Mono Clay",
    averageDeadstockPrice: 221,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Eliada-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609768689",
    title: "adidas Yeezy Boost 350 V2 Sand Taupe",
    averageDeadstockPrice: 285,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Mono-Mist-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633530267",
    title: "adidas Yeezy Boost 350 V2 Mono Mist",
    averageDeadstockPrice: 229,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Cloud-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323488",
    title: "adidas Yeezy Boost 350 V2 Cloud White (Non-Reflective)",
    averageDeadstockPrice: 391,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Synth-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607647723",
    title: "adidas Yeezy Boost 350 V2 Synth (Reflective)",
    averageDeadstockPrice: 356,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Tail-Light-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606324899",
    title: "adidas Yeezy Boost 350 V2 Tail Light",
    averageDeadstockPrice: 377,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Citrin-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325419",
    title: "adidas Yeezy Boost 350 V2 Citrin (Non-Reflective)",
    averageDeadstockPrice: 307,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Yeezreel-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325918",
    title: "adidas Yeezy Boost 350 V2 Yeezreel (Non-Reflective)",
    averageDeadstockPrice: 278,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Earth-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322225",
    title: "adidas Yeezy Boost 350 V2 Earth",
    averageDeadstockPrice: 452,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Sesame-Thumb.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322910",
    title: "adidas Yeezy Boost 350 V2 Sesame",
    averageDeadstockPrice: 451,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Yecheil-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325433",
    title: "adidas Yeezy Boost 350 V2 Yecheil (Non-Reflective)",
    averageDeadstockPrice: 366,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Natural-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609349728",
    title: "adidas Yeezy Boost 350 V2 Natural",
    averageDeadstockPrice: 306,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Ash-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1617991579",
    title: "adidas Yeezy Boost 350 V2 Ash Blue",
    averageDeadstockPrice: 295,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Ash-Stone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1615906611",
    title: "adidas Yeezy Boost 350 V2 Ash Stone",
    averageDeadstockPrice: 296,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Desert-Sage-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322863",
    title: "adidas Yeezy Boost 350 V2 Desert Sage",
    averageDeadstockPrice: 300,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Cinder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320313",
    title: "adidas Yeezy Boost 350 V2 Cinder",
    averageDeadstockPrice: 422,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Static-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606321247",
    title: "adidas Yeezy Boost 350 V2 Static (Non-Reflective)",
    averageDeadstockPrice: 437,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Sulfur-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656592984",
    title: "adidas Yeezy Boost 350 V2 Sulfur",
    averageDeadstockPrice: 347,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Yecher-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609349759",
    title: "adidas Yeezy Boost 350 V2 Fade",
    averageDeadstockPrice: 300,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Los-Angeles-Dodgers-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657285119",
    title: "Nike SB Dunk Low Los Angeles Dodgers",
    averageDeadstockPrice: 234,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Valour-Blue-Team-Maroon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654859404",
    title: "Nike SB Dunk Low Philadelphia Phillies",
    averageDeadstockPrice: 209,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-St-Patricks-Day-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401220",
    title: "Nike SB Dunk Low Pro St. Patrick's Day (2022)",
    averageDeadstockPrice: 218,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Bart-Simpson-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650655298",
    title: "Nike SB Dunk Low Pro Bart Simpson",
    averageDeadstockPrice: 259,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Be-True-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1658152883",
    title: "Nike SB Dunk Low Pro Be True",
    averageDeadstockPrice: 171,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Light-Cognac-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653041643",
    title: "Nike SB Dunk Low Pro ISO Light Cognac",
    averageDeadstockPrice: 192,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Cherry-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401190",
    title: "Nike SB Dunk Low Cherry",
    averageDeadstockPrice: 188,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Blue-Raspberry-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654265793",
    title: "Nike SB Dunk Low Blue Raspberry",
    averageDeadstockPrice: 237,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Green-Apple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653041600",
    title: "Nike SB Dunk Low Green Apple",
    averageDeadstockPrice: 235,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Paisley-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649082481",
    title: "Nike SB Dunk Low Pro Paisley Brown",
    averageDeadstockPrice: 226,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-New-York-Mets-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654859103",
    title: "Nike SB Dunk High New York Mets",
    averageDeadstockPrice: 173,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-San-Francisco-Giants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657782130",
    title: "Nike SB Dunk High San Francisco Giants",
    averageDeadstockPrice: 159,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Gnarhunters-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653983203",
    title: "Nike SB Dunk Low Gnarhunters",
    averageDeadstockPrice: 190,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Pineapple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654606600",
    title: "Nike SB Dunk High Pineapple",
    averageDeadstockPrice: 165,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-SB-Low-Mummy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634318374",
    title: "Nike SB Dunk Low Mummy",
    averageDeadstockPrice: 456,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Polaroid-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649428692",
    title: "Nike SB Dunk Low Polaroid",
    averageDeadstockPrice: 190,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-SB-Low-Fog-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635358617",
    title: "Nike SB Dunk Low Fog",
    averageDeadstockPrice: 206,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Pro-ISO-Kentucky-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647360118",
    title: "Nike SB Dunk High Pro ISO Kentucky",
    averageDeadstockPrice: 173,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Parra-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1627326877",
    title: "Nike SB Dunk Low Pro Parra Abstract Art (2021)",
    averageDeadstockPrice: 384,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-FTC-Lagoon-Pulse-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626813336",
    title: "Nike SB Dunk Low Pro FTC Lagoon Pulse (Regular Box)",
    averageDeadstockPrice: 344,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Orange-Label-Unbleached-Pack-Lilac-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027948",
    title: "Nike SB Dunk Low Pro ISO Orange Label Unbleached Pack Lilac",
    averageDeadstockPrice: 264,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-KCDC-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651844966",
    title: "Nike SB Dunk High Pro KCDC",
    averageDeadstockPrice: 184,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Strawberry-Cough-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635280495",
    title: "Nike SB Dunk High Strawberry Cough (Regular Box)",
    averageDeadstockPrice: 437,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Classic-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1623168870",
    title: "Nike SB Dunk Low Classic Green",
    averageDeadstockPrice: 251,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Supreme-By-Any-Means-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646842575",
    title: "Nike SB Dunk High Supreme By Any Means Black",
    averageDeadstockPrice: 305,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Dark-Russet-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643118887",
    title: "Nike SB Dunk Low Pro Dark Russet",
    averageDeadstockPrice: 200,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Chlorophyll-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637254658",
    title: "Nike SB Dunk Low Chlorophyll",
    averageDeadstockPrice: 226,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Medicom-Toy-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607059648",
    title: "Nike SB Dunk Low Medicom Toy (2020)",
    averageDeadstockPrice: 227,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Travis-Scott-Special-Box.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606344246",
    title: "Nike SB Dunk Low Travis Scott (Special Box)",
    averageDeadstockPrice: 1999,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-atmos-Elephant-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653400056",
    title: "Nike SB Dunk Low atmos Elephant",
    averageDeadstockPrice: 334,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-What-The-P-Rod-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1622045861",
    title: "Nike SB Dunk Low What The Paul",
    averageDeadstockPrice: 576,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Supreme-By-Any-Means-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646935866",
    title: "Nike SB Dunk High Supreme By Any Means Navy",
    averageDeadstockPrice: 233,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Grateful-Dead-Bears-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607046202",
    title: "Nike SB Dunk Low Grateful Dead Bears Opti Yellow",
    averageDeadstockPrice: 886,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-SB-High-Gundam-Black-Thunder-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1636482379",
    title: "Nike SB Dunk High RX-0 Unicorn Gundam 02 Banshee",
    averageDeadstockPrice: 295,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Hawaii-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1619204997",
    title: "Nike SB Dunk High Hawaii",
    averageDeadstockPrice: 256,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Supreme-By-Any-Means-Brazil-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646753643",
    title: "Nike SB Dunk High Supreme By Any Means Brazil",
    averageDeadstockPrice: 338,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Club-58-Gulf-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1612295293",
    title: "Nike SB Dunk Low Club 58 Gulf",
    averageDeadstockPrice: 334,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Medium-Grey-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642071348",
    title: "Nike SB Dunk High Pro Medium Grey Pink",
    averageDeadstockPrice: 190,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Ben-Jerrys-Chunky-Dunky-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607043246",
    title: "Nike SB Dunk Low Ben & Jerry's Chunky Dunky",
    averageDeadstockPrice: 1505,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-750-Glow-In-The-Dark.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606318757",
    title: "adidas Yeezy Boost 750 Light Grey Glow In the Dark",
    averageDeadstockPrice: 1261,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-750-Light-Brown-Gum.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323332",
    title: "adidas Yeezy Boost 750 Light Brown Gum (Chocolate)",
    averageDeadstockPrice: 980,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-750-Triple-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607647824",
    title: "adidas Yeezy Boost 750 Triple Black",
    averageDeadstockPrice: 1127,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-750-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322764",
    title: "adidas Yeezy Boost 750 OG Light Brown",
    averageDeadstockPrice: 2022,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628533740",
    title: "adidas Yeezy Boost 700 Wave Runner Solid Grey",
    averageDeadstockPrice: 399,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Hi-Red-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655732626",
    title: "adidas Yeezy Boost 700 Hi-Res Red",
    averageDeadstockPrice: 326,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Static-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1625589442",
    title: "adidas Yeezy Boost 700 V2 Static (2018/2022)",
    averageDeadstockPrice: 338,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Geode-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650653021",
    title: "adidas Yeezy Boost 700 MNVN Geode",
    averageDeadstockPrice: 199,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Wash-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634920522",
    title: "adidas Yeezy Boost 700 Wash Orange",
    averageDeadstockPrice: 281,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Faded-Azure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653399282",
    title: "adidas Yeezy Boost 700 Faded Azure",
    averageDeadstockPrice: 277,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Bright-Cyan-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1622142758",
    title: "adidas Yeezy Boost 700 MNVN Bright Cyan",
    averageDeadstockPrice: 243,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Resin-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644222322",
    title: "adidas Yeezy Boost 700 MNVN Resin",
    averageDeadstockPrice: 183,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Enflame-Amber-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624459946",
    title: "adidas Yeezy Boost 700 Enflame Amber",
    averageDeadstockPrice: 311,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Blue-Tint-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626289128",
    title: "adidas Yeezy Boost 700 MNVN Blue Tint",
    averageDeadstockPrice: 245,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Triple-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320665",
    title: "adidas Yeezy Boost 700 MNVN Triple Black",
    averageDeadstockPrice: 270,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Bright-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1618932100",
    title: "adidas Yeezy Boost 700 Bright Blue",
    averageDeadstockPrice: 315,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Laceless-Phosphor-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656420694",
    title: "adidas Yeezy Boost 700 MNVN Laceless Phosphor",
    averageDeadstockPrice: 194,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Metallic-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641327728",
    title: "adidas Yeezy Boost 700 MNVN Metallic",
    averageDeadstockPrice: 231,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Honey-Flux-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632508001",
    title: "adidas Yeezy Boost 700 MNVN Honey Flux",
    averageDeadstockPrice: 218,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Cream-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1616519675",
    title: "adidas Yeezy Boost 700 V2 Cream",
    averageDeadstockPrice: 355,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633110151",
    title: "adidas Yeezy Boost 700 V2 Mauve",
    averageDeadstockPrice: 306,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613669342",
    title: "adidas Yeezy Boost 700 Mauve",
    averageDeadstockPrice: 414,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Analog-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322253",
    title: "adidas Yeezy Boost 700 Analog",
    averageDeadstockPrice: 451,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V2-Tephra-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606321264",
    title: "adidas Yeezy Boost 700 V2 Tephra",
    averageDeadstockPrice: 453,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Inertia-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323708",
    title: "adidas Yeezy Boost 700 Inertia",
    averageDeadstockPrice: 487,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-700-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606318741",
    title: "adidas Yeezy Boost 700 Salt",
    averageDeadstockPrice: 375,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Carbon-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654775939",
    title: "adidas Yeezy Boost 700 Carbon Blue",
    averageDeadstockPrice: 535,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Phosphor-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609437927",
    title: "adidas Yeezy Boost 700 MNVN Phosphor (Kids)",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Utility-Black_01.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606319009",
    title: "adidas Yeezy Boost 700 Utility Black",
    averageDeadstockPrice: 451,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V2-Vanta_01.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323012",
    title: "adidas Yeezy Boost 700 V2 Vanta",
    averageDeadstockPrice: 556,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Phosphor-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651780896",
    title: "adidas Yeezy Boost 700 MNVN Phosphor",
    averageDeadstockPrice: 294,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V2-Inertia-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607650532",
    title: "adidas Yeezy Boost 700 V2 Inertia",
    averageDeadstockPrice: 472,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Sun-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1612282094",
    title: "adidas Yeezy Boost 700 Sun",
    averageDeadstockPrice: 442,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V2-Hospital-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323679",
    title: "adidas Yeezy Boost 700 V2 Hospital Blue",
    averageDeadstockPrice: 474,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606324203",
    title: "adidas Yeezy Boost 700 MNVN Bone",
    averageDeadstockPrice: 345,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Wave-Runner-Solid-Grey-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651518803",
    title: "adidas Yeezy Boost 700 Wave Runner Solid Grey (Kids)",
    averageDeadstockPrice: 338,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Magnet-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606324226",
    title: "adidas Yeezy Boost 700 Magnet",
    averageDeadstockPrice: 561,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1608522531",
    title: "adidas Yeezy Boost 700 MNVN Orange",
    averageDeadstockPrice: 452,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Wave-Runner-Solid-Grey-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649864988",
    title: "adidas Yeezy Boost 700 Wave Runner Solid Grey (Infant)",
    averageDeadstockPrice: 345,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Stage-Haze-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653035159",
    title: "Jordan 1 Retro High OG Bleached Coral",
    averageDeadstockPrice: 218,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633542046",
    title: "Jordan 1 Retro High OG Patent Bred",
    averageDeadstockPrice: 325,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Stage-Haze-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652346288",
    title: "Jordan 1 Retro High OG Bleached Coral (GS)",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Heritage-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649081695",
    title: "Jordan 1 Retro High OG Heritage",
    averageDeadstockPrice: 188,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Dark-Marina-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642023273",
    title: "Jordan 1 Retro High OG Dark Marina Blue",
    averageDeadstockPrice: 209,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Rebellionaire-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646841923",
    title: "Jordan 1 Retro High OG Rebellionaire",
    averageDeadstockPrice: 266,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Brotherhood-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645431855",
    title: "Jordan 1 Retro High OG Brotherhood",
    averageDeadstockPrice: 191,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Atmosphere-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637087111",
    title: "Jordan 1 Retro High OG Atmosphere (W)",
    averageDeadstockPrice: 257,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611777406",
    title: "Jordan 1 Retro High White University Blue Black",
    averageDeadstockPrice: 423,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-OG-Newstalgia-Chenille-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657547104",
    title: "Jordan 1 Retro High OG Varsity Red (W)",
    averageDeadstockPrice: 200,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Visionaire-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655385644",
    title: "Jordan 1 Retro High OG Visionaire",
    averageDeadstockPrice: 184,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Pollen-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626802470",
    title: "Jordan 1 Retro High Pollen",
    averageDeadstockPrice: 217,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dark-Mocha-2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1616187367",
    title: "Jordan 1 Retro High Dark Mocha",
    averageDeadstockPrice: 524,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-Element-Gore-Tex-Light-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638980987",
    title: "Jordan 1 High Element Gore-Tex Light Bone",
    averageDeadstockPrice: 251,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638996968",
    title: "Jordan 1 Retro High OG Patent Bred (GS)",
    averageDeadstockPrice: 270,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-A-Ma-Maniere-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638286909",
    title: "Jordan 1 Retro High OG A Ma Mani�re",
    averageDeadstockPrice: 392,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1618238995",
    title: "Jordan 1 Retro High OG Hyper Royal",
    averageDeadstockPrice: 390,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bordeaux-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637086945",
    title: "Jordan 1 Retro High OG Bordeaux",
    averageDeadstockPrice: 207,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Hand-Crafted-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644572973",
    title: "Jordan 1 Retro High OG Hand Crafted",
    averageDeadstockPrice: 203,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-White-Light-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1621454319",
    title: "Jordan 1 Retro High Shadow 2.0",
    averageDeadstockPrice: 273,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Heritage-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654798952",
    title: "Jordan 1 Retro High OG Heritage (GS)",
    averageDeadstockPrice: 122,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Court-Purple-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606321166",
    title: "Jordan 1 Retro High Court Purple White",
    averageDeadstockPrice: 327,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-OG-Pro-White-Blue-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023637",
    title: "Jordan 1 Retro High OG Prototype ",
    averageDeadstockPrice: 207,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-Game-Royal-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322574",
    title: "Jordan 1 Retro High Royal Toe",
    averageDeadstockPrice: 312,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-Element-Gore-Tex-Light-Curry-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649427343",
    title: "Jordan 1 High Element Gore-Tex Light Curry",
    averageDeadstockPrice: 199,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Electro-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626802469",
    title: "Jordan 1 Retro High Electro Orange",
    averageDeadstockPrice: 214,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Dark-Marina-Blue-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653594952",
    title: "Jordan 1 Retro High OG Dark Marina Blue (GS)",
    averageDeadstockPrice: 150,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Zoom-CMFT-Easter-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1621454185",
    title: "Jordan 1 High Zoom Air CMFT Easter (W)",
    averageDeadstockPrice: 197,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322077",
    title: "Jordan 1 Retro High Obsidian UNC",
    averageDeadstockPrice: 495,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Silver-Toe-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611952888",
    title: "Jordan 1 Retro High Silver Toe (W)",
    averageDeadstockPrice: 220,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-OG-Seafoam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1627324677",
    title: "Jordan 1 Retro High OG Seafoam (W)",
    averageDeadstockPrice: 255,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Lucky-Green-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606761742",
    title: "Jordan 1 Retro High Lucky Green (W)",
    averageDeadstockPrice: 313,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-Black-Volt-University-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611079703",
    title: "Jordan 1 Retro High White Black Volt University Gold",
    averageDeadstockPrice: 186,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Georgetown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646752871",
    title: "Jordan 1 Retro High 85 Georgetown",
    averageDeadstockPrice: 383,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-Zoom-Air-CMFT-Patent-Chicago-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649688070",
    title: "Jordan 1 High Zoom Air CMFT Patent Chicago (W)",
    averageDeadstockPrice: 180,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Light-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320039",
    title: "Jordan 1 Retro High Light Smoke Grey",
    averageDeadstockPrice: 298,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-White-University-Blue-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1612902623",
    title: "Jordan 1 Retro High White University Blue Black (GS)",
    averageDeadstockPrice: 366,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bio-Hack-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606318464",
    title: "Jordan 1 Retro High Tokyo Bio Hack",
    averageDeadstockPrice: 273,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-1-High-Zoom-Air-CMFT-Pumpkin-Spice-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642148576",
    title: "Jordan 1 High Zoom Air CMFT Pumpkin Spice",
    averageDeadstockPrice: 162,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652711257",
    title: "Jordan 4 Retro Military Black",
    averageDeadstockPrice: 332,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Infrared-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645637225",
    title: "Jordan 4 Retro Infrared",
    averageDeadstockPrice: 254,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401817",
    title: "Jordan 4 Retro Military Black (GS)",
    averageDeadstockPrice: 230,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Infrared-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646935173",
    title: "Jordan 4 Retro Infrared (GS)",
    averageDeadstockPrice: 181,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641394023",
    title: "Jordan 4 Retro Red Thunder",
    averageDeadstockPrice: 335,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Lightning-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023947",
    title: "Jordan 4 Retro Lightning (2021)",
    averageDeadstockPrice: 285,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Zen-Master-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655732734",
    title: "Jordan 4 Retro Zen Master",
    averageDeadstockPrice: 246,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Canvas-Sail-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651856437",
    title: "Jordan 4 Retro Blank Canvas (W)",
    averageDeadstockPrice: 265,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1616520672",
    title: "Jordan 4 Retro University Blue",
    averageDeadstockPrice: 422,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654264283",
    title: "Jordan 4 Retro Military Black (PS)",
    averageDeadstockPrice: 92,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641935707",
    title: "Jordan 4 Retro Red Thunder (GS)",
    averageDeadstockPrice: 243,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1620919867",
    title: "Jordan 4 Retro White Oreo (2021)",
    averageDeadstockPrice: 394,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Fire-Red-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606762588",
    title: "Jordan 4 Retro Fire Red (2020)",
    averageDeadstockPrice: 372,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Lightning-2021-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629383880",
    title: "Jordan 4 Retro Lightning (2021) (GS)",
    averageDeadstockPrice: 185,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Shimmer-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023973",
    title: "Jordan 4 Retro Shimmer (W)",
    averageDeadstockPrice: 297,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cement-2019-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606316608",
    title: "Jordan 4 Retro Bred (2019)",
    averageDeadstockPrice: 554,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Infrared-PS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647589415",
    title: "Jordan 4 Retro Infrared (PS)",
    averageDeadstockPrice: 92,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1623166171",
    title: "Jordan 4 Retro White Oreo (2021) (GS)",
    averageDeadstockPrice: 297,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Taupe-Haze-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611952467",
    title: "Jordan 4 Retro Taupe Haze",
    averageDeadstockPrice: 414,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Starfish-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611766779",
    title: "Jordan 4 Retro Starfish (W)",
    averageDeadstockPrice: 218,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Fire-Red-2020-GS.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1605647348",
    title: "Jordan 4 Retro Fire Red (2020) (GS)",
    averageDeadstockPrice: 294,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1620059090",
    title: "Jordan 4 Retro University Blue (GS)",
    averageDeadstockPrice: 267,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-TD-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657543944",
    title: "Jordan 4 Retro Military Black (TD)",
    averageDeadstockPrice: 76,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643276961",
    title: "Jordan 4 Retro Red Thunder (PS)",
    averageDeadstockPrice: 97,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Union-Off-Noir-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609356937",
    title: "Jordan 4 Retro Union Off Noir",
    averageDeadstockPrice: 765,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606315877",
    title: "Jordan 4 Retro Black Cat (2020)",
    averageDeadstockPrice: 779,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-What-The.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606317976",
    title: "Jordan 4 Retro What The",
    averageDeadstockPrice: 421,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Where-the-Wild-Things-Are-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1636482064",
    title: "Jordan 4 Retro Where the Wild Things Are (GS)",
    averageDeadstockPrice: 204,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Taupe-Haze-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1615908028",
    title: "Jordan 4 Retro Taupe Haze (GS)",
    averageDeadstockPrice: 279,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-SE-Deep-Ocean-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609439370",
    title: "Jordan 4 Retro SE Sashiko",
    averageDeadstockPrice: 321,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-SP-30th-Anniversary-Union-Desert-Moss-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1625756682",
    title: "Jordan 4 Retro SP 30th Anniversary Union Desert Moss",
    averageDeadstockPrice: 412,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628003409",
    title: "Jordan 4 Retro University Blue (PS)",
    averageDeadstockPrice: 117,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Union-Guava-Ice-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609356818",
    title: "Jordan 4 Retro Union Guava Ice",
    averageDeadstockPrice: 820,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack-Reg-Backshot.jpeg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606317916",
    title: "Jordan 4 Retro Travis Scott Cactus Jack",
    averageDeadstockPrice: 1087,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Golf-Bred-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641305676",
    title: "Jordan 4 Retro Golf Bred",
    averageDeadstockPrice: 274,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Lightning-2021-TD-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643886176",
    title: "Jordan 4 Retro Lightning (2021) (TD)",
    averageDeadstockPrice: 82,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-Lightning-2021-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1630617118",
    title: "Jordan 4 Retro Lightning (2021) (PS)",
    averageDeadstockPrice: 90,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607050018",
    title: "Jordan 4 Retro PSG Paris Saint-Germain",
    averageDeadstockPrice: 416,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Jordan-4-Retro-White-Cement-2016-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607657507",
    title: "Jordan 4 Retro White Cement (2016)",
    averageDeadstockPrice: 598,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Jackie-Robinson.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649445192",
    title: "Nike Dunk Low Jackie Robinson",
    averageDeadstockPrice: 465,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027409",
    title: "Nike Dunk Low Retro White Black Panda (2021)",
    averageDeadstockPrice: 250,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611766850",
    title: "Nike Dunk Low White Black (2021) (W)",
    averageDeadstockPrice: 229,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613360456",
    title: "Nike Dunk Low Retro White Black (GS)",
    averageDeadstockPrice: 202,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Chlorophyll-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653041272",
    title: "Nike Dunk Low Chlorophyll",
    averageDeadstockPrice: 144,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Valerian-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652712361",
    title: "Nike Dunk Low Valerian Blue",
    averageDeadstockPrice: 176,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Coconut-Milk-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651696484",
    title: "Nike Dunk Low Coconut Milk",
    averageDeadstockPrice: 165,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Judge-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656661997",
    title: "Nike Dunk Low Judge Grey",
    averageDeadstockPrice: 152,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Rose-Whisper-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654997",
    title: "Nike Dunk Low Rose Whisper (W)",
    averageDeadstockPrice: 170,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Reverse-Panda-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657781952",
    title: "Nike Dunk Low Reverse Panda",
    averageDeadstockPrice: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Jackie-Robinson-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651314154",
    title: "Nike Dunk Low Jackie Robinson (GS)",
    averageDeadstockPrice: 181,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Los-Angeles-Dodgers-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657285119",
    title: "Nike SB Dunk Low Los Angeles Dodgers",
    averageDeadstockPrice: 234,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654800213",
    title: "Nike Dunk Low Black White (2022)",
    averageDeadstockPrice: 127,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-World-Champs-Black-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655494428",
    title: "Nike Dunk Low World Champs Black White",
    averageDeadstockPrice: 166,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Team-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648821059",
    title: "Nike Dunk Low Team Red (2022)",
    averageDeadstockPrice: 183,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Racer-Blue-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654154937",
    title: "Nike Dunk Low Racer Blue White",
    averageDeadstockPrice: 147,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Safari-Mix-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650480982",
    title: "Nike Dunk Low Safari Mix (W)",
    averageDeadstockPrice: 145,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-EMB-NBA-75th-Anniversary-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635520438",
    title: "Nike Dunk Low EMB NBA 75th Anniversary Chicago",
    averageDeadstockPrice: 199,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Triple-Pink-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656008497",
    title: "Nike Dunk Low Triple Pink (GS)",
    averageDeadstockPrice: 192,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Court-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648131848",
    title: "Nike Dunk Low Championship Court Purple",
    averageDeadstockPrice: 206,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Light-Violet-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644492693",
    title: "Nike Dunk Low Venice (W)",
    averageDeadstockPrice: 193,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Valour-Blue-Team-Maroon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654859404",
    title: "Nike SB Dunk Low Philadelphia Phillies",
    averageDeadstockPrice: 209,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Next-Nature-White-Mint-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654943",
    title: "Nike Dunk Low Next Nature White Mint (W)",
    averageDeadstockPrice: 157,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-PS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624468188",
    title: "Nike Dunk Low Retro White Black (PS)",
    averageDeadstockPrice: 100,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Sun-Club-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656520314",
    title: "Nike Dunk Low Next Nature Sun Club Arctic Orange",
    averageDeadstockPrice: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Two-Toned-Grey-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649690607",
    title: "Nike Dunk Low Two-Toned Grey (GS)",
    averageDeadstockPrice: 137,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Essential-Paisley-Pack-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651513357",
    title: "Nike Dunk Low Essential Paisley Pack Orange (W)",
    averageDeadstockPrice: 182,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Chlorophyll-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652712336",
    title: "Nike Dunk Low Chlorophyll (GS)",
    averageDeadstockPrice: 129,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Midas-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1636482253",
    title: "Nike Dunk Low Midas Gold",
    averageDeadstockPrice: 157,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Premium-Vast-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642765088",
    title: "Nike Dunk Low Premium Vast Grey",
    averageDeadstockPrice: 182,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Barbershop-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651610541",
    title: "Nike Dunk Low SE Barber Shop Grey",
    averageDeadstockPrice: 150,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-White-Turquoise-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649663817",
    title: "Nike Dunk Low Teal Zeal (W)",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Snakeskin-Washed-Teal-Bleached-Coral.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657828471",
    title: "Nike Dunk Low Snakeskin Washed Teal Bleached Coral",
    averageDeadstockPrice: 166,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-St-Patricks-Day-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401220",
    title: "Nike SB Dunk Low Pro St. Patrick's Day (2022)",
    averageDeadstockPrice: 218,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Pro-Bart-Simpson-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650655298",
    title: "Nike SB Dunk Low Pro Bart Simpson",
    averageDeadstockPrice: 259,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Grey-Fog-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632232056",
    title: "Nike Dunk Low Grey Fog",
    averageDeadstockPrice: 282,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Dark-Marina-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644311937",
    title: "Nike Dunk Low Dark Marina Blue",
    averageDeadstockPrice: 174,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Two-Tone-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646168372",
    title: "Nike Dunk Low Two Tone Grey",
    averageDeadstockPrice: 204,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Next-Nature-White-Light-Orewood-Brown-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652120974",
    title: "Nike Dunk Low Next Nature White Light Orewood Brown (W)",
    averageDeadstockPrice: 203,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Olive-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657284651",
    title: "New Balance 550 Aime Leon Dore Olive",
    averageDeadstockPrice: 288,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Cream-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651781130",
    title: "New Balance 550 Cream Black",
    averageDeadstockPrice: 186,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613670436",
    title: "New Balance 550 White Grey",
    averageDeadstockPrice: 167,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628002321",
    title: "New Balance 550 White Green",
    averageDeadstockPrice: 238,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Au-Lait-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649865272",
    title: "New Balance 550 Au Lait (W)",
    averageDeadstockPrice: 178,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Mint-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651519339",
    title: "New Balance 550 White Mint Green",
    averageDeadstockPrice: 191,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Grey-Dark-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654154068",
    title: "New Balance 550 White Grey Dark Grey",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Burgundy-Cyan-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642152924",
    title: "New Balance 550 Burgundy Cyan",
    averageDeadstockPrice: 149,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1630617711",
    title: "New Balance 550 White Red",
    averageDeadstockPrice: 160,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Silver-Birch-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655385965",
    title: "New Balance 550 Silver Birch (W)",
    averageDeadstockPrice: 149,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638903675",
    title: "New Balance 550 White Black",
    averageDeadstockPrice: 174,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-UNC-White-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638903675",
    title: "New Balance 550 UNC White University Blue",
    averageDeadstockPrice: 205,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657781487",
    title: "New Balance 550 Aime Leon Dore Brown",
    averageDeadstockPrice: 317,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Shadow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613412534",
    title: "New Balance 550 Shadow",
    averageDeadstockPrice: 133,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Pink-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649427804",
    title: "New Balance 550 White Pink (W)",
    averageDeadstockPrice: 192,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Purple.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655833636",
    title: "New Balance 550 Aime Leon Dore Purple",
    averageDeadstockPrice: 239,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Sea-Salt-Yellow.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656058829",
    title: "New Balance 550 Sea Salt Yellow",
    averageDeadstockPrice: 141,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613669984",
    title: "New Balance 550 White Blue",
    averageDeadstockPrice: 162,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Vibrant-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657606123",
    title: "New Balance 550 White Vibrant Orange",
    averageDeadstockPrice: 149,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Green-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632509901",
    title: "New Balance 550 White Green Black",
    averageDeadstockPrice: 175,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Syracuse-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638903223",
    title: "New Balance 550 Syracuse",
    averageDeadstockPrice: 142,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Red-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642148870",
    title: "New Balance 550 White Red Black",
    averageDeadstockPrice: 135,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Sea-Salt-Burgundy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1621453389",
    title: "New Balance 550 Sea Salt Burgundy",
    averageDeadstockPrice: 199,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606765288",
    title: "New Balance 550 Aime Leon Dore White Green",
    averageDeadstockPrice: 302,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Grey-1.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607668787",
    title: "New Balance 550 Aime Leon Dore White Grey",
    averageDeadstockPrice: 307,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Sea-Salt-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1620920469",
    title: "New Balance 550 Sea Salt Black",
    averageDeadstockPrice: 231,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Conversations-Amongst-Us-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651513334",
    title: "New Balance 550 Joe Freshgoods Conversations Amongst Us",
    averageDeadstockPrice: 251,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Summer-Fog-Dusk-Blue-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655988869",
    title: "New Balance 550 Summer Fog Dusk Blue (W)",
    averageDeadstockPrice: 169,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Royal-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638997047",
    title: "New Balance 550 White Royal Black",
    averageDeadstockPrice: 136,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Burgundy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649274426",
    title: "New Balance 550 White Burgundy",
    averageDeadstockPrice: 183,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Black-Cream-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656593548",
    title: "New Balance 550 Panda",
    averageDeadstockPrice: 134,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Navy-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628002353",
    title: "New Balance 550 Navy Blue",
    averageDeadstockPrice: 189,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Purple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628002291",
    title: "New Balance 550 White Purple",
    averageDeadstockPrice: 187,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-United-Arrows-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644573302",
    title: "New Balance 550 United Arrows",
    averageDeadstockPrice: 244,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-White-Dark-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649427783",
    title: "New Balance 550 White Dark Green",
    averageDeadstockPrice: 173,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Triple-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643887400",
    title: "New Balance 550 Triple Black",
    averageDeadstockPrice: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Sea-Salt-Varsity-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649081859",
    title: "New Balance 550 Sea Salt Varsity Gold",
    averageDeadstockPrice: 195,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-White-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648065836",
    title: "New Balance 550 Aime Leon Dore White Navy",
    averageDeadstockPrice: 289,
    }, {
    imageUrl: "https://images.stockx.com/images/New-Balance-550-Aime-Leon-Dore-Natural-Green.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1618101176",
    title: "New Balance 550 Aime Leon Dore Natural Green",
    averageDeadstockPrice: 469,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646687426",
    title: "adidas Yeezy Slide Onyx",
    averageDeadstockPrice: 169,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Restock-Pair-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639593302",
    title: "adidas Yeezy Slide Pure (Restock Pair)",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653034864",
    title: "adidas Yeezy Slide Glow Green (2022) (Restock)",
    averageDeadstockPrice: 104,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Ochre-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638805392",
    title: "adidas Yeezy Slide Ochre",
    averageDeadstockPrice: 131,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Bone-2022.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655925431",
    title: "adidas Yeezy Slide Bone (2022 Restock)",
    averageDeadstockPrice: 189,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Onyx-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647613918",
    title: "adidas Yeezy Slide Onyx (Kids)",
    averageDeadstockPrice: 86,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642073908",
    title: "adidas Yeezy Slide Pure (First Release)",
    averageDeadstockPrice: 206,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023465",
    title: "adidas Yeezy Slide Glow Green",
    averageDeadstockPrice: 148,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624455953",
    title: "adidas Yeezy Slide Enflame Orange",
    averageDeadstockPrice: 204,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Resin-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1620049388",
    title: "adidas Yeezy Slide Resin",
    averageDeadstockPrice: 182,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Restock-Pair-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648661259",
    title: "adidas Yeezy Slide Pure (Restock Pair) (Infants)",
    averageDeadstockPrice: 67,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Restock-Pair-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655474830",
    title: "adidas Yeezy Slide Pure (Restock Pair) (Kids)",
    averageDeadstockPrice: 85,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Soot-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632510746",
    title: "adidas Yeezy Slide Soot",
    averageDeadstockPrice: 182,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Onyx-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647613892",
    title: "adidas Yeezy Slide Onyx (Infants)",
    averageDeadstockPrice: 66,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-2022-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654217544",
    title: "adidas Yeezy Slide Glow Green (2022) (Kids)",
    averageDeadstockPrice: 66,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Ochre-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638534341",
    title: "adidas Yeezy Slide Ochre (Kids)",
    averageDeadstockPrice: 84,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1608522495",
    title: "adidas Yeezy Slide Bone",
    averageDeadstockPrice: 417,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-2022-Infants.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654217513",
    title: "adidas Yeezy Slide Glow Green (2022) (Infants)",
    averageDeadstockPrice: 50,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Earth-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607046263",
    title: "adidas Yeezy Slide Earth Brown",
    averageDeadstockPrice: 277,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Ochre-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641565552",
    title: "adidas Yeezy Slide Ochre (Infants)",
    averageDeadstockPrice: 61,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Bone-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655386580",
    title: "adidas Yeezy Slide Bone (Kids)",
    averageDeadstockPrice: 184,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Resin-Kids.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614569784",
    title: "adidas Yeezy Slide Resin (Kids)",
    averageDeadstockPrice: 162,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Core-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607669210",
    title: "adidas Yeezy Slide Core",
    averageDeadstockPrice: 262,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653034907",
    title: "adidas Yeezy Slide Glow Green (Infants)",
    averageDeadstockPrice: 65,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Desert-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1608521988",
    title: "adidas Yeezy Slide Desert Sand",
    averageDeadstockPrice: 393,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633620913",
    title: "adidas Yeezy Slide Glow Green (Kids)",
    averageDeadstockPrice: 93,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Bone-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614569841",
    title: "adidas Yeezy Slide Bone (Infants)",
    averageDeadstockPrice: 156,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Enflame-Orange-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629130636",
    title: "adidas Yeezy Slide Enflame Orange (Kids)",
    averageDeadstockPrice: 189,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Enflame-Orange-Infants.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624243766",
    title: "adidas Yeezy Slide Enflame Orange (Infants)",
    averageDeadstockPrice: 127,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Pure-Infants.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1619761580",
    title: "adidas Yeezy Slide Pure (Infants)",
    averageDeadstockPrice: 156,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Pure-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1619761583",
    title: "adidas Yeezy Slide Pure (Kids)",
    averageDeadstockPrice: 214,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Resin-Infants.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614569573",
    title: "adidas Yeezy Slide Resin (Infants)",
    averageDeadstockPrice: 141,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Earth-Brown-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613414632",
    title: "adidas Yeezy Slide Earth Brown (Kids)",
    averageDeadstockPrice: 258,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Supply-Nylon-Slipper-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609447245",
    title: "Yeezy Supply Neoprene Slipper Black",
    averageDeadstockPrice: 578,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Earth-Brown-Infants.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607052337",
    title: "adidas Yeezy Slide Earth Brown (Infants)",
    averageDeadstockPrice: 183,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Desert-Sand-Infants.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614569568",
    title: "adidas Yeezy Slide Desert Sand (Infants)",
    averageDeadstockPrice: 215,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Slide-Desert-Sand-Kids.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614568763",
    title: "adidas Yeezy Slide Desert Sand (Kids)",
    averageDeadstockPrice: 294,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Fleece-Slide-Season-7-Trench-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613498029",
    title: "Yeezy Fleece Slide Season 7 Trench",
    averageDeadstockPrice: 476,
    }, {
    imageUrl: "https://images.stockx.com/images/Yeezy-Supply-Nylon-Slipper-Graphite-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635272535",
    title: "Yeezy Supply Nylon Slipper Graphite",
    averageDeadstockPrice: 644,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631122839",
    title: "Nike Air Force 1 Low '07 White",
    averageDeadstockPrice: 115,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606164536",
    title: "Nike Air Force 1 Low Supreme White",
    averageDeadstockPrice: 173,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-07-Black-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607050715",
    title: "Nike Air Force 1 Low '07 Black Black",
    averageDeadstockPrice: 113,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Off-White-Black-Product-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655993157",
    title: "Nike Air Force 1 Mid Off-White Black",
    averageDeadstockPrice: 225,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606325289",
    title: "Nike Air Force 1 Low Supreme Black",
    averageDeadstockPrice: 167,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Off-White-White-Product-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655993120",
    title: "Nike Air Force 1 Mid Off-White White",
    averageDeadstockPrice: 222,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-White-2018-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607656514",
    title: "Nike Air Force 1 Low '07 White (W)",
    averageDeadstockPrice: 98,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-07-White-Black-Pebbled-Leather-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1620064850",
    title: "Nike Air Force 1 Low '07 White Black Pebbled Leather",
    averageDeadstockPrice: 114,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-QS-Purple-Skeleton-Halloween-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635780371",
    title: "Nike Air Force 1 Low '07 QS Purple Skeleton Halloween (2021)",
    averageDeadstockPrice: 174,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Stussy-Grey-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653036583",
    title: "Nike Air Force 1 Mid Stussy Light Bone Black",
    averageDeadstockPrice: 185,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Stussy-Fossil-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653036422",
    title: "Nike Air Force 1 Mid Stussy Fossil",
    averageDeadstockPrice: 148,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-White-Navy-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650654300",
    title: "Nike Air Force 1 Low White Navy Grey",
    averageDeadstockPrice: 146,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-LE-Triple-White-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626967317",
    title: "Nike Air Force 1 Low LE Triple White (GS)",
    averageDeadstockPrice: 76,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Carabiner-Swoosh-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647351584",
    title: "Nike Air Force 1 Low Carabiner Swoosh Red",
    averageDeadstockPrice: 147,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Athletic-Club-Marina-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644399276",
    title: "Nike Air Force 1 Low '07 LV8 Athletic Club Marina Blue",
    averageDeadstockPrice: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-LX-Lucky-Charms-White-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643281062",
    title: "Nike Air Force 1 Low LX White Pendant (W)",
    averageDeadstockPrice: 144,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-High-07-SP-Billie-Eilish-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651696133",
    title: "Nike Air Force 1 High '07 SP Billie Eilish Mushroom",
    averageDeadstockPrice: 176,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-Essential-White-Black-Paisley-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647268385",
    title: "Nike Air Force 1 Low '07 Essential White Black Paisley (W)",
    averageDeadstockPrice: 128,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-White-Gum-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646687729",
    title: "Nike Air Force 1 Low White Gum",
    averageDeadstockPrice: 117,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Flax-2019-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607056265",
    title: "Nike Air Force 1 Low Flax (2019/2022)",
    averageDeadstockPrice: 143,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Shadow-Triple-White-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607656583",
    title: "Nike Air Force 1 Shadow Triple White (W)",
    averageDeadstockPrice: 103,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Flax-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1637088094",
    title: "Nike Air Force 1 Low SP Supreme Wheat",
    averageDeadstockPrice: 202,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Craft-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606765910",
    title: "Nike Air Force 1 Craft White",
    averageDeadstockPrice: 116,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Triple-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607668936",
    title: "Nike Air Force 1 Low Triple Red",
    averageDeadstockPrice: 123,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Shadow-Amethyst-Ash-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643887878",
    title: "Nike Air Force 1 Low Shadow Amethyst Ash (W)",
    averageDeadstockPrice: 137,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-LX-UV-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646843289",
    title: "Nike Air Force 1 Low LX UV Reactive (W)",
    averageDeadstockPrice: 171,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-Stussy-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653399715",
    title: "Nike Air Force 1 Mid Stussy Black White",
    averageDeadstockPrice: 121,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-Essential-White-Green-Paisley-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654799359",
    title: "Nike Air Force 1 Low '07 Essential White Green Paisley (W)",
    averageDeadstockPrice: 120,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-VD-Valentines-Day-2022-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644573629",
    title: "Nike Air Force 1 Low VD Valentine's Day (2022) (W)",
    averageDeadstockPrice: 157,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Shadow-White-Magic-Ember-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648049872",
    title: "Nike Air Force 1 Low Shadow White Magic Ember (W)",
    averageDeadstockPrice: 106,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-07-Flax-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642059508",
    title: "Nike Air Force 1 Mid '07 Flax (2022)",
    averageDeadstockPrice: 135,
    }, {
    imageUrl: "https://images.stockx.com/images/Air-Force-1-Low-07-QS-Uno-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654798952",
    title: "Nike Air Force 1 Low '07 QS Uno",
    averageDeadstockPrice: 134,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Hare-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626804596",
    title: "Nike Air Force 1 Low Hare Space Jam",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-Essential-White-Worn-Blue-Paisley-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1642764266",
    title: "Nike Air Force 1 Low '07 Essential White Worn Blue Paisley (W)",
    averageDeadstockPrice: 124,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-White-Black-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644573629",
    title: "Nike Air Force 1 Low '07 White Black (2022)",
    averageDeadstockPrice: 138,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-White-Pine-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654799359",
    title: "Nike Air Force 1 Low '07 White Pine Green",
    averageDeadstockPrice: 116,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Shadow-White-Atmosphere-Mint-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650981688",
    title: "Nike Air Force 1 Low Shadow White Atmosphere Mint Foam (W)",
    averageDeadstockPrice: 125,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-QS-Chocolate-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655733124",
    title: "Nike Air Force 1 Mid QS Chocolate",
    averageDeadstockPrice: 110,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Air-Force-1-Mid-White-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1607058128",
    title: "Nike Air Force 1 Mid White '07",
    averageDeadstockPrice: 117,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645037142",
    title: "Nike Dunk High Black White (2021)",
    averageDeadstockPrice: 174,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Panda-2021-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638807175",
    title: "Nike Dunk High Panda (2021) (W)",
    averageDeadstockPrice: 166,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Pink-Prime-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641573308",
    title: "Nike Dunk High Pink Prime (W)",
    averageDeadstockPrice: 157,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Retro-Laser-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652120946",
    title: "Nike Dunk High Retro Laser Blue",
    averageDeadstockPrice: 171,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-University-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645116295",
    title: "Nike Dunk High Championship White Red",
    averageDeadstockPrice: 153,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Washed-Denim-Pack-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650914344",
    title: "Nike Dunk High Washed Denim Pack (W)",
    averageDeadstockPrice: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-I-Got-Next-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1658152776",
    title: "Nike Dunk High I Got Next",
    averageDeadstockPrice: 140,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Light-Chocolate-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633027334",
    title: "Nike Dunk High Light Chocolate",
    averageDeadstockPrice: 215,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-New-York-Mets-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654859103",
    title: "Nike SB Dunk High New York Mets",
    averageDeadstockPrice: 173,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Australia.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649663813",
    title: "Nike Dunk High Australia",
    averageDeadstockPrice: 145,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-San-Francisco-Giants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657782130",
    title: "Nike SB Dunk High San Francisco Giants",
    averageDeadstockPrice: 159,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Cargo-Khaki-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647011682",
    title: "Nike Dunk High Retro Cargo Khaki (2021)",
    averageDeadstockPrice: 143,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Next-Nature-Toasty-Rattan-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646233587",
    title: "Nike Dunk High Next Nature Toasty Rattan",
    averageDeadstockPrice: 148,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-University-Red-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645801979",
    title: "Nike Dunk High Championship White Red (GS)",
    averageDeadstockPrice: 123,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Pineapple-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654606600",
    title: "Nike SB Dunk High Pineapple",
    averageDeadstockPrice: 165,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Syracuse-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1616520900",
    title: "Nike Dunk High Syracuse (2021)",
    averageDeadstockPrice: 205,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Knicks.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1649877738",
    title: "Nike Dunk High Knicks",
    averageDeadstockPrice: 134,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Fossil-Stone-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656660695",
    title: "Nike Dunk High Fossil Stone (W)",
    averageDeadstockPrice: 123,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Lemon-Twist-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633114827",
    title: "Nike Dunk High Cashmere (W)",
    averageDeadstockPrice: 119,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Obsidian.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655283718",
    title: "Nike Dunk High Medium Blue Midnight Navy",
    averageDeadstockPrice: 113,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Syracuse-W-2021.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1614461623",
    title: "Nike Dunk High Syracuse (2021) (W)",
    averageDeadstockPrice: 215,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-University-Gold-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638807175",
    title: "Nike Dunk High University Gold (W)",
    averageDeadstockPrice: 136,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Court-Purple-Midnght-Navy-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644224382",
    title: "Nike Dunk High Electro Purple Midnght Navy (GS)",
    averageDeadstockPrice: 106,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Australia-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650983869",
    title: "Nike Dunk High Australia (GS)",
    averageDeadstockPrice: 119,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Cargo-Khaki-GS-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648503904",
    title: "Nike Dunk High Retro Cargo Khaki (GS)",
    averageDeadstockPrice: 122,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Pro-ISO-Kentucky-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647360118",
    title: "Nike SB Dunk High Pro ISO Kentucky",
    averageDeadstockPrice: 173,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Yellow-Acid-Wash-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1638552247",
    title: "Nike Dunk High 1985 SP Yellow Acid Wash",
    averageDeadstockPrice: 127,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-CLOT-Metallic-Silver.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647536797",
    title: "Nike Dunk High CLOT Flux",
    averageDeadstockPrice: 193,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Aluminum-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629131552",
    title: "Nike Dunk High Aluminum (W)",
    averageDeadstockPrice: 195,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-I-Got-Next-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654465658",
    title: "Nike Dunk High I Got Next (GS)",
    averageDeadstockPrice: 124,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Panda-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1627326500",
    title: "Nike Dunk High Panda (2021)",
    averageDeadstockPrice: 262,
    }, {
    imageUrl: "https://images.stockx.com/images/nike-dunk-high-fragment-design-bejing-2021-ps-main.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629212241",
    title: "Nike Dunk High Fragment Beijing (2021)",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-KCDC-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651844966",
    title: "Nike SB Dunk High Pro KCDC",
    averageDeadstockPrice: 184,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Midnight-Navy-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1631713258",
    title: "Nike Dunk High Championship Navy",
    averageDeadstockPrice: 168,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Strawberry-Cough-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635280495",
    title: "Nike SB Dunk High Strawberry Cough (Regular Box)",
    averageDeadstockPrice: 437,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Sail-Football-Grey-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1615920386",
    title: "Nike Dunk High Sail Football Grey (W)",
    averageDeadstockPrice: 190,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-SB-Dunk-High-Supreme-By-Any-Means-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646842575",
    title: "Nike SB Dunk High Supreme By Any Means Black",
    averageDeadstockPrice: 305,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Vintage-Black-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652464006",
    title: "Nike Dunk High Vintage Black (W)",
    averageDeadstockPrice: 179,
    }, {
    imageUrl: "https://images.stockx.com/images/Nike-Dunk-High-Vintage-Light-Bone.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1652351734",
    title: "Nike Dunk High Vintage Light Bone Grey",
    averageDeadstockPrice: 143,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628533740",
    title: "adidas Yeezy Boost 700 Wave Runner Solid Grey",
    averageDeadstockPrice: 399,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Hi-Red-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655732626",
    title: "adidas Yeezy Boost 700 Hi-Res Red",
    averageDeadstockPrice: 326,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Blue-Glow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1628537919",
    title: "adidas Yeezy 700 V3 Dark Glow",
    averageDeadstockPrice: 275,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Static-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1625589442",
    title: "adidas Yeezy Boost 700 V2 Static (2018/2022)",
    averageDeadstockPrice: 338,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Geode-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650653021",
    title: "adidas Yeezy Boost 700 MNVN Geode",
    averageDeadstockPrice: 199,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Mono-Safflower-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1648065369",
    title: "adidas Yeezy 700 V3 Mono Safflower",
    averageDeadstockPrice: 233,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Fade-Carbon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653401625",
    title: "adidas Yeezy 700 V3 Fade Carbon",
    averageDeadstockPrice: 229,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Wash-Orange-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1634920522",
    title: "adidas Yeezy Boost 700 Wash Orange",
    averageDeadstockPrice: 281,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Faded-Azure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653399282",
    title: "adidas Yeezy Boost 700 Faded Azure",
    averageDeadstockPrice: 277,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Arzareth-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323306",
    title: "adidas Yeezy 700 V3 Arzareth",
    averageDeadstockPrice: 332,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Bright-Cyan-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1622142758",
    title: "adidas Yeezy Boost 700 MNVN Bright Cyan",
    averageDeadstockPrice: 243,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Safflower-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609349683",
    title: "adidas Yeezy 700 V3 Safflower",
    averageDeadstockPrice: 262,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Resin-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1644222322",
    title: "adidas Yeezy Boost 700 MNVN Resin",
    averageDeadstockPrice: 183,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Kyanite-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1617895639",
    title: "adidas Yeezy 700 V3 Kyanite",
    averageDeadstockPrice: 269,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Clay-Brown-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611068897",
    title: "adidas Yeezy 700 V3 Clay Brown",
    averageDeadstockPrice: 262,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Enflame-Amber-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624459946",
    title: "adidas Yeezy Boost 700 Enflame Amber",
    averageDeadstockPrice: 311,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Blue-Tint-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1626289128",
    title: "adidas Yeezy Boost 700 MNVN Blue Tint",
    averageDeadstockPrice: 245,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Triple-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606320665",
    title: "adidas Yeezy Boost 700 MNVN Triple Black",
    averageDeadstockPrice: 270,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Bright-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1618932100",
    title: "adidas Yeezy Boost 700 Bright Blue",
    averageDeadstockPrice: 315,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Copper-Fade-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1645715922",
    title: "adidas Yeezy 700 V3 Copper Fade",
    averageDeadstockPrice: 207,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Laceless-Phosphor-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656420694",
    title: "adidas Yeezy Boost 700 MNVN Laceless Phosphor",
    averageDeadstockPrice: 194,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Metallic-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1641327728",
    title: "adidas Yeezy Boost 700 MNVN Metallic",
    averageDeadstockPrice: 231,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Honey-Flux-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1632508001",
    title: "adidas Yeezy Boost 700 MNVN Honey Flux",
    averageDeadstockPrice: 218,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V3-Alvah-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322175",
    title: "adidas Yeezy 700 V3 Alvah",
    averageDeadstockPrice: 361,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Cream-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1616519675",
    title: "adidas Yeezy Boost 700 V2 Cream",
    averageDeadstockPrice: 355,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V2-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633110151",
    title: "adidas Yeezy Boost 700 V2 Mauve",
    averageDeadstockPrice: 306,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-Mauve-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1613669342",
    title: "adidas Yeezy Boost 700 Mauve",
    averageDeadstockPrice: 414,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Analog-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606322253",
    title: "adidas Yeezy Boost 700 Analog",
    averageDeadstockPrice: 451,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Azael-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606319725",
    title: "adidas Yeezy 700 V3 Azael",
    averageDeadstockPrice: 662,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V2-Tephra-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606321264",
    title: "adidas Yeezy Boost 700 V2 Tephra",
    averageDeadstockPrice: 453,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Srphym-Kids.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609432383",
    title: "adidas Yeezy 700 V3 Safflower (Kids)",
    averageDeadstockPrice: 233,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Inertia-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323708",
    title: "adidas Yeezy Boost 700 Inertia",
    averageDeadstockPrice: 487,
    }, {
    imageUrl: "https://images.stockx.com/images/Adidas-Yeezy-Boost-700-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606318741",
    title: "adidas Yeezy Boost 700 Salt",
    averageDeadstockPrice: 375,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Carbon-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654775939",
    title: "adidas Yeezy Boost 700 Carbon Blue",
    averageDeadstockPrice: 535,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Phosphor-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609437927",
    title: "adidas Yeezy Boost 700 MNVN Phosphor (Kids)",
    averageDeadstockPrice: 161,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-700-V3-Safflower-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1611079148",
    title: "adidas Yeezy 700 V3 Safflower (Infants)",
    averageDeadstockPrice: 227,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-Utility-Black_01.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606319009",
    title: "adidas Yeezy Boost 700 Utility Black",
    averageDeadstockPrice: 451,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-V2-Vanta_01.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1606323012",
    title: "adidas Yeezy Boost 700 V2 Vanta",
    averageDeadstockPrice: 556,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Boost-700-MNVN-Phosphor-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1651780896",
    title: "adidas Yeezy Boost 700 MNVN Phosphor",
    averageDeadstockPrice: 294,
    }, {
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654264132",
    title: "adidas Yeezy Foam RNR Onyx",
    averageDeadstockPrice: 183,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Stone-Sage-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647445127",
    title: "adidas Yeezy Foam RNNR Stone Sage",
    averageDeadstockPrice: 186,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sulfur-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654153626",
    title: "adidas Yeezy Foam RNNR Sulfur",
    averageDeadstockPrice: 174,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNR-Desert-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655490868",
    title: "adidas Yeezy Foam RNR Desert Sand",
    averageDeadstockPrice: 177,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Ochre-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023377",
    title: "adidas Yeezy Foam RNNR Ochre",
    averageDeadstockPrice: 210,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635875119",
    title: "adidas Yeezy Foam RNNR Vermillion",
    averageDeadstockPrice: 225,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Sand-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639674166",
    title: "adidas Yeezy Foam RNNR MX Sand Grey",
    averageDeadstockPrice: 253,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Mist-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647545977",
    title: "adidas Yeezy Foam RNNR Mist",
    averageDeadstockPrice: 197,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655883210",
    title: "adidas Yeezy Foam RNR Onyx (Kids)",
    averageDeadstockPrice: 126,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1617991585",
    title: "adidas Yeezy Foam RNNR Sand",
    averageDeadstockPrice: 358,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Cream-Clay-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1643885439",
    title: "adidas Yeezy Foam RNNR MX Cream Clay",
    averageDeadstockPrice: 328,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Onyx-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1655882519",
    title: "adidas Yeezy Foam RNR Onyx (Infants)",
    averageDeadstockPrice: 98,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Mineral-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657284368",
    title: "adidas Yeezy Foam RNNR Mineral Blue",
    averageDeadstockPrice: 310,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MXT-Moon-Gray-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1617991583",
    title: "adidas Yeezy Foam RNNR MXT Moon Gray",
    averageDeadstockPrice: 383,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Stone-Sage-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1647546019",
    title: "adidas Yeezy Foam RNNR Stone Sage (Kids)",
    averageDeadstockPrice: 132,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Stone-Sage-Infants-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1650506511",
    title: "adidas Yeezy Foam RNNR Stone Sage (Infants)",
    averageDeadstockPrice: 111,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sulfur-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654858627",
    title: "adidas Yeezy Foam RNNR Sulfur (Infants)",
    averageDeadstockPrice: 113,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Cream-Clay-Infant-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1629210511",
    title: "adidas Yeezy Foam RNNR MX Cream Clay (Infants)",
    averageDeadstockPrice: 136,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNR-Desert-Sand-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654625401",
    title: "adidas Yeezy Foam RNR Desert Sand (Kids)",
    averageDeadstockPrice: 115,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1635447211",
    title: "adidas Yeezy Foam RNNR Vermillion (Kids)",
    averageDeadstockPrice: 143,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNR-Desert-Sand-Infants.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1654625401",
    title: "adidas Yeezy Foam RNR Desert Sand (Infants)",
    averageDeadstockPrice: 95,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sulfur-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657115938",
    title: "adidas Yeezy Foam RNNR Sulfur (Kids)",
    averageDeadstockPrice: 127,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Mist-Infants.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646983674",
    title: "adidas Yeezy Foam RNNR Mist (Infants)",
    averageDeadstockPrice: 142,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Cream-Clay-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1633023341",
    title: "adidas Yeezy Foam RNNR MX Cream Clay (Kids)",
    averageDeadstockPrice: 162,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Sand-Grey-Infants.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639460537",
    title: "adidas Yeezy Foam RNNR MX Sand Grey (Infants)",
    averageDeadstockPrice: 146,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Vermillion-Infants-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1636390809",
    title: "adidas Yeezy Foam RNNR Vermillion (Infants)",
    averageDeadstockPrice: 124,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Sand-Grey-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1639460537",
    title: "adidas Yeezy Foam RNNR MX Sand Grey (Kids)",
    averageDeadstockPrice: 167,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Mineral-Blue-Infant-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1623165280",
    title: "adidas Yeezy Foam RNNR Mineral Blue (Infants)",
    averageDeadstockPrice: 198,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Mist-Kids.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646983674",
    title: "adidas Yeezy Foam RNNR Mist (Kids)",
    averageDeadstockPrice: 156,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Ararat-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1609432715",
    title: "adidas Yeezy Foam RNNR Ararat",
    averageDeadstockPrice: 558,
    imageUrl: "https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Mineral-Blue-Kids-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1624459970",
    title: "adidas Yeezy Foam RNNR Mineral Blue (Kids)",
    averageDeadstockPrice: 242,
    }]
startGame()