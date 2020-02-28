const axios = require("axios")

// Custom headers
const options = {
  headers: { "X-Custom-Header": "value" }
}

axios.post("/save", { a: 10 }, options).then(
  reponse => console.log("success"),
  error => {
    // console.log(error)
    console.log("error")
  }
)
