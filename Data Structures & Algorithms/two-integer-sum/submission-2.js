class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /* 
        criar um map
        faço subtração de target e nums[i]
        verifico no map se o valor da subtração existe no map
        se sim return [map.get(nums[i]), i]
        se não adiciono no map usando nums[i] como key e o index do valor como value
        */

        const map = new Map();

        for(let i = 0; i < nums.length; i++){

            const calc = target - nums[i];

            if(map.has(calc)){
                return [map.get(calc), i]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
