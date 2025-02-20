# Define root directory name
$rootDir = "F:\my-docker-microservices2"

# Define subfolders and placeholder files
$structure = @(
    ".env",
    "docker-compose.yml",
    "inventory-database\Dockerfile",
    "billing-database\Dockerfile",
    "rabbitmq\Dockerfile",
    "inventory-app\Dockerfile",
    "billing-app\Dockerfile",
    "api-gateway\Dockerfile"
)

Write-Host "Creating project structure under $rootDir ..."

# Ensure root directory exists
if (!(Test-Path $rootDir)) {
    New-Item -Path $rootDir -ItemType Directory -Force | Out-Null
    Write-Host "Created root directory: $rootDir"
} else {
    Write-Host "Root directory already exists: $rootDir"
}

# Loop through the structure and create directories and files as needed
foreach ($item in $structure) {
    $fullPath = Join-Path $rootDir $item
    # Get the parent directory path (for nested paths)
    $dirName = Split-Path $fullPath -Parent
    if (!(Test-Path $dirName)) {
        New-Item -Path $dirName -ItemType Directory -Force | Out-Null
        Write-Host "Created directory: $dirName"
    }
    
    # Create the file if it doesn't exist
    if (!(Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType File -Force | Out-Null
        Write-Host "Created file: $fullPath"
    } else {
        Write-Host "File already exists: $fullPath"
    }
}

Write-Host "`nProject structure is ready under $rootDir."
Write-Host "You can now edit .env, docker-compose.yml, and each Dockerfile as needed."