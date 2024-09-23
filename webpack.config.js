const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development", // Change to 'production' for production builds
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
      path: process.env.NODE_ENV === "production" ? undefined : "./.env", // Load only in development
    }),
  ],
};
