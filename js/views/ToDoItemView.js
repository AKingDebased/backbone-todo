/* this view handles all DOM events and rendering
for an individual ToD item */

var ToDoItemView = Backbone.View.extend({
  initialize:function(){
    this.listenTo(this.model,"change",this.render);
  },
  tagName:"div",
  attributes:{
    class:"todo-item"
  },
  events:{
    "dblclick .todo-text":"editToDo",
    "keydown .edit-todo":"updateToDo",
    "click .remove-todo":function(){
      this.remove();
    }
  },
  editToDo:function(){
    var editTodo = $("<input>").val(this.model.get("toDoText")).addClass("edit-todo");
    this.$el.html(editTodo);
  },
  updateToDo:function(event){
    if(event.keyCode === 13){
      if(event.currentTarget.value === this.model.get("toDoText")){
        this.render();
        return;
      }

      this.model.set("toDoText",event.currentTarget.value);
    }
  },
  render:function(){
    var toDoTextEl = $("<span>").addClass("todo-text").html(this.model.get("toDoText"));
    var closeButton = $("<span>").addClass("glyphicon glyphicon-remove remove-todo");

    this.$el.html(toDoTextEl);
    this.$el.append(closeButton);
    return this;
  }
});
