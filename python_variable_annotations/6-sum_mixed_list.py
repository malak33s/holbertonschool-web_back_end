#!/usr/bin/env python3
# une fonction qui additionne une liste de nombres entiers et décimaux

from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    # on retourne la somme de tous les nombres dans la liste
    return sum(mxd_lst)
