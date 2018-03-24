var configValues = require('./config');

module.exports={
    getDbConnectionString: function(){
        return 'mongodb://'+ configValues.uname + ':'+configValues.pwd+'@ds223509.mlab.com:23509/nodetodo';
    }
}