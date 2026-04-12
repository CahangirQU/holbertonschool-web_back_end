#!/usr/bin/env python3
"""
Module for executing multiple asynchronous waits and returning sorted delays
"""
import time
import asyncio
import importlib

wait_n = importlib.import_module("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """return to measure function"""
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
