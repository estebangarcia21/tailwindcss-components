const path = require("path")

module.exports = {
  entry: "src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: [
    {
      rules: /\.tsx?$/,
      loader: "babel-loader"
    }
  ]
}
