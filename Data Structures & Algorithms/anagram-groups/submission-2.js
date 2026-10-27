class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let i = 0; i < strs.length; i++){
            const alphI = strs[i].split("").sort().join("")
            if(map.has(alphI)){
                map.get(alphI).push(strs[i])
            } else{
                map.set(alphI, [strs[i]])
            }

        }
        return Array.from(map.values())
    }
}
