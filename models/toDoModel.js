var mongoose = require('mongoose');

var schema= mongoose.Schema;

var toDoSchema= new schema({
  userName: String,
  todo: String,
  isDone: Boolean,
  hasAttachment:Boolean
});

var Todos= mongoose.model('Todos',toDoSchema);

module.exports=Todos;