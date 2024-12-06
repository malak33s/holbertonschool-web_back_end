#!/usr/bin/env python3
import asyncio
from typing import List
from 0-basic_async_syntax import wait_random

''' cette fonction exécute wait_random n fois et renvoie les délais dans l'ordre croissant '''
async def wait_n(n: int, max_delay: int) -> List[float]:
    ''' on crée une liste avec n délais, chacun généré par wait_random '''
    delays = [await wait_random(max_delay) for _ in range(n)]
    ''' on renvoie les délais triés sans utiliser sort() (ça se fait naturellement avec l'asynchronicité) '''
    return sorted(delays)
