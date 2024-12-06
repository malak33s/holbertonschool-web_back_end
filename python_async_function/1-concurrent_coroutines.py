#!/usr/bin/env python3
"""
module qui contient une fonction asynchrone permettant d'exécuter
n fois une coroutine et de retourner les délais dans l'ordre croissant
"""
import asyncio
from basic_async_syntax import wait_random

async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    exécute la coroutine wait_random n fois avec un délai maximum donné
    et renvoie une liste des délais dans l'ordre croissant

    Args:
        n (int): nombre de fois à exécuter wait_random
        max_delay (int): délai maximum (inclus) en secondes

    Returns:
        list[float]: liste des délais générés, triés par ordre croissant
    """
    tasks = [wait_random(max_delay) for _ in range(n)]  # crée une liste de coroutines
    delays = await asyncio.gather(*tasks)  # exécute toutes les coroutines en parallèle
    return sorted(delays)  # retourne la liste triée
