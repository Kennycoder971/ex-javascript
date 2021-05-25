const startByAorD = (str) => {
    return /[ad]/i.test(str[0])
}
const hasAt = (str) => {
    return /@/.test(str)
}
const hasNumber = (str) => {
    return /\d/.test(str)
}

const replaceNumByAst = (str) => {
    return str.replace(/\d/g, '*')
}
console.log(startByAorD('23'))
console.log(startByAorD('deja vu'))
console.log('-----------');
console.log(hasAt('gsdfqsdf'))
console.log(hasAt('hello@gmail.com'))
console.log('-----------');
console.log(hasNumber('123'));
console.log(hasNumber('abc'));
console.log('-----------');
console.log(replaceNumByAst('fsdf123qsdf@ 2?'));