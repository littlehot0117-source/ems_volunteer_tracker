import urllib.request
import os

url = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"
target = os.path.join(os.path.dirname(__file__), "xlsx.full.min.js")

print(f"Downloading {url} to {target}...")
try:
    urllib.request.urlretrieve(url, target)
    print("Download completed successfully!")
except Exception as e:
    print(f"Error downloading: {e}")
