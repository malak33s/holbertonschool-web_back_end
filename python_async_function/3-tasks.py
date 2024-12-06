#!/usr/bin/env python3
""" ca ecrit un asynchronous coroutine qui prend an integer argument"""

import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """ca retourne asyncio.Task"""
    return asyncio.create_task(wait_random(max_delay))
