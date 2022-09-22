// funcion que retorne en num max de un array
const maxArr = (nums) =>{
    let numMax = nums [0];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > numMax) numMax = nums[i]              
    }
    return numMax    
}

console.log(maxArr ([3,1,7,0,-90]))

