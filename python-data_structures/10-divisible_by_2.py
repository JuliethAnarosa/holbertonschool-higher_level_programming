#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    new = []
    for x in my_list:
        if x % 2 and x == 0:
            new.append(True)
        else:
            new.append(False)
    return new
