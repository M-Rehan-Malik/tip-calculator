
const billInput = document.querySelector('.bill-input');
const btnPercentArr = document.querySelectorAll('.button-percent');
const customPercent = document.querySelector('custom');
const personInput = document.querySelector('.people-input');
const tip = document.querySelector('.tip-per-person-amount');
const total = document.querySelector('.total-per-person-amount');
const reset = document.querySelector('.reset');
reset.onclick = resetFunction

function resetFunction() {
    location.reload()
}


btnPercentArr.forEach(btn=>btn.onclick = percentClick)

function percentClick() {
    btnPercentArr.forEach(btn=>{
        if (btn!==this) {
            if (btn.classList.length===3) btn.classList.remove('selected')
        }
    })
    this.classList.toggle('selected')

    if (billInput.value.replaceAll(' ', '')!==''&&personInput.value.replaceAll(' ', '')!==''){
        if (billInput.value.replaceAll(' ', '')!=='') {
            if(billInput.classList.length===2) billInput.classList.remove('error-input')
        }
        if (personInput.value.replaceAll(' ', '')!=='') {
            if(personInput.classList.length===2) personInput.classList.remove('error-input')
        }
    }
    else {
        if (billInput.value.replaceAll(' ', '')==='') {
            if(billInput.classList.length===1) billInput.classList.add('error-input')
        }
        if (personInput.value.replaceAll(' ', '')==='') {
            if(personInput.classList.length===1) personInput.classList.add('error-input')
        }
        
        this.classList.toggle('selected')
    }

    if (!isFinite(billInput.value.replaceAll(' ', '')%0.1)) {
        if (billInput.classList.length===1) billInput.classList.add('error-input')
        this.classList.toggle('selected')
    }

    if (personInput.value.replaceAll(' ', '')%1!==0) {
        if (personInput.classList.length===1) personInput.classList.add('error-input')
        this.classList.toggle('selected')
    }

    if (billInput.classList.length===1&&personInput.classList.length===1&&this.classList.length===3) {
        const billPerPerson = (billInput.value.replaceAll(' ', '')/personInput.value.replaceAll(' ', '')).toFixed(2);
        const tipPerPerson = ((this.textContent.replaceAll('%', '')/100)*billPerPerson).toFixed(2);
        const totalPerPerson = (Number(billPerPerson) + Number(tipPerPerson)).toFixed(2)
        tip.textContent = `$${tipPerPerson}`
        total.textContent = `$${totalPerPerson}`

        if (reset.classList.length===1) {
            reset.classList.add('enable')
        }
    }

}