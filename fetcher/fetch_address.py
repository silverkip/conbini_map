from bs4 import BeautifulSoup
import requests
import csv
import googlemaps

gmaps = googlemaps.Client(key='AIzaSyCjIjyA2rUsd7W_VjGcijvEzrq-wx4K4p4')

baseURL = r"https://www.navitime.co.jp/category/0201/131"

tokyo23 = [
  "chiyoda",
  "chuuo",
  "minato",
  "shinjuku",
  "bunkyo",
  "taito",
  "sumida",
  "koto",
  "shinagawa",
  "meguro",
  "ota",
  "setagaya",
  "shibuya",
  "nakano",
  "suginami",
  "toshima",
  "kita",
  "arakawa",
  "itabashi",
  "nerima",
  "adachi",
  "katsushika",
  "edogawa",
]

for i in range(0,len(tokyo23)):
  wardCode = i+1
  wardURL = baseURL + str(f'{wardCode:02}') + "/"
  with open('data/{0}-{1}.csv'.format(f'{wardCode:02}', tokyo23[i]), 'w') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    spamwriter.writerow(["Name", "Address", "lat", "lon"])
    page = 1
    while True:
      print("Fetching page " + str(page) + " of " + tokyo23[i] + " ward ......")
      htmlSource = requests.get(wardURL + "?page=" + str(page))
      soup = BeautifulSoup(htmlSource.content, 'html.parser')
      addresses = soup.find_all('dd', class_="address_name")
      names = soup.find_all('dt', class_="spot_name")
      if len(addresses) == 0:
        break
      for j in range(0, len(names)):
        name = names[j].text
        address = addresses[j].text[:-5]
        try:
          geo = gmaps.geocode(address)[0]['geometry']['location']
        except:
          print(name, address)
          geo = {
            'lat' : 'error',
            'lng' : 'error',
          }
        if ('PR' in name) or ('株' in name):
          print(name, address, geo)
          continue
        spamwriter.writerow([name, address, geo['lat'], geo['lng']])
      page += 1