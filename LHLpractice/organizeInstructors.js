const organizeInstructors = function(instructors) {
    // Put your solution here
  };
  
//   console.log(organizeInstructors([
//     {name: "Samuel", course: "iOS"},
//     {name: "Victoria", course: "Web"},
//     {name: "Karim", course: "Web"},
//     {name: "Donald", course: "Web"}
//   ]));
//   console.log(organizeInstructors([
//     {name: "Brendan", course: "Blockchain"},
//     {name: "David", course: "Web"},
//     {name: "Martha", course: "iOS"},
//     {name: "Carlos", course: "Web"}
//   ]));


//   const array = [
//     {name: "Samuel", course: "iOS"},
//     {name: "Victoria", course: "Web"},
//     {name: "Karim", course: "Web"},
//     {name: "Donald", course: "Web"}
//   ]

//   let emptyArray = []
//   let arrangedArray = []
//   let coursesCurrated = {}
//   for(let item in array) {
//       console.log('courses: ', array[item].course)
//       emptyArray.push(array[item].course)
//       console.log('emptyArray: ', emptyArray);


//   }

//   let num1 = 0;
//   num2 = 1;
//   num3 = 2;

//   [num1, num2, num3] = [num3, num1, num2];
//   console.log(num1, num2, num3);

//   console.log('courses currated :', coursesCurrated);


const array = ['a', 'a', 'b', 'c', 'd', 'e', 'f', 'a', 'd', 'c', 'a', 'b'];


const arrayToObject = (object) => {
    let obj = {};
    let indexCount = 0;

    for (let letters of object) {
        obj = obj[object[letters]];
        console.log(obj);
    }

    // for(let i = 0; i < object.length; i++) {
    //     console.log('array at i',object[i]);
    //     if(object[i] > object[i]) {
    //         indexCount ++;
    //         console.log('index count: ', indexCount, 'object: ', object[i]);
    //     }
    // }
    // for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         const element = object[key];
    //         console.log(element);
    //     }
    // }

}

arrayToObject(array)