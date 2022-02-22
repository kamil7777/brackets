module.exports = function check(str, bracketsConfig) {
    let obj = {};
    let all = [];
    bracketsConfig.map((item) => {
        obj[item[0]] = item[1];
    })
    for (let i = 0; i < str.length; i++) {
        if (all.length === 0) {
            all.push(str[i]);
        } else {
            if (str[i] === obj[all[all.length - 1]]) {
                all.pop();
            } else {
                all.push(str[i]);
            }
        }
    }
    if (all.length === 0) {
        return true
    } else {
        return false
    }
}