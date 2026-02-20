@echo off
cd /d "%~dp0"
if errorlevel 1 (
  echo Failed to change to project directory.
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo npm not found. Make sure Node.js is installed and added to PATH.
  echo Try running "npm run dev" from a terminal in this folder instead.
  pause
  exit /b 1
)

call npm run dev
if errorlevel 1 (
  echo.
  echo Dev server exited with an error. See above for details.
)
pause
