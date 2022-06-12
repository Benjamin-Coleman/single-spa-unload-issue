# single-spa-unload-app-repro

Demo application using https://github.com/react-microfrontends as base to repro behavior where a MFE that enters SKIP_BECAUSE_BROKEN status is unable to use unloadApplication to revert the state back to NOT_LOADED and it remains in SKIP_BECAUSE_BROKEN state

## Setup

- Run root-config app by installing with `yarn` and run `yarn start`
- Application runs on localhost:3000
- Either run the planets MFE with by installing and starting on port 8080 or import override with steps from README.md in planets MFE and point to any JS file that is not a legitimate single-spa application with the proper lifecycle methods exported.
- Once running, click on planets navigation item leading to broken MFE, then back to root-config or any other MFE.
- MFE will attempt to unload the planets app in 10 seconds (noted in console)
- Use single-spa Inspector browser extension to note the planets MFE status that remains in SKIP_BECAUSE_BROKEN state


```js
localStorage.setItem("devtools", true);
```

Refresh the page. Click on the tan / beige rectangle:

![image](https://user-images.githubusercontent.com/5524384/75211359-e46b9280-5740-11ea-80bb-974846df414b.png)

Set an [import map override](https://github.com/joeldenning/import-map-overrides/) to `9001`.

![image](https://user-images.githubusercontent.com/5524384/75211553-7e333f80-5741-11ea-97d6-d3d86ffd1826.png)