#!/usr/bin/env python3
"""Module for to_kv function"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of a string and the square of a float or integer"""
    return (k, float(v ** 2))
