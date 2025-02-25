function maxHeight(trees, M) {
    let l = 0;
    let r = -Infinity;
    let result = 0;

    for (let i = 0; i < trees.length; i++) {
        r = Math.max(r, trees[i])
    }


    function getWood(h) {
        return trees.reduce((total, tree) => total + Math.max(0, tree - h), 0);
    }

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let wood = getWood(mid);

        if (wood >= M) {
            result = mid;
            l = mid + 1; // Try to find a higher height
        } else {
            r = mid - 1; // We need to cut lower
        }
    }

    return result;
}

let trees = [20, 15, 10, 17];
let M = 7;
console.log(maxHeight(trees, M));

