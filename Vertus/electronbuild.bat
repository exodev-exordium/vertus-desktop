@echo off
title Ionic/Capacitor building for Electron

echo Building Ionic 5
ionic build

echo Syncing with Capacitor
npx cap sync

echo Opening with Electron now
npx cap open electron

pause
