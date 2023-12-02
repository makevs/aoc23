const blue = 14;
const red = 12;
const green = 13;

const fs = require('fs');

let input = fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let lines = data.split('\n');
    let game_id = 1;
    let game_id_sum = 0;


    for (let line of lines) {
        let temp_index = line.indexOf(':');

        line = line.substring(temp_index+2);
        line = line.split(';');

        let game_possible = true;

        for (let item of line) {
            for (let i of item.split(',')) {
                i = i.trim();
                i = i.split(' ');

                let color = i[1];
                let number = i[0];

                switch (color) {
                    case 'blue':
                        if (number > blue) {
                            game_possible = false;
                        }
                        break;
                    case 'red':
                        if (number > red) {
                            game_possible = false;
                        }
                        break;
                    case 'green':
                        if (number > green) {
                            game_possible = false;
                        }
                        break;
                }
            }
        }
        if (game_possible) {
            game_id_sum += game_id;
        }
        game_id++;
    }
    console.log(game_id_sum);
}
);