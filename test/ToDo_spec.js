var expect = require("chai").expect;
var ToDoModel = require("../app/toDo").ToDoModel;

describe("toDo", function(){

  it("stores a task", function(){
    var toDo = new ToDoModel("thank Matt");
    expect(toDo._task).equal("thank Matt");
  });


});