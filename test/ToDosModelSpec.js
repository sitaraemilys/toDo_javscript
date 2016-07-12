var expect = require("chai").expect;
var sinon = require("sinon");
var ToDosLib = require("../app/ToDosModel");
var ToDosModel = ToDosLib.ToDosModel;

  describe("ToDosModel", function(){

      it("should have no ToDos when instansiated", function(){
        var ToDos = new ToDosModel();
        expect(ToDos.list().length).equal(0);
      });

      it("should return ToDos when there are ToDos", function(){
        var ToDoModelMock = sinon.stub().returns({});
        var ToDos = new ToDosModel(ToDoModelMock);
        ToDos.create("Yoga");
        expect(ToDos.list().length).equal(1);
      });

  });
