#!/usr/bin/env python3
"""
Ce module contient une coroutine pour générer des nombres aléatoires.
"""

import asyncio
import random
from typing import Generator

"""
import random and generate
"""


async def async_generator() -> Generator[float, None, None]:
    """
    Génèrate 10 random numbers btwn 0/10 with pose de 1 seconde entre chaque.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
