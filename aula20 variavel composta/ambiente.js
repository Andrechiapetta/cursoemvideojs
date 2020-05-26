let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7)
num.length
num.sort()

console.log(`Nosso vetor é ${num} `)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (i = 0;i < num.length;i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for (i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

let pos = num.indexOf(2)
if (pos == -1) {
    console.log(`O valor não foi encontrado!!!`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}
