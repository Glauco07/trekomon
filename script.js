
let guessesRemaining = 0, nextLetter = 0, pokemon, pressedKey, currentGuess = [];
async function getPokemon() {
    const pokemon_number = Math.floor(Math.random() * (898 - 1) + 1);
    const pokemon_url = `https://pokeapi.co/api/v2/pokemon/${pokemon_number}`;
    const pokemon = await fetch(pokemon_url).then(response => response.json()).then(pokemon => (
        {
            name: pokemon.name,
            image: pokemon.sprites.other["official-artwork"]["front_default"]
        }
    ));
    console.log("name: " + pokemon.name + " n: " + pokemon.name.length);
    guessesRemaining = pokemon.name.length;
    initBoard(pokemon);
    return pokemon;
}

function colorBoard(pokemon) {
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

function initBoard(pokemon) {
    let board = document.getElementById("game");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < pokemon.name.length; j++) {
            let box = document.createElement("input")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

document.addEventListener("keyup", (e) => {
    pressedKey = String(e.key)
    if (guessesRemaining === 0) 
        return

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1)
        return
    else
        insertLetter(pressedKey);
})


function insertLetter(key) {
    if (nextLetter === pokemon.name.length)
        return;

    pressedKey = pressedKey.toLowerCase();

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let box = row.children[nextLetter]
    box.textContent = pressedKey;
    box.classList.add("filled-box");
    currentGuess.push(pressedKey);
    nextLetter += 1;
}


async function main() {
    pokemon = await getPokemon();
}

main()
