/* models are the raw data that back up views.
models should generally never have any HTML
within, nor should they directly access views */

var ToDoItem = Backbone.Model.extend({
  defaults:{
    toDoText:""
  }
});
