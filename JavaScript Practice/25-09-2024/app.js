var arr = arr = [10, 20, 30, 40, 50];

// for loop 
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    console.log(newArr);
}

// for of
{
    let newArr = [];
    let i = 0;
    for (const ele of arr) {
        newArr[i] = ele;
        i++;
    }
    console.log(newArr);
}

// for Each
{
    let newArr = [];
    let i = 0;
    arr.forEach(element => {
        newArr[i] = element;
        i++;
    });
    console.log(newArr);
}

// values()
{
    let arr = [10, 20, 30, 40, 50];
    let newArr = [];
    let i = 0;
    for (let ele of arr.values()) {
        newArr[i] = ele;
        i++;
    }
    console.log(newArr);
}

// arrayOf = []
{
    let newArr = [];
    newArr[0] = arr[0];
    newArr[1] = arr[1];
    newArr[2] = arr[2];
    newArr[3] = arr[3];
    newArr[4] = arr[4];
    console.log(newArr);
}

// map()
{
    let newArr = [];
    let i = 0;
    arr.map((ele) => {
        newArr[i] = ele;
        i++;
    })
    console.log(newArr);
}

// array should be [];

// pop();
{
    // let newArr = [];
    let arr = [10, 20, 30, 40, 50];

    for (let i = 0; i < arr.length; i++) {
        arr.pop();
    }
    // if (arr == null) {
    //     newArr = arr;
    // }
    console.log(arr);
}

// null 
{
    let arr = [10, 20, 30, 40, 50];
    let newArr = [];
    arr = null;
    newArr = arr;
    console.log(newArr);
}

// for-in()
{
    let arr = [10, 20, 30, 40, 50];
    for (let i in arr) {
        arr[i] = undefined;
    }
    console.log(arr);
}

// 


function addition(params) {
    
}