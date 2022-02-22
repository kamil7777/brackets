function check(str, bracketsConfig) {
    let obj = {};
    let arr = [];
    bracketsConfig.map((item) => {
        obj[item[0]] = item[1];
    })

    for (let i = 0; i < str.length; i++) {
        if (arr.length === 0) {
            arr.push(str[i]);
        } else {
            if (str[i] === obj[arr[arr.length - 1]]) {
                arr.pop();
            } else {
                arr.push(str[i]);
            }
        }
    }
    if (arr.length === 0) {
        return true
    } else {
        return false
    }
}

str = '())(';
bracketsConfig = [
    ['(', ')']
];
console.log(check(str, bracketsConfig))