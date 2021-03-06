const path = require('path')

const express = require('express')

const port = process.env.PORT || 9030;

class App {
  constructor() {
    this.express = express()

    this.express.use(express.static(__dirname))

    this.mountRoutes()
  }

  mountRoutes() {
    const router = express.Router()

    router.get(
      '/*',
      (req, res) => res.sendFile(
        path.resolve(__dirname, './index.html')
      )
    )

    // Use the router
    this.express.use('/', router)
  }
}

const app = new App().express

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
