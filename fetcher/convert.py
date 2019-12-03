import csv

with open(r'data/01-chiyoda.csv') as csvfile:
  spamreader = csv.reader(csvfile, delimiter=",")
  for row in spamreader:
    print(row[2])