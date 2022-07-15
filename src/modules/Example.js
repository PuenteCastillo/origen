import $ from "jquery";

class Example {
  //? 1. describe and create/initiate our object

  constructor() {
    //Verables
    this.events();
  }

  //?events
  events() {
    let myObj = this;

    $(document).ready(function () {
      myObj.ExampleFunction();
    });
  }

  //? 3. methods (functions)
  ExampleFunction() {
    console.log("Hello world");
  }
}

export default Example;
