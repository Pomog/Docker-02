## 1. Start
```powershall
docker --version
docker info
```
```powershall
Add-Content .gitignore ".env"
```
```powershall
New-Item -Path .env -ItemType "file" notepad .env-microservices2>
```
```powershall
New-Item -Path README.md -ItemType "file" notepad README.md
```

- Check logs (api-gateway-app, inventory-app ...; container_name from docker-compose.yml)
```powershall
docker-compose logs api-gateway-app
docker-compose logs billing-app > billing-app.log
```
## 2. Prerequisites
- Verify in PowerShell:
```powershall
node --version
# v20.12.2
npm --version
# 10.5.0
```
## 3. Inventory App
```powershall
cd F:\my-docker-microservices2\inventory-app
npm init -y
```
```powershall
npm install express
```
- create server.js - minimal Express server

## 3. Billing App