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