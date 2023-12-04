/* const res = fetch('http://localhost:3000/users')

res
    .then(res => res.json())
    .then(data => console.log(data)) */

const myTable = document.querySelector('table')


const res = fetch('http://localhost:3000/users')

res
    .then(res => res.json())
    .then(data => {
        console.log("got the data")
        data.forEach((user, index) => {
            const trEl = document.createElement('tr')
            const tdId = document.createElement('td')
            const tdUsername = document.createElement('td')
            const tdEmail = document.createElement('td')
            const tdAge = document.createElement('td')
            const tdCountry = document.createElement('td')
            const tdDel = document.createElement('td')
            tdId.innerText = index
            tdUsername.innerText = user.username
            tdEmail.innerText = user.email
            tdAge.innerText = user.age
            tdCountry.innerText = user.city
            tdDel.innerHTML = '<button id="delBtn">Del</button>'

            trEl.appendChild(tdId)
            trEl.appendChild(tdUsername)
            trEl.appendChild(tdEmail)
            trEl.appendChild(tdAge)
            trEl.appendChild(tdCountry)
            trEl.appendChild(tdDel)
            myTable.appendChild(trEl)
        })
        const delBtns = document.querySelectorAll('#delBtn')


        delBtns.forEach((btn, index) => {
            btn.addEventListener("click", function(e) {
                e.preventDefault()
                /* console.log(e.target.parentElement.parentElement)
                let deletedEl = e.target.parentElement.parentElement
                deletedEl.remove() */
                const res = fetch(`http://localhost:3000/users/${index+1}`, {
                    method: 'DELETE',

                })
            })
        })
})
