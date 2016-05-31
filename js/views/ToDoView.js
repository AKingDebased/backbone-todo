/* views handle all DOM rendering and events
 generally, they should have NO business logic
or direct data manipulation */

var ToDoView = Backbone.View.extend({
    /* i am associated with a container */
    el:".container",
    template:_.template($(".todo-template").html()),
    render:function(){
      this.$el.html(this.template());
    },
    renderToDoItem:function(event){
      //cached reference to todo-input
      var toDoInput = this.$(".todo-input");

      if(event.keyCode === 13 &&
         toDoInput.val().trim()){

         var toDoItem = new ToDoItem({
           toDoText:toDoInput.val()
         });

         var toDoItemView = new ToDoItemView({
           model:toDoItem
         });

         this.$(".todo-app").append(toDoItemView.render().$el);

         toDoInput.val("");
      }
    },
    events:{
      "keydown .todo-input":"renderToDoItem"
    }
});
