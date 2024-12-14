const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production", // Change to 'production' for production builds
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve from the public directory
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // Preserve original file name and path
              outputPath: "images/", // Output directory for images
            },
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // Preserve original file name and path
              outputPath: "pdfs/", // Output directory for PDFs
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: true,
    }),
    new Dotenv({
      path: process.env.NODE_ENV === "production" ? undefined : "./.env", // Load from .env only in development
      systemvars: true, // Also use system environment variables (e.g., Netlify)
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_SERVICE_EMAIL": JSON.stringify(
        process.env.REACT_APP_SERVICE_EMAIL
      ),
      "process.env.REACT_APP_TEMPLATE_EMAIL": JSON.stringify(
        process.env.REACT_APP_TEMPLATE_EMAIL
      ),
      "process.env.REACT_APP_PUBLIC_EMAIL": JSON.stringify(
        process.env.REACT_APP_PUBLIC_EMAIL
      ),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/robots.txt", to: "robots.txt" },
        { from: "public/sitemap.xml", to: "sitemap.xml" },
        { from: "public/_redirects", to: "redirects" },
      ],
    }),
  ],
};
