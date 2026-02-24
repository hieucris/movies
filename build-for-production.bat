@echo off
echo ================================
echo Building Next.js Production
echo ================================

echo.
echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Building project...
call npm run build

echo.
echo ================================
echo Build completed!
echo ================================
echo.
echo Files to upload to Hostinger:
echo - .next folder
echo - public folder  
echo - package.json
echo - package-lock.json
echo - next.config.ts
echo - node_modules folder (optional, can run npm install on server)
echo.
pause
