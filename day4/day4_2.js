const fs = require('fs');

let input = fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let lines = data.split('\n');
    let card_id = 1;

    // map of card_id to points
    let cards_map = new Map();

    for (let row of lines) {
        let matches = 0;

        if (cards_map[card_id] === undefined) {
            cards_map[card_id] = 1;
        } else {
            cards_map[card_id] += 1;
        }

        row = row.split('|');
        let colon_index = row[0].indexOf(':');

        // Ignoring the card number from string
        row[0] = row[0].substring(colon_index+2);

        let winning_numbers = row[0];
        let played_numbers = row[1];

        winning_numbers = winning_numbers.trim().split(/\s+/);
        played_numbers = played_numbers.trim().split(/\s+/);

        let multiplier = cards_map[card_id];

        for (let number of played_numbers) {
            if (winning_numbers.includes(number)) {
                matches++;
            }
        }

        card_id++;

        if (matches > 0) {
            for (let i = 0; i < matches; i++) {
                if (card_id+i > 212) {
                    continue;
                }
                if (cards_map[card_id+i] === undefined) {
                    cards_map[card_id+i] = 1*multiplier;
                } else {
                    cards_map[card_id+i] += 1*multiplier;
                }
            }
        }
    }
    total_cards = 0;
    for (let key in cards_map) {
        total_cards += cards_map[key];
    }
    console.log(total_cards);
});