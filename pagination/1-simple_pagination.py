#!/usr/bin/env python3
"""
module pour une classe server qui implémente une pagination simple
"""

import csv
from typing import List
from typing import Tuple

index_range = __import__('0-simple_helper_function').index_range


class Server:
    """
    server class pour paginer une base de données de noms populaires
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        retourne le dataset depuis le cache ou charge depuis le fichier
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        retourne une page de données paginées
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start_index, end_index = index_range(page, page_size)

        data = self.dataset()

        return data[start_index:end_index] if start_index < len(data) else []
