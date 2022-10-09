#!/usr/bin/python3
"""
the class Rectangle that inherits from Base
"""
from .base import Base


class Rectangle(Base):
    """
    A representation of a rectangle
    """
    def __init__(self, width, height, x=0, y=0, id=None):
        """
        Init Class
        """
        self.width = width
        self.height = height
        self.x = x
        self.y = y
        super().__init__(id)
