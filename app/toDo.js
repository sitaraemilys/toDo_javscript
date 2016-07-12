(function(exports){

  function ToDoModel(task, complete) {
    this._task = task;
    this._complete = complete === true ? true : false;
  }

  exports.ToDoModel = ToDoModel;
})(this);
