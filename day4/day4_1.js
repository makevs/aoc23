const fs = require('fs');

let input = fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let lines = data.split('\n');
    let card_id = 1;

    let total_points = 0;

    for (let row of lines) {
        row = row.split('|');
        let colon_index = row[0].indexOf(':');

        // Ignoring the card number from string
        row[0] = row[0].substring(colon_index+2);

        let winning_numbers = row[0];
        let played_numbers = row[1];

        winning_numbers = winning_numbers.trim().split(/\s+/);
        played_numbers = played_numbers.trim().split(/\s+/);

        let matches = 0;

        for (let number of played_numbers) {
            if (winning_numbers.includes(number)) {
                if (matches == 0) {
                    matches++;
                } else {
                    matches *= 2;
                }
            }
        }
        total_points += matches;
        card_id++;
    }
    console.log(total_points);
});