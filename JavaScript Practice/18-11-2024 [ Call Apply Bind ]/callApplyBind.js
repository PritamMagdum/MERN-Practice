// * call()
{
  let obj = {
    id: 101,
    name: "Pritam",
    add: "Banglore",
  };

  // console.log(obj);

  function demo() {
    console.log(this);
    console.log(this.id);
    console.log(this.name);
  }

  // demo(); =====> it will give you error

  // call()
  // demo.call(obj);
}

// * apply()
{
  let obj = {
    id: 101,
    name: "Pritam",
    add: "Banglore",
  };

  // console.log(obj);

  function demo(a, b, c) {
    console.log(this);
    console.log(this.id);
    console.log(this.name);
    console.log(a);
    console.log(b);
    console.log(c);
  }

  // demo(); =====> it will give you error

  // apply()
  // demo.apply(obj, [10, 20, 30]);
}

// * bind()
{
  const person = {
    name: "Alice",
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };

  let obj = {
    name: "Pritam",
  };
  const greetFunc = person.greet.bind(obj);

  greetFunc(); // Outputs: "Hello, Alice!"
}
