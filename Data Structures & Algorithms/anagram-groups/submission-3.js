class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapa = new Map();

        for(let i = 0; i < strs.length; i++){
            const splitted = strs[i].split('').sort().join('');
            
            if(mapa.has(splitted)){
                mapa.get(splitted).push(strs[i])
            } else {
                mapa.set(splitted, [strs[i]])
            }
        }
        return Array.from(mapa.values())
    }
}
