class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //Primeiro devo percorrer o array de números
        //Durante cada percorrida eu adiciono num map
        //Se o número atual existir return true
        //Se não existir continua percorrendo
        //Ao terminar fora da repetição, return false

        const mapped = new Map();

        for(let i = 0; i < nums.length; i++){
            if(mapped.has(nums[i])){
                return true;
            }
            mapped.set(nums[i]);
        }
        return false;
    }
}
