const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    //подключаем плагины
    plugins: [
        //подключаем автопрефикс
        autoprefixer,
        // cssnano нужно указать объект опций
        cssnano({ preset: 'default' })  // { preset: default } говорит о том, что нужно использовать стандартные настройки минификации
                                        
    ]
}