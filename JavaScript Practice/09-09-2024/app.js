console.log("javaScript Operators");
// 4. String Operators
{
    let a = "10"
    let b = "20"
    console.log(a > b);
}
{
    let a = "Hi"
    let b = "hi"
    console.log(a == b);
}
{
    let a = "A"
    let b = "a"
    console.log(a > b); // 56 > 97
    console.log(a < b); // 97 < 56
}
{
    let a = "Hi"
    let b = "Hi"
    console.log(a == b); // true
}

// 5. JavaScript Operators
// logical operators are used to determine the logic between variables or values

// Logical and -> && => always both condition must be true otherwise it will give false
{
    let a = 10;
    let b = 20;
    console.log(a < b && b > a) // true
    console.log(a > b && b > a) // false
}
// Logical or -> || => one condition must be true it will give you true
{
    let a = 10;
    let b = 20;
    console.log(a < 20 || b < 10); // true
    console.log(a > 20 || b < 10); // false
}

// Bitwise operator -> &, |
{
    let a = 10;
    let b = 20;
    console.log(a);
}

// ******************************************

// String => String is collection of characters
// ! ways to create a string
// ? 1. Single quotes
{
    let single = 'Hello Single Quotes'
    console.log(single);
}
// ? 2. Double quotes
{
    let double = "Hello Doble Quotes"
    console.log(double);
}
// ? 3. Back tick
{
    let backTick = `Hello Back Ticks`
    console.log(backTick);
}
// ? 4. String Object
{
    let stringObj = new String("String Object");
    console.log(stringObj);
    console.log(stringObj.charAt(5));
}
// ? 5. String Function
{
    let stringFunction = String("String Object");
    console.log(stringFunction);
}

// & String Methods
// ! 1) length -> property
{
    let str = "hello";
    console.log(str.length);
}
// ! 2) at ->method
{
    let str = "hello"
    console.log(str.at(4));
}
// ! 3) chatAt ->method
{
    let str = "hello"
    console.log(str.charAt(2));
}
// ! 4) charCodeAt ->method
{
    let str = "hello"
    console.log(str.charCodeAt(3));
}
// ! 5) [] -> property access like array[]
{
    let str = "hello"
    console.log(str[1]);
}