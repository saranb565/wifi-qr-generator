# wifi-qr-generator

<h1 align="center" id="title">Wifi QR Generator</h1>

<p align="center"><img src="https://socialify.git.ci/saranb565/wifi-qr-generator/image?custom_description=A+web-application+to+generate+QR+codes+to+connect+to+any+wireless+network.&amp;description=1&amp;font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit+Board&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">This project was designed for generating QR Code to connect to any wireless network by just scanning the QR generated.</p>

<h2>Project Screenshots:</h2>

<img src="" alt="project-screenshot" width="400" height="400/">

<img src="" alt="project-screenshot" width="400" height="400/">

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the project via git clone</p>

```
git clone https://github.com/saranb565/wifi-qr-generator.git
```

<p>2. Setup using Docker</p>

```
docker build -t wifi-qr-gen .
```

<p>3. Run using docker run</p>

```
docker run -p 5173:5173 -v ${PWD}:/app wifi-qr-gen sh -c "npm install && npm run dev"
```

<p>4. Alternatively run via docker compose</p>

```
docker-compose up
```
