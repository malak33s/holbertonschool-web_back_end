#!/usr/bin/env python3
import random
import asyncio

async def wait_random(max_delay: int = 10) -> float:
    """Returns a random delay between 0 and max_delay (inclusive)."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)  # Simulation de l'attente
    return delay
