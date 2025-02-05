
<h1 align="center" id="title">Wifi QR Generator</h1>

<p align="center"><img src="https://socialify.git.ci/saranb565/wifi-qr-generator/image?custom_description=A+web-application+to+generate+QR+codes+to+connect+to+any+wireless+network.&amp;description=1&amp;font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit+Board&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">This project was designed for generating QR Code to connect to any wireless network by just scanning the QR generated.</p>

<h2>Project Screenshots:</h2>

<img src="https://drive.google.com/uc?export=view&id=1B1_NjGQvpUJDC4qWZ_j60Bm1Wyf7MjA1" alt="Google Drive Image">

<img src="https://drive.google.com/uc?export=view&id=1YUWlBKEbU5mt9xYlPDCEvLwWPnBjND5h" alt="Google Drive Image">

<img src="https://drive.google.com/uc?export=view&id=1CHIiUuBzggzkoM_x-UGt4rOMyFC53MHV" alt="Google Drive Image">

<h2> How it works </h2>
<p> The application renders the home page that contains the wifiQR and UrlQR functionalities. </p>
<p> To generate and download QR for websites, Urls, Links for forms etc. go to the UrlQR section. Enter the url to generate QR dynamically as you type and also download it for future use. </p>
<p> To generate QR to connect to wifi, go to the WiFiQR section on the homepage, and enter the WiFi name(SSID) and Password in the input fields. If needed change the encryption type depending on the network you like to share(mostly it is WPA2 encryption). Generate QR and download it to share to clients who need to connect to your network. They can connect to your Wifi by just scanning the QR you shared to them. </p>
<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the project via git clone</p>

```
git clone https://github.com/saranb565/wifi-qr-generator.git
```

<p>2. Navigate to the root folder </p>

```
cd wifi-qr-generator
```

<p>3. Setup using Docker</p>

```
docker build -t wifi-qr-gen .
```

<p>4. Run using docker run</p>

```
docker run -p 5173:5173 -v ${PWD}:/app wifi-qr-gen sh -c "npm install && npm run dev"
```

<p>5. Alternatively run via docker compose</p>

```
docker-compose up
```
