const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./views/index.ts",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HTMLPlugin({
      template: "./views/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "resources"),
          to: path.resolve(__dirname, "dist", "resources"),
        },
        {
          from: path.resolve(__dirname, "views", "styles"),
          to: path.resolve(__dirname, "dist", "styles"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
