function warofminions(minions) {
    let st = [];
    let i = 0;
    
    while (i < minions.length) {
        if (st.length === 0 || st[st.length - 1] !== minions[i]) {
            st.push(minions[i]);
        } else {
            while (i < minions.length && st[st.length - 1] === minions[i]) {
                i++;
            }
            st.pop();
        }
    }

    // Filter out only vowels
    let vowels = "aeiou";
    let result = st.filter(minion => vowels.includes(minion));
    
    if (result.length === 0) {
        return "-1";
    } else {
        return result.join("");
    }
}

let minionstr = "aabccddde";
console.log(warofminions(minionstr));  // Output should only show the surviving vowels



// minions are of 26 types, from "a" to "z". if two minions of same type finds themselves 
// beside each other ,they will kill each other. 
// You are given a string of minions.you need to find the final surviving string of minions 
// after all the killings i.e. Further No minions will kill other minion.if no minion survied 
// a after all the fighting, print "-1"