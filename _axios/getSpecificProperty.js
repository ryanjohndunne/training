const axios = require("axios")

// logs the value of 'created_at' property of each response to the console.
axios.all([axios.get("https://api.github.com/users/mapbox"), axios.get("https://api.github.com/users/phantomjs")]).then(
  axios.spread((user1, user2) => {
    console.log("Date created: ", user1.data.created_at)
    console.log("Date created: ", user2.data.created_at)
  }),
  error => {
    //     // console.log(error)
    console.log("error")
  }
)
