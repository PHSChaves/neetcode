class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //Casos extremos, input unico ou vazio, nesse cenário retorne o input ou "" dentro de []
        //Criar um map, dessa vez usaremos arrays
        //no index atual do for faço um split, sort, join e cadastro como valor no meu map, a chave é a palavra ordenada pelo sort e o valor as palavras que encaixam naquela chave
        //se a chave existe, faz um map.get e da um push no array com a nova palavra
        //Se a chave não existe map.set() com a palavra atual ordenada como chave e adiciono a palavra base como valor em []
        //Retorno é o values do map, como são arrays vai ser return [[arr1], [arr2] ...]

        const map = new Map();
        if(strs.length === 0){
            return [strs]
        }

        for(let i = 0; i < strs.length; i++){
            const key = strs[i].split('').sort().join('');

            if(map.has(key)){
                map.get(key).push(strs[i])
            } else {
                map.set(key, [strs[i]])
            }

        }

        return Array.from(map.values())
    }
}
