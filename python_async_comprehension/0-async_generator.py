#!/usr/bin/env python3
"""
Module contient une coroutine pour générer des nombres random.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    génere 10 nbrs random entre 0 et 10, avc pause de 1 seconde entre chaque.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
