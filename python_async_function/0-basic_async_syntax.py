#!/usr/bin/env python3
"""
two modules random and asynco
"""
import random
import asyncio
"""
ça genere alatoirement de 0 a 10 pcq ya un delai.
"""


async def wait_random(max_delay: int = 10) -> float:
    """
    function genrate a random num between 0 and max_delay.
    """
    delay = random.uniform(0, max_delay)
    # wait without block program
    await asyncio.sleep(delay)
    return delay