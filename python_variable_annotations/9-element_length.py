#!/usr/bin/env python3
"""Module for element_length function"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples containi element and  length"""
    return [(i, len(i)) for i in lst]
