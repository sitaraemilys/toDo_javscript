(function(exports){

  function ToDosModel(ToDoModel) {
    this._ToDoModel = ToDoModel;
    this._toDosModel = [];
  }

  ToDosModel.prototype = {
    list: function() {
      return this._toDosModel;
    },

    create: function(task) {
      var ToDoModel = new this._ToDoModel(task);
      this._toDosModel.push(ToDoModel);
      return ToDoModel;
    }
  };

  exports.ToDosModel = ToDosModel;
})(this);
