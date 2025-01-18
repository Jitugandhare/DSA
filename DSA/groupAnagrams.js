function groupAnagrams(strs) {

    let obj = {}
    for (let i = 0; i < strs.length; i++) {
        let res = strs[i].split("").sort().join("");
        if (obj[res] === undefined) {
            obj[res] = [strs[i]]
        } else {
            obj[res].push(strs[i])
        }
    }
    let ans = Object.values(obj)
    return ans.sort();
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let ans = groupAnagrams(strs);
console.log(ans)

// [ [ 'aet', 'aet', 'aet' ], [ 'ant', 'ant' ], [ 'abt' ] ] . this code gives this as output

// [["bat"],["nat","tan"],["ate","eat","tea"]] this should be output