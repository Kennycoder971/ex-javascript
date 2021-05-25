function longestWord (phrase){
    let newPhraseArr = phrase.split(' ')
    return newPhraseArr.sort((a, b) => b.length - a.length)[0]
}
console.log(longestWord('Tutorial Développement Web'));