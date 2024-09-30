function twoSum(nums, target) {
    
    const numMap = new Map();
    
    for(let i = 0; i < nums.length; i++){

        const complement = target - nums[i];

        if(numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    throw new Error('No two numbers add to the target');
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);