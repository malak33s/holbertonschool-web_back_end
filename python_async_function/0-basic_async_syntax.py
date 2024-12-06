#!/usr/bin/env python3
"""
ce module contient une fonction asynchrone qui attend un délai aléatoire
puis le retourne
"""

import random
import asyncio

async def wait_random(max_delay: int = 10) -> float:
    """
    attend un délai aléatoire entre 0 et max_delay secondes
    puis retourne ce délai

    Args:
    max_delay (int): délai maximum (en secondes), par défaut 10

    Returns:
    float: le délai généré
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
