#!/usr/bin/env python3
"""
module contient une coroutine pour générer des nombres random.
"""

import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    ça va génerer 10 nombres aléatoires entre 0 et 10, avec pause de 1 seconde entre chaque.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
