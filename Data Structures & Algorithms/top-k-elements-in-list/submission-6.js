class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
            criar um mapa com contagem chave = numero, value = vezes que apareceu, por exemplo key - 1 | value - 3 porque o número 1 apareceu 3 vezes
            após isso preciso fazer um splice e depois um sort, nesse sort passar uma func fazendo b - a 
            return map com item na posição 0
        */

        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1)
            } else {
                map.set(nums[i], 1)
            }
        }

        const sortedArr = Array.from(map).sort((a, b) => b[1] - a[1] ).splice(0, k)

        return sortedArr.map(item => 
            item[0]
        )
    }
}
