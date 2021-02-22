const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const m1 = document.querySelector('#p1')
    const m2 = document.querySelector('#p2')
    const m3 = document.querySelector('#p3')
    const m4 = document.querySelector('#p4')
    const m5 = document.querySelector('#p5')
    const m6 = document.querySelector('#p6')
    m1.textContent = 'Loading...'
    m2.textContent = ''
    m3.textContent = ''
    m4.textContent = ''
    m5.textContent = ''
    m6.textContent = ''
    fetch('/weather?address=' + location).then(res => {
        res.json().then(data => {
            if (data.error) {
                console.log('error occured', data)
                m1.textContent = data.error
            } else {
                m1.textContent = `Location : ${data.location}`
                m2.textContent = `Address : ${data.address}`
                m3.textContent = `Date & Time : ${data.response.location.localtime}`
                m4.textContent = `Temperature : ${data.response.current.temperature} degree C`
                m5.textContent = `Humidity : ${data.response.current.humidity}%`
                m6.textContent = `Chances of Rain : ${data.response.current.precip}%`
                search.textContent = ''
            }
        })

    })
})


