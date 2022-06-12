const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  // const orgName = "react-mf";
  // const defaultConfig = singleSpaDefaults({
  //   orgName,
  //   projectName: "root-config",
  //   webpackConfigEnv,
  //   argv,
  //   disableHtmlGeneration: true,
  // });

  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "planets",
    webpackConfigEnv,
    argv,
  });

  const standalonePlugin = defaultConfig.plugins.find(
    (p) => p.constructor.name === "StandaloneSingleSpaPlugin"
  );

  standalonePlugin.options.importMapUrl = new URL(
    "https://react.microfrontends.app/importmap.json"
  );

  const externals = [/^rxjs\/?.*$/];

  if (webpackConfigEnv.standalone) {
    externals.push("react", "react-dom");
  }

  return merge(defaultConfig, {
    // customizations go here
    externals,
  });
};

