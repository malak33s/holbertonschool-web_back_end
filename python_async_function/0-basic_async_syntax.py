#!/usr/bin/env python3
import random
import asyncio

"""
module contient funtion asynchrone et génère délai random 0 et un maximum
"""


async def wait_random(max_delay: int = 10) -> float:
    """
    attend un délai aléatoire entre 0 et max_delay et renvoie ce délai

    Args:
    max_delay (int): Par défaut, le delai est de 10.

    Returns:
    float: un délai aléatoire entre 0 et max_delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
