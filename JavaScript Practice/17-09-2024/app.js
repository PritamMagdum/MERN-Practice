// if Statement
{
    console.log("***********************if Statement***********************");
    let age = 18;
    if (age > 18 && age < 100) {
        console.log("You are eligible for vote");
    }
}
// if else Statement
{
    console.log("***********************if else Statement***********************");
    let age = 18;
    if (age > 18 && age < 100) {
        console.log("You are eligible for vote");
    } else {
        console.log("You are not eligible for vote");
    }
}
// if else ladder Statement
{
    console.log("***********************if else ladder***********************");
    let age = 18;
    if (age > 18 && age < 100) {
        console.log("You are eligible for vote");
    } else if (age == 18) {
        console.log("You are not eligible for vote! You can apply for next year");
    } else {
        console.log("You are not eligible")
    }
}
// for loop
{
    console.log("***********************for loop***********************");
    for (let i = 1; i <= 10; i++) {
        console.log(`The value of i is ${i}`);
    }
}
// while loop
{
    console.log("***********************while loop***********************");
    let a = 1;
    while (a <= 5) {
        a++;
        console.log(`The value of a is ${a}`);
    }
}
// do while
{
    console.log("***********************do while loop***********************");
    let a = 5;
    do {
        console.log(`The value of a is ${a}`);
        a++;
    } while (a <= 10) {
        console.log(`The value of a is ${a}`);
    };
}
// swith case statement
{
    console.log("***********************Switch case statement***********************");
    let day = parseInt(prompt("Enter the number of day"));
    switch (day) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;

        default:
            console.log("Enter something valid day");
            break;
    }
}