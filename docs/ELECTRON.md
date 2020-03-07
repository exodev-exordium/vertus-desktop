# Electron

This file will be dedicated to documenting Electron related stuff.

## Base Issue

There is an issue where when the `index.html` file is created within the `electron` folder, it doesn't use the proper base directory. This is only an issue within the `electron` folder, so don't change the one in the `src` folder for `ionic` or you'll run into problems when using `ionic serve`.

- **from**
```html
<head>
  ...
  <base href="/" />
```

- **to**
```html
<head>
  ...
  <base href="./" />
```
