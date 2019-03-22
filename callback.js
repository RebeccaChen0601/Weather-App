const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude : 0,
            longtitude: 0
        }
        callback(data)
    }, 2000)
} 

geocode('Philadelphia', (data) => {
    console.log(data)
})

//add func practice

const add = (number1, number2, callback) => {
    setTimeout(() => {
        callback(number1 + number2)
    }, 2000)
}

add(1, 4, callback = (sum) => {
    console.log(sum)
})