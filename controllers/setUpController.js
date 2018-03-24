var Todos= require('../models/toDoModel');

module.exports=function(app){

    app.get('/api/setupTodos', function(req,res){
        // seed databse
        var starterTodos = [
            {
                userName:'test',
                todo:'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                userName:'test',
                todo:'Feed Dog',
                isDone: false,
                hasAttachment: false
            },
            {
                userName:'test',
                todo:'Learn Node',
                isDone: false,
                hasAttachment: false
            },
        ];
        Todos.create(starterTodos, function(err,results){
          res.send(results);
        });
    });
}