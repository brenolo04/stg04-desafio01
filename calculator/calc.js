let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número:'))

let sum = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let restDiv = num1 % num2
let sum_is_par = sum % 2

alert(`A soma deles é: ${sum}`)
alert(`A subtração deles é: ${sub}`)
alert(`A multiplicação deles é: ${mult}`)
alert(`A divisão deles é: ${div}`)
alert(`O resto da divisao deles é: ${restDiv}`)

if(sum_is_par == 0){
  alert('A soma deles é par')
}
else{
  alert('A soma deles é impar')
}

if(num1 == num2){
  alert('Os dois valores inseridos são iguais')
}
else{
  alert('Os dois valores inseridos são diferentes')
}