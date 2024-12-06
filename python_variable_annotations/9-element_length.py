#!/usr/bin/env python3
# une fonction qui retourne une liste avec chaque élément et sa longueur

from typing import Iterable, Sequence, List, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    # on retourne une liste de tuples avec l'élément et sa longueur
    return [(i, len(i)) for i in lst]
