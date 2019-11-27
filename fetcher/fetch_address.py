from bs4 import BeautifulSoup
import requests

baseURL = r"https://www.navitime.co.jp/category/0201/13/"

htmlSource = requests.get(baseURL)
soup = BeautifulSoup(htmlSource.content, 'html.parser')
print(soup.prettify())