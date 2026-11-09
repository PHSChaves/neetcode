class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
            criar um map para guardar os valores que aparecem mais vezes
            por ex: dado const nums = [1, 1, 1, 2, 3, 3]
            minha saida tem que ser 1 -> 3 | 2 -> 1 | 3 -> 2
            aqui tenho que fazer um sort para deixar eles na ordem correta

        */

        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1)
            } else {
                map.set(nums[i], 1)
            }
        }

        const sortedArray = Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k)

        return sortedArray.map((item)=>
            item[0]
        )
    }
}
