with open("input1.txt") as file:
    file = file.read()
    file = file.split("\n")

    total_calibration = 0

    for row in file:
        first_number = ""
        last_number = ""
        print(row)
        for letter in row:
            try:
                int(letter)
                if first_number == "":
                    first_number = int(letter)
                    print(first_number)
                else:
                    last_number = int(letter)
                    print(last_number)

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