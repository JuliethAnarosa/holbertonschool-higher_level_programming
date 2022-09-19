#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    element = 0
    while element < x:
        try:
            print(my_list[element], end="")
        except:
            break
        element += 1
    print("")
    return element
