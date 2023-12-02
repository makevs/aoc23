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
    let game_power_sum = 0;


    for (let line of lines) {
        let temp_index = line.indexOf(':');

        line = line.substring(temp_index+2);
        line = line.split(';');

        let game_power = 0;

        let blue_highest = 0;
        let red_highest = 0;
        let green_highest = 0;

        for (let item of line) {
            for (let i of item.split(',')) {
                i = i.trim();
                i = i.split(' ');

                let color = i[1];
                let number = i[0];
                number = parseInt(number);

                switch (color) {
                    case 'blue':
                        if (number > blue_highest) {
                            blue_highest = number;
                        }
                        break;
                    case 'red':
                        if (number > red_highest) {
                            red_highest = number;
                        }
                        break;
                    case 'green':
                        if (number > green_highest) {
                            green_highest = number;
                        }
                        break;
                }
            }
        }
        game_power = blue_highest * red_highest * green_highest;
        game_power_sum += game_power;
    }
    console.log(game_power_sum);
}
);