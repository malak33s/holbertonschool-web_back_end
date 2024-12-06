#!/usr/bin/env python3
import random
import asyncio

async def wait_random(max_delay: int = 10) -> float:
    ''' attend un délai aléatoire entre 0 et max_delay et renvoie ce délai '''
    return await asyncio.to_thread(random.uniform, 0, max_delay)

if __name__ == "__main__":
    print(asyncio.run(wait_random()))
    print(asyncio.run(wait_random(5)))
    print(asyncio.run(wait_random(15)))
