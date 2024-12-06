#!/usr/bin/env python3
''' une fonction qui retourne un tuple avec une chaîne de caractères et un nombre au carré
'''
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    ''' on retourne un tuple avec la chaîne et le carré du nombre
    '''
    return (k, float(v ** 2))
