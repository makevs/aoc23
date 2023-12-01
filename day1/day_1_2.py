ASCII_NUMBERS = {"one": 1, "two": 2, "three": 3, "four": 4,
                 "five": 5, "six": 6, "seven": 7, "eight": 8,
                 "nine": 9, "zero": 0}


def find_multiples(temprow: str, tempnum: str):
    index_values = []
    i = 0

    while i in range(0, len(row)):
        index = temprow.find(tempnum, i)
        if index == -1:
            break

        if index not in index_values:
            index_values.append(index)

        i += len(tempnum) -1

        if i > len(row):
            break

    return index_values


with open("input1.txt") as file:
    file = file.read()
    file = file.split("\n")

    total_calibration = 0

    for row in file:
        first_number = ""
        last_number = ""
        # print(row)

        previous_index = -1
        temp_numbers = []

        for ascii_number in ASCII_NUMBERS:
            if row.count(ascii_number) > 1:
                for i in find_multiples(row, ascii_number):
                    temp_numbers.append(i)

            elif row.find(ascii_number) != 1:
                temp_numbers.append(row.find(ascii_number))

        print(temp_numbers)

        for letter in row:
            try:
                int(letter)
                if first_number == "":
                    first_number = int(letter)
                else:
                    last_number = int(letter)

            except ValueError:
                continue

        if last_number == "" and first_number != "":
            last_number = first_number

        temp = f"{str(first_number)}" + f"{str(last_number)}"

        try:
            int(temp)
            total_calibration += int(temp)
            continue

        except:
            continue

    print(total_calibration)
