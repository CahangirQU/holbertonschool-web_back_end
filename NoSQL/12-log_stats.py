#!/usr/bin/env python3
"""MongoDB-dəki Nginx loqlarından statistika toplayan skript"""
from pymongo import MongoClient


def log_stats():
    """Nginx loq kolleksiyasının statistikasını çap edir"""
    # MongoDB-yə qoşuluruq
    client = MongoClient('mongodb://127.0.0.1:27017')
    
    # logs verilənlər bazasının nginx kolleksiyasını seçirik
    nginx_collection = client.logs.nginx

    # 1. Ümumi sənəd (log) sayını tapırıq
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # 2. Metodların statistikasını çıxarırıq
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        # Diqqət: Hər metod sətirinin önündə \t (tab) var
        print(f"\tmethod {method}: {count}")

    # 3. Metodu GET və path-i /status olan sənədlərin sayını tapırıq
    status_checks = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_checks} status check")


if __name__ == "__main__":
    log_stats()
