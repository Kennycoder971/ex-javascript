const toMaj = (string) => {
    return string.replace(/[a-z]+/gi, (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
}


console.log(toMaj('le corbeau et le renard'));