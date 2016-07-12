(function(exports){

  function ToDoModel(task, complete) {
    this._task = task;
    this._complete = complete === true ? true : false;
  }

  ToDoModel.prototype = {
    isComplete: function(){
      return this._complete;
    },

    task: function(){
      return this._task;
    }
  };

  exports.ToDoModel = ToDoModel;
})(this);
