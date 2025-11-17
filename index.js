let ismlar = ['Sanjarbek', 'Sarvarbek', 'Avazbek']


let ism = 'avzbek'
ism = 'Avazbek'

console.log(ismlar[1])
console.log(ismlar.length)
console.log(ismlar.includes('Avazbek'))




function kabisaCheck(year) {
    if (year % 4 == 0){
        if (year % 100 == 0){
          return true
        } else {
            if (year % 400 == 0) {
                return false
            } else {
                return true
            }
        }
    } else {
        return false
    }
}

document.querySelector('button').addEventListener('click' , function(e) {
    e.preventDefault()
    let yil = document.querySelector('#year').value 
    let h2 = document.querySelector('#result')

    if (kabisaCheck(yil) == true) {
        h2.innerText = yil + ' kabisa yil'
        
    } else {
        h2.innerText = yil + ' kabisa yil emas'
    }
})
// let yil = prompt ('Yilni kiriting:')
// if (kabisaCheck(yil) == true) {
//     alert(yil + 'Kabisa yil')
// } else {
//     alert(yil + 'Kabisa yil emas')
// }