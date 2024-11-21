# @strudel/motion

This package adds device motion sensing functionality to strudel Patterns.

## Install

```sh
npm i @strudel/motion --save
```

## Setup SSL for Local Development
`DeviceMotionEvent` only work over HTTPS, so you'll need to set up SSL for local development.
install SSL plugin for Vite
`pnpm install -D @vitejs/plugin-basic-ssl`

add the basicSsl plugin to the defineConfig block in `strudel/website/astro.config.mjs`
```
vite: {
  plugins: [basicSsl()],
  server: {
    host: '0.0.0.0', // Ensures it binds to all network interfaces
    // https: { 
    //   key: '../../key.pem', //
    //   cert: '../../cert.pem',
    // },
  },
},
```

generate SSL cert if its necessary

`openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout key.pem -out cert.pem`


That's it! Now you can compose music on the train while swaying your smartphone around as if you're performing Butoh! 💃