#!/usr/bin/python3
"""
module
"""



class Base:
    """
    class Base
    """
    __nb_objects = 0

    def __init__(self, id=None):
        """
        inctance
        """
        if id is not None:
            self.id = id
        else:
            self.id = Base.__nb_objects
            Base.__nb_objects += 1
