#!/usr/bin/env python3
"""Module that lists all documents in a collection"""


def schools_by_topic(mongo_collection, topic):
    """Return a list of schools that have the specified topic."""
    return list(mongo_collection.find({"topics": topic}))
