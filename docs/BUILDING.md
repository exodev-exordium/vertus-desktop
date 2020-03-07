# Building Ionic for Electron

Typically in order to run Ionic with capacitor for Electron you need to run a series of commands;
```sh
ionic build
npx cap sync
npx cap open electron
```

...but I have [simplified](../Vertus/electronbuild.bat) this into a `.bat` file.
```sh
npm run electron
```
