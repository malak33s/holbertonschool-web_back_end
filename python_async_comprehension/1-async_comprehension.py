#!/usr/bin/env python3
"""
Module pour collecter des nombres aléatoires générés de manière asynchrone.
"""

from typing import List
from 0_async_generator import async_generator


async def async_comprehension() -> List[float]:
    """
    Utilise une compréhension asynchrone pour collecter
    10 nombres générés par async_generator.
    """
    numbers = [n async for n in async_generator()]
    return numbers
