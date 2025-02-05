
<h1 align="center" id="title">Wifi QR Generator</h1>

<p align="center"><img src="https://socialify.git.ci/saranb565/wifi-qr-generator/image?custom_description=A+web-application+to+generate+QR+codes+to+connect+to+any+wireless+network.&amp;description=1&amp;font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit+Board&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">This project was designed for generating QR Code to connect to any wireless network by just scanning the QR generated.</p>

<h2>Project Screenshots:</h2>

<img src="https://drive.google.com/file/d/1B1_NjGQvpUJDC4qWZ_j60Bm1Wyf7MjA1/view?usp=drivesdk" >

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
