/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require('path')
// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             alias: {
//                 components: path.resolve(__dirname, 'src/components'),
//                 templates: path.resolve(__dirname, 'src/templates'),
//                 scss: path.resolve(__dirname, 'src/scss'),
//                 assets: path.resolve(__dirname, 'src/assets'),
//             },
//         },
//     })
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet|leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
