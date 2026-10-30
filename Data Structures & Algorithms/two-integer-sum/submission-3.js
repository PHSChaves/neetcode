class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*
        Criar um map
        calculo target - nums[i] dentro do for
        se existe return [maps.get(calc), i]
        se não mando para o map com o target como key e nums[i] como value
        */

        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            const calc = target - nums[i];

            if(map.has(calc)){
                return [map.get(calc), i]
            }
            map.set(nums[i], i)
        }
    }
}
