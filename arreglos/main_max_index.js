//obtener el indice del minimo/maximo

let a = [4, 8, 1, 5, 10, 3]
console.log(getMinIndex(a))
console.log(getMaxIndex(a))

function getMinIndex(a){
    let min = a[0]
    let minIndex = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i]
            minIndex = i
    }
}
     return minIndex
}

function getMaxIndex(a){
    let max = a[0]
    let maxIndex = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
            maxIndex = i
    }
}
     return maxIndex
}