#!/usr/bin/env python3
import asyncio
from basic_async_syntax import wait_random

"""
ce module contient une fonction asynchrone qui exécute wait_random n fois et retourne 
les délais dans l'ordre croissant
"""

async def wait_n(n: int, max_delay: int) -> list:
    """
    exécute wait_random n fois avec un délai maximum donné et renvoie les résultats
    dans l'ordre croissant (sans utiliser la fonction sorted())

    Args:
    n (int): le nombre de fois à appeler wait_random
    max_delay (int): délai maximum (inclus) en secondes

    Returns:
    list: une liste de délais générés par wait_random dans l'ordre croissant
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
