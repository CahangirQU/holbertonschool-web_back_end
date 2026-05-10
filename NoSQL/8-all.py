#!/usr/bin/env python3
"""Module that lists all documents in a collection"""


def list_all(mongo_collection):
    """Return a list of all doxuments in the collection"""
    return list(mongo_collection.find())
