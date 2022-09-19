#!/usr/bin/python3
def uniq_add(my_list=[]):
    add = 0
    unq = list(set(my_list))
    for x in unq:
        add += x
    return (add)
