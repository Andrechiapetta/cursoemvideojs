let amigo = {nome: `José`,
sexo: `M`,
peso: 85.4,
engordar(p=0){
    amigo.peso += p
}}

console.table(amigo)
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)