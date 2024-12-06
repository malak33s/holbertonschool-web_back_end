#!/usr/bin/env python3
import random
import asyncio

"""
ce module contient une fonction asynchrone qui génère un délai aléatoire entre 0 et un maximum
"""
async def wait_random(max_delay: int = 10) -> float:
    """
    attend un délai aléatoire entre 0 et max_delay et renvoie ce délai

    Args:
    max_delay (int): délai maximum (inclus) en secondes. Par défaut, il est de 10.

    Returns:
    float: un délai aléatoire entre 0 et max_delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
