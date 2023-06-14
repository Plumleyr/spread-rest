// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  const numArray = [1,2,4,6,7, -56,8, -12];
  const strArray = ['a', 'c', 'g'];
  const newObj = {
    name: 'henry',
    job: 'cries',
    hobby: 'eating'
  }

  const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

  const findMin = (...nums) =>{
    let min = nums[0]
    nums.filter((num) => num > min ? min : min = num);
    return min;
  }

  const mergeObjects = (obj1 , obj2 ) =>{
    return newObj = {...obj1, ...obj2};
  }

  const doubleAndReturnArgs = (arr, ...nums) =>{
    for(let num of nums){
        arr.push(num * 2);
    }
    return arr;
  }

  const removeRandom = (...items) =>{
    const randomItem = Math.floor(Math.random() * items.length)
   return items.filter((item) =>{ 
    return item !== items[randomItem]});
  }

  const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
  }

  const addKeyValue = (obj,key,val) =>{
    return {...obj, [key]: val};
  }

  const removeKey = (obj, key) =>{
    let newObj = { ...obj}
    delete newObj[key]
    return newObj;
  }

  const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
  }

  const update = (obj,key,val) =>{
    return {...obj, [key]: val};
  }
