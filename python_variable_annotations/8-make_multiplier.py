#!/usr/bin/env python3
"""Module for make_multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by multiplier"""

    def multiplier_func(value: float) -> float:
        """Multiplies value by multiplier"""
        return value * multiplier

    return multiplier_func
