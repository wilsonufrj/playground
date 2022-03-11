const path = require('path')

module.exports={
    entry:'./playGround.js',

    output:{
        path:path.resolve('dist'),
        filename:'main.js'
    }
}