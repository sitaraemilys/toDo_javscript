var expect = require("chai").expect;
var ToDoLib = require("../app/toDo");
var ToDoModel = ToDoLib.ToDoModel;

describe("toDoModel", function(){

  var ToDo;

  beforeEach(function(){
    toDo = new ToDoModel("thank Matt");
  });

  it("allows creation of a new ToDo", function(){
    expect(toDo).instanceOf(ToDoModel);
  });

  it("completed status defaults to false", function(){
    expect(toDo.isComplete()).equal(false);
  });

  it("returns a task", function(){
    expect(toDo.task()).equal("thank Matt");
  });

});
