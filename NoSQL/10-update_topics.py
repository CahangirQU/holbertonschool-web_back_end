#!/usr/bin/env python3
"""Module that lists all documents in a collection"""


def update_topics(mongo_collection, name, topics):
    """Update topics for a school"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
