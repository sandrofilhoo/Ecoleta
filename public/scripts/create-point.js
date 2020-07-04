

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")   
    
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for(  const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    } )
}
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value



    const indexOfSelectedState = event.target.selectedIndex
    stateInput.valure - event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        citySelect.innerHTML = ""


        for(  const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}



document
    .querySelector("select[name=uf")
    .addEventListener("change", getCities)
    
    
//itens de coleta
const itmsToCollect=document.querySelectorAll(".items-grid li")
for(const items of itmsToCollect){
    items.addEventListener("click",handleSelectedItem)
}
const collectesItems = document.querySelector("input[name=items]")

let selectedItems =[]

function handleSelectedItem(event){
    const itemLi = event.target
    //adicionar ou remover class
    itemLi.classList.toggle("selected")

    const itemId=itemLi.dataset.id
     //verificar de tem items selecionados e ou pegar
    const alreadySelected= selectedItems.findIndex(item => {
        const itemFound = item == itemId//isso e vdd ou falso
        return itemFound
    })
    //se tiver selecionado
    if(alreadySelected=>0){
        //tirar da seleçao
     const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId 
        return itemIsDifferent 
     })
     selectedItems = filteredItems
     //se n tiver adicionar
    }else{
        selectedItems.push(itemId)
   }
   collectesItems.value = selectedItems
}

        

