#!/usr/bin/env python3
"""Module for sum_mixed_list function"""

from typing import List, Union


def sum_mixed_list(mxt_list: List[Union[int, float]]) -> float:
    """Return the sum of a list of floats and integers"""
    return sum(mxt_list)
