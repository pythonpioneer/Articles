// creating a dictionary type
export interface dictionary {
    [key: string]: any;
}

// here, we have a user object of dictionary type
const user: dictionary = {
    name: "Hritik",
    email: "gfg@gmail.com",
    isActive: true,
    mobile: 9876543210,
}

// convert this dictionary into array
const keys = Object.keys(user);
const values = Object.values(user);
const arrOfArr = Object.entries(user);
const arrOfObj = Object.entries(user).map(([key, value]) => {
    return { key, value };
});

// results of every methods
console.log("array of all keys");
console.log(keys);
console.log();

console.log("array of all values");
console.log(values);
console.log();

console.log("array of arrays containing key, value pairs");
console.log(arrOfArr);
console.log();

console.log("array of objects containing key, value pairs");
console.log(arrOfObj);


/** here you will find the output of the above code

array of all keys
[ 'name', 'email', 'isActive', 'mobile' ]

array of all values
[ 'Hritik', 'gfg@gmail.com', true, 9876543210 ]

array of arrays containing key, value pairs
[
  [ 'name', 'Hritik' ],
  [ 'email', 'gfg@gmail.com' ],
  [ 'isActive', true ],
  [ 'mobile', 9876543210 ]
]

array of objects containing key, value pairs
[
  { key: 'name', value: 'Hritik' },
  { key: 'email', value: 'gfg@gmail.com' },
  { key: 'isActive', value: true },
  { key: 'mobile', value: 9876543210 }
]
*/
