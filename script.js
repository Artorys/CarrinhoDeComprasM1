const ul = document.createElement("ul")
const main = document.createElement("main")
const section = document.createElement("section")
const div1 = document.createElement("div")
const p1 = document.createElement('p')
const p2 = document.createElement("p")
const div2 = document.createElement("div")
const p3 = document.createElement('p')
const p4 = document.createElement("p")
const div3 = document.createElement("div")
const btn = document.createElement("button")
const a = document.createElement("a")
section.classList.add("compras")
div1.classList.add("header-compras")
p1.innerText = "Item"
p2.innerText = "Valor"
div1.append(p1,p2)
div2.classList.add("total-compras")
p3.innerText = "Total :"
p3.classList.add("total")
p4.innerText = "R$00"
p4.classList.add("preco")
div2.append(p3,p4)
div3.classList.add("div-finalizar")
btn.classList.add("btn-finalizar")
a.innerText = "Finalizar compra"
btn.appendChild(a)
section.append(div1,ul,div2,div3)
main.appendChild(section)
document.body.appendChild(main)


function listaDeCompras(arrayCompras){
    for(let i = 0;i < arrayCompras.length;i++)
{
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const button = document.createElement("button")
        const li = document.createElement("li")
        button.classList.add("btn")
        button.innerText = "Add + "
        li.classList.add("item")
        p1.classList.add("ps")
        p2.classList.add("ps")
        p2.id = arrayCompras[i].id
        p1.innerText = arrayCompras[i].name
        p2.innerText = `R$${arrayCompras[i].price.toFixed(2)}`
        li.append(p1,button,p2)
        ul.appendChild(li)
    }
}
function calcularPreco(){
    const totalText = document.querySelector(".total")
    let totalTotal = document.querySelector(".preco")
    let total = document.querySelector(".preco").innerText
    let valorTotal = total.replace(/[r$]/gi, "")
    valorTotal = parseFloat(valorTotal)
    let count = 0
    document.addEventListener("click", (e)=>{
        if(e.target.classList == "btn"){
            count++
            let valorItem = e.target.nextSibling.innerText
            valorItem = valorItem.replace("R$", "")
            valorItem = parseFloat(valorItem)
            console.log(valorItem)
            valorTotal += valorItem
            totalTotal.innerText = `R$${valorTotal.toFixed(2)}`
            if(count <= 1){
                totalText.innerText = `Total : ${count} produto`
            }
            else{
                totalText.innerText = `Total : ${count} produtos`
            }
        }
    
    })
}
listaDeCompras(productsCart)
calcularPreco()