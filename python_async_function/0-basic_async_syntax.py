#!/usr/bin/env python3
import random
import asyncio


def wait_random(max_delay: int = 10) -> float:
    """Returns a random delay between 0 and max_delay (inclusive)."""
    delay = random.uniform(0, max_delay)
    return delay
