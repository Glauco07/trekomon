const pokemon_number = Math.random() * (898 - 1) + 1;
const pokemon_url = `https://pokeapi.co/api/v2/pokemon/${pokemon_number}`;
const pokemon = fetch(pokemon_url);
let guess, nextLetter = 0, guessesRemaining = pokemon.name.length;

initBoard()

function colorBoard() {
    for (i in guess.length) {
        if (guess[i] == pokemon[i])
            continue
        // pinta de verde
        else if (guess[i] != pokemon[i] && pokemon.indexOf(guess[i]) < 0)
            continue
        // pinta de amarelo
        else
            continue
        //pinta de vermelho
        if (guess == pokemon.name)
            continue;
        //termina o jogo
    }
}

function initBoard() {
    let board = document.getElementById("game");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < pokemon.name.length; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

document.addEventListener("keyup", (e) => {
    let pressedKey = String(e.key)
    if (guessesRemaining === 0) 
        return
    
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }
    if (pressedKey === "Enter") {
        checkGuess()
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1)
        return
    else
        insertLetter(pressedKey);
})


function insertLetter(key) {
    if (nextLetter === pokemon.name.length)
        return;

        pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}