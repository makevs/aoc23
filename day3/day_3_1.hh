//
// Created by make on 03/12/2023.
//
#ifndef DAY3_DAY_3_1_HH
#define DAY3_DAY_3_1_HH

#include <fstream>
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

const std::vector<char> numbers = {'0', '1', '2', '3', '4',
                                   '5', '6', '7', '8', '9'};

std::vector<std::string> read_file();

void parse_file(std::vector<std::string> &file);

#endif //DAY3_DAY_3_1_HH
