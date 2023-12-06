/*
Time:        53     91     67     68
Distance:   250   1330   1081   1025
 */

fn calc_distance(best_distance: i32, race_time: i32) -> i32 {
    let mut distance = 0;
    let mut possible_wins = 0;

    for charging_time in 0..race_time {
        distance = charging_time * (race_time - charging_time);
        if distance > best_distance {
            possible_wins += 1;
        }
    };
    return possible_wins;
}

fn main() {
    let mut error_margin = 0;

    error_margin = calc_distance(250, 53) *
        calc_distance(1330, 91) *
        calc_distance(1081, 67) *
        calc_distance(1025, 68);

    println!("{}", error_margin);
}
