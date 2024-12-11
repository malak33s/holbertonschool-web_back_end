#!/usr/bin/env python3

"""
Ce module mesure le temps total d'exécution de la coroutine
async_generator.
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension

"""
import asyncio and async comphrension
"""


async def measure_runtime() -> float:
    """
    Mesure le temps total pour exécuter async_generator
    quatre fois en parallèle en utilisant asyncio.gather

    Returns:
        float: Le temps total d'exécution en secondes
    """
    start_time = time.perf_counter()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())
    end_time = time.perf_counter()
    return end_time - start_time
