/*
# Exercício 2
Crie um programa que peça um input de número para o usuário. 
Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```
*/

let num = Number(prompt("Digite seu numero:"))
let tabuada = [1,2,3,4,5,6,7,8,9,10]
    for (i in tabuada){
    console.log(`${num} x ${tabuada[i]} = ${num*tabuada[i]}`)
    
}