#!/usr/bin/env python3
"""
module fonction de base pour la pagination
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    return tuple ou il y'a indices début et fin pour
    une pagination donnée.

    Args:
        page (int): Numéro page.
        page_size (int): Nbr élém par page

    Returns:
        Tuple[int, int]: Tuple l'index de début inclusif
                         et l'index de fin exclusif pour 7 page.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
