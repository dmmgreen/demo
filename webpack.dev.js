const pathLib=require('path');
const CleanPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const OpenBrowserPlugin=require('open-browser-webpack-plugin');

const ROOT_PATH=pathLib.resolve(__dirname);
const ENTRY_PATH=pathLib.resolve(ROOT_PATH,'app');
const OUTPUT_PATH=pathLib.resolve(ROOT_PATH,'build');

module.exports={
    entry:[
        "react-hot-loader/patch",
        pathLib.resolve(ENTRY_PATH,'index.js')
    ],
    output:{
        path:OUTPUT_PATH,
        publicPath:'/',
        filename:'[name]-[hash:8].js'
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new CleanPlugin(['build']),
        new HtmlWebpackPlugin({
            title:'blog',
            showErrors:true
        })
    ]
};