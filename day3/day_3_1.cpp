//
// Created by make on 03/12/2023.
//

#include "day_3_1.hh"

std::vector<std::string> read_file() {
    std::ifstream file("input.txt");
    std::vector<std::string> file_lines;
    std::string line;

    while (std::getline(file, line)) {
        file_lines.push_back(line);
    }
    return file_lines;
}

void parse_file(std::vector<std::string> &file) {
    std::vector<char> line_upper;
    std::vector<char> line_lower;

    std::vector<int> part_numbers;
    std::string temp_number = "";
    bool adjacent = false;

    for (auto &line: file) {
        for (int i = 0; i < line.length(); i++) {
            if (file.at(0) == line) {
                line_upper.push_back(line[i]);
            } else {
                line_lower.push_back(line[i]);
            }

        }

        if (file.back() == line) {
            auto temp = line_lower;
            line_lower = line_upper;
            line_upper = temp;
        }

        if (line_lower.size() == 0) {
            continue;
        }

        for (int i = 0; i < line_upper.size(); i++) {
            if (std::find(numbers.begin(), numbers.end(),
                          line_upper[i]) != numbers.end()) {
                temp_number += line_upper[i];

                if (line_lower[i] != '.' || line_lower[i - 1] != '.'
                    || line_lower[i + 1] != '.') {
                    adjacent = true;

                } else if (line_upper[i - 1] != '.' && std::find(numbers.begin(), numbers.end(),
                                                                 line_upper[i - 1]) == numbers.end()) {
                    adjacent = true;
                } else if (line_upper[i + 1] != '.' && std::find(numbers.begin(), numbers.end(),
                                                                 line_upper[i + 1]) == numbers.end()) {
                    adjacent = true;
                }
            } else {
                if (temp_number != "" and adjacent == true) {
                    part_numbers.push_back(std::stoi(temp_number));
                    temp_number = "";
                } else {
                    temp_number = "";
                }
                adjacent = false;
            }

        }
        line_upper = line_lower;
        line_lower.clear();
    }
        int sum = 0;
        for (auto &number: part_numbers) {
            sum += number;
        }
        std::cout << sum << std::endl;
}
