$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$cloudflared = Join-Path $root "cloudflared.exe"

if (-not (Test-Path $cloudflared)) {
  throw "cloudflared.exe was not found in the project root."
}

Set-Location $root
Write-Host "Starting public tunnel for http://localhost:4173"
& $cloudflared tunnel --url http://localhost:4173
