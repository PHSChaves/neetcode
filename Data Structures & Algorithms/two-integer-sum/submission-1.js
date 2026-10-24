class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Extremo: não ter soma, o array ser item único com o target
        //Declarar um map para guardar valores
        //intera no map
        //Dentro do laço somar o cada item do map com o i atual
        //se soma === target return [nums[map.get[ii]], nums[i]]
        //se não continue

        const checkedNums = new Map();
        let calculed;
        for(let i = 0; i < nums.length; i++){
            calculed = target-nums[i];
            console.log(nums.indexOf(calculed))
            
            console.log('nums', i)
            console.log('checkedNums',checkedNums.get(calculed))
            if(checkedNums.has(calculed)){

                return [checkedNums.get(calculed), i]
            }
            checkedNums.set(nums[i], i)
        }
    }
}
