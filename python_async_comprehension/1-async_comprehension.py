#!/usr/bin/env python3
"""
Module pour collecter des nbrs aléatoire généré
de manière asynchrone.
"""

from typing import List
async_generator = __import__('0-async_generator').async_generator

"""
import typing list and task
"""


async def async_comprehension() -> List[float]:
    """
    Utilise une compréhension asynchrone pour collecter
    10 nombres générés par async_generator
    """
    return [n async for n in async_generator()]
