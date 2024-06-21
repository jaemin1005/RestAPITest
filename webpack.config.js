// // Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const isProduction = process.env.NODE_ENV == 'production';


// const config = {
//     entry: './src/client/index.ts',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'index.html',
//         }),

//         // Add your plugins here
//         // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/i,
//                 loader: 'ts-loader',
//                 exclude: ['/node_modules/'],
//             },
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//                 type: 'asset',
//             },

//             // Add your rules for custom modules here
//             // Learn more about loaders from https://webpack.js.org/loaders/
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
//     },
// };

// module.exports = () => {
//     if (isProduction) {
//         config.mode = 'production';
        
        
//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/client/Client.ts',
    output: {
        path: path.resolve(__dirname, 'webpack'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/, // TypeScript 파일을 대상으로 설정
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
              options: {
                configFile: path.resolve(__dirname, 'babel.config.json')
                //plugins: ['@babel/plugin-transform-runtime']
              }
            },{
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                    transpileOnly: true,
                },
            },]
          }
        ]
      },    
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@shared': path.resolve(__dirname, 'src/shared')
        }
    },
    mode: isProduction ? 'production' : 'development',
};

module.exports = config;