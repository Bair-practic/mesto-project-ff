const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); //подключаем плагин для html, это класс
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин 
// подключите к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
                publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [ //массив правил
            {//объект правил
                //регулярное выражение, которое ищет все js файлы.
                test: /\.js$/,
                //при обработке файлов должен использовать бебел лоадер.
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
              },
            {
                // применять это правило только к CSS-файлам
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { importLoaders: 1 } //чтобы работал с css в которых есть @import
                },
            'postcss-loader'] // Добавьте postcss-loader
            }
        ]
    },
    plugins: [ //массив
        new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html
        }),
        new CleanWebpackPlugin(), // использовали плагин
        new MiniCssExtractPlugin() //подключение плагина для объединения плагина
    ] 
}
// указали, в какой файл будет собираться весь js, и дали ему имя

// указали первое место, куда заглянет webpack, — файл index.js в папке src 

// module.exports — это синтаксис экспорта в Node.js