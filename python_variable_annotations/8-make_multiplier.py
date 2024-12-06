#!/usr/bin/env python3
''' fonction crée fonction pour multiplier un nombre par un facteur donné
'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    ''' on retourne une fonction qui multiplie un nombre par le facteur
    '''
    return lambda x: x * multiplier
