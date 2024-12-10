#!/usr/bin/env python3
"""
Module pour collecter des nombres aléatoires générés
de manière asynchrone.
"""

from async_generator import async_generator
from typing import List


async def async_comprehension() -> List[float]:
    """
    Utilise une compréhension asynchrone pour collecter
    10 nombres générés par async_generator.
    """
    return [n async for n in async_generator()]
