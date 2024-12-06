#!/usr/bin/env python3
'''une fonction qui additionne une liste de nombres décimaux
'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    """ on retourne la somme de tous les nombres dans la liste
    """
    return sum(input_list)
