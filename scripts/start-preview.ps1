$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "Starting CareBridge preview at http://localhost:4173"
python -m http.server 4173
