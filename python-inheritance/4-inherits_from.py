#!/usr/bin/python3
"""
instance of a class that inherited
"""


def inherits_from(obj, a_class):
    if issubclass(type(obj), a_class):
        return True
    else:
        return False
