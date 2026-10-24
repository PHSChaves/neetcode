    class Solution {
        /**
         * @param {string} s
         * @param {string} t
         * @return {boolean}
         */
        isAnagram(s, t) {
            const checked = new Map();
            let final = true;
            if(s.length !== t.length) {
                final = false
                return final
            }

            for(let i = 0; i < s.length; i++){
                    if(checked.has(s[i])){
                        checked.set(s[i], checked.get(s[i])+1)
                    } else (
                        checked.set(s[i], 1)
                    )

                    if(checked.has(t[i])){
                        checked.set(t[i], checked.get(t[i])-1)
                    } else(
                        checked.set(t[i], -1)
                    )
                
            }
            checked.forEach((item) => {
                if(item !== 0) final = false;
            })

            return final
        }
    }
