using System;
using System.Text.RegularExpressions;

string text_input = File.ReadAllText("input1.txt");
string[] text_split = text_input.Split('\n');

var nums = new Dictionary<string, char>()
{
    // numbers from 1 to 9 represented in dict
    // key is the word, value is the number in char
    {"one", '1' },
    {"two", '2' },
    {"three", '3' },
    {"four", '4' },
    {"five", '5' },
    {"six", '6' },
    {"seven", '7' },
    {"eight", '8' },
    {"nine", '9' }
};

int total = 0;

foreach (string text in text_split )
{
    char first_num = ' ';
    char last_num = ' ';
    int index_first = -1;
    int index_last = -1;

    foreach (var c in text)
    {
        if (Char.IsDigit(c))
        {
            if (first_num == ' ')
            {
                first_num = c;
                index_first = text.IndexOf(first_num);
            }
            else
            {
                last_num = c;
                index_last = text.LastIndexOf(last_num);
            }
        }
    }

    if (last_num == ' ' && first_num != ' ')
    {
        last_num = first_num;
        index_last = index_first;
    }

    foreach (var num in nums)
    {
        if (Regex.Matches(text, num.Key).Count == 1)
        {
            if (text.IndexOf(num.Key) < index_first)
            {
                first_num = num.Value;
                index_first = text.IndexOf(num.Key);
            }
            else if (text.IndexOf(num.Key) > index_last)
            {
                last_num = num.Value;
                index_last = text.IndexOf(num.Key);
            }
        }
        else if (Regex.Matches(text, num.Key).Count > 1)
        {
            if (text.IndexOf(num.Key) < index_first)
            {
                first_num = num.Value;
                index_first = text.IndexOf(num.Key);
            }
            if (text.LastIndexOf(num.Key) > index_last)
            {
                last_num = num.Value;
                index_last = text.LastIndexOf(num.Key);
            }
        }
    }

    if (last_num == ' ' && first_num != ' ')
    {
        last_num = first_num;
    }


    if (last_num != ' ' && first_num != ' ') {
        string temp = first_num.ToString()+last_num.ToString();
        total += Convert.ToInt32(temp);
        
        //Debugging print.
        //Console.Write(first_num + " " + last_num + " on row: " + text + '\n');
    }
}
Console.WriteLine(total.ToString());