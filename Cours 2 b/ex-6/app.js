const output = document.querySelector('#output')

const createTable = (outputDiv) => {
    let n = Number(prompt('Entrez un nombre n valide'))

    while(isNaN(n)){
        n = Number(prompt('Entrez un nombre n'))
    }

    for (let i = 1; i < n +1; i++) {
        const table = document.createElement('table');
    
        for (let j = 1; j < 11; j++) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = `${j} x ${i} = ${j * i}`
            tr.appendChild(td)
            table.appendChild(tr)
        }

        outputDiv.appendChild(table)
    }
    
}
console.log(output);
createTable(output)