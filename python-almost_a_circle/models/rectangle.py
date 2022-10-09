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

    @property
    def width(self):
        """
            Width Getter
        """
        return self.__width

    @property
    def height(self):
        """
            height Getter
        """
        return self.__height

    @property
    def x(self):
        """
            x Getter
        """
        return self.__x

    @property
    def y(self):
        """
            y Getter
        """
        return self.__y
