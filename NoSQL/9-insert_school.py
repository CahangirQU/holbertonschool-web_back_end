#!/usr/bin/env python3
"""Module that lists all documents in a collection"""


def insert_school(mongo_collection, **kwargs):
    """Insert a new school document into the collection."""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
