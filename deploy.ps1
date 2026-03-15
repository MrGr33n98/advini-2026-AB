# Script de deploy para AWS EC2
Write-Host "🚀 Iniciando deploy..." -ForegroundColor Green

# Para e remove containers existentes
Write-Host "📦 Parando containers..." -ForegroundColor Yellow
docker-compose down

# Remove credenciais antigas se existirem
Write-Host "🔧 Limpando credenciais..." -ForegroundColor Yellow
docker-compose exec backend rm -f /app/config/credentials.yml.enc 2>$null

# Rebuild e start
Write-Host "🔨 Reconstruindo e iniciando..." -ForegroundColor Yellow  
docker-compose up --build -d

# Aguarda containers estarem prontos
Write-Host "⏳ Aguardando containers..." -ForegroundColor Yellow
Start-Sleep -Seconds 45

# Executa migrations e seeds
Write-Host "💾 Executando migrations e seeds..." -ForegroundColor Yellow
docker-compose exec backend rails db:create db:migrate db:seed

Write-Host "✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🌐 Active Admin: http://3.236.95.204:3000/admin" -ForegroundColor Cyan
Write-Host "📝 Login: admin@example.com / password" -ForegroundColor Cyan
Write-Host "🖥️  Frontend: http://3.236.95.204" -ForegroundColor Cyan