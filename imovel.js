class Imovel{
    constructor(){
        this.type = document.querySelector("select[name='type'] option:checked").text
        this.area = document.querySelector("input[name='area']").value
        this.isRented = document.querySelector("input[name='isRented']:checked").value
    }
}