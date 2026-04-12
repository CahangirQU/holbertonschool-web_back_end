#!/usr/bin/env python3
"""Module that defines an asynchronous coroutine wait_random."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Return a random delay between 0 and max_delay after awaiting."""
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
