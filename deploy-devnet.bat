@echo off
REM Script de deploy na Devnet da MultiversX para Windows

SET CONTRACT_DIR=smart-contract
SET CONTRACT_NAME=skillbadge
SET OWNER_ADDRESS=erd1...  REM Substitua pelo seu endereço real
SET PEM_FILE=wallet.pem
SET CHAIN_ID=D
SET PROXY=https://devnet-gateway.multiversx.com

REM Compilar o contrato
mxpy contract build %CONTRACT_DIR%

REM Deploy do contrato
mxpy contract deploy ^
  --project %CONTRACT_DIR% ^
  --recall-nonce ^
  --pem %PEM_FILE% ^
  --gas-limit=60000000 ^
  --send ^
  --outfile="deploy-devnet.json" ^
  --proxy=%PROXY% ^
  --chain=%CHAIN_ID% ^
  --metadata-payable-by-smart-contract ^
  --metadata-payable-by-user ^
  --metadata-upgradeable ^
  --metadata-readable ^
  --arguments ""

echo.
echo Contrato implantado! Endereço:
type deploy-devnet.json | findstr address
pause
