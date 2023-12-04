#include <iostream>
#include "day_3_1.hh"

int main() {
    std::vector<std::string> file = read_file();
    parse_file(file);
    reverse(file.begin(), file.end());
    for (auto &line: file) {
        std::reverse(line.begin(), line.end());
    }
    parse_file(file);
    return 0;
}
