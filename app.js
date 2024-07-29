class App{
    saveHouse(){
        event.preventDefault()
        let newHouse = new Imovel()
        this.addHouseList(newHouse)
        this.clearForm()
    }

    addHouseList(newHouse){
        let newListValue = document.createElement("li")
        let infoHouse = ` Tipo do Imóvel: ${newHouse.type} (Área: ${newHouse.area} m²) `
        if(newHouse.isRented === 'Sim'){
            let tagIsRented = this.createRentedMark()
            newListValue.appendChild(tagIsRented)
        }
        newListValue.innerHTML += infoHouse
        let removeButton = this.createRemoveButton()
        newListValue.appendChild(removeButton)
        document.getElementById("house-list").appendChild(newListValue)
    }

    createRentedMark(){
        let tagIsRented = document.createElement("span")
        tagIsRented.innerText = "ALUGADO"
        tagIsRented.style.color = "black"
        tagIsRented.style.backgroundColor = "red"
        return tagIsRented
    }

    createRemoveButton(){
        let removeButton = document.createElement("button")
        removeButton.type = "button"
        removeButton.setAttribute('onclick', 'app.removeHouse()')
        removeButton.innerHTML = "Remover"
        return removeButton
    }

    removeHouse(){
        document.querySelector('ul#house-list').removeChild(event.target.parentNode)
    }

    clearForm(){
        document.querySelector("input[name='area']").value = ''
        document.querySelector("input[value='Não']").checked = false
        document.querySelector("input[value='Sim']").checked = false
    }
}