
function grpAnagramusingMap(strs) {
    let map = new Map();
    for (let words of strs) {
        let count = new Array(26).fill(0);
        for (c of words) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)]++
        }
        let key = count.join("#")

        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(words)
    }
    console.log(Array.from(map.values()))

}





let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
grpAnagramusingMap(strs);
