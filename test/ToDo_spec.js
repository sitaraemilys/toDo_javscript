var expect = require("chai").expect;
var ToDoLib = require("../app/toDo");
var ToDoModel = ToDoLib.ToDoModel;

describe("toDoModel", function(){

  var ToDo;

  beforeEach(function(){
    toDo = new ToDoModel("thank Matt");
  });

  it("stores a task", function(){
    expect(toDo._task).equal("thank Matt");
  });

  it("stores a complete boolean", function(){
    expect(toDo._complete).equal(false);
  });


});
