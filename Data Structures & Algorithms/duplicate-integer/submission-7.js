class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //Primeiro devo percorrer o array de números
        //Durante cada percorrida eu verifico se existe no map
        //Se o número atual existir return true
        //Se não existir continua percorrendo e adiciona no map
        //Ao terminar fora da repetição, return false
        //Tempo o(n) execução o(n)

        const mapped = new Set();

        for(let i = 0; i < nums.length; i++){
            if(mapped.has(nums[i])){
                return true;
            }
            mapped.add(nums[i]);
        }
        return false;
    }
}
