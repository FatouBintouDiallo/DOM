
function checknumber(){
    let prix = +document.getElementById('pu').innerText.split(' ')[0]
    console.log(prix)
    let quantite = +document.getElementById('qte').value
    console.log(quantite)
    let total= prix*quantite;
    document.getElementById('TOTAL').innerText = total + ('fr')

    let price= +document.getElementById('pu2').innerText.split(' ')[0]
    console.log(prix)
    let quanti = +document.getElementById('qte2').value
    console.log(quantite)
    let total2= price*quanti;
    document.getElementById('TOTAL2').innerText = total2 + ('fr')

    let pri= +document.getElementById('pu3').innerText.split(' ')[0]
    console.log(prix)
    let quantite1 = +document.getElementById('qte3').value
    console.log(quantite)
    let total3= pri*quantite1;
    document.getElementById('TOTAL3').innerText = total3 + ('fr')
    TOTAL()
}
function TOTAL(){
    let prix = +document.getElementById('pu').innerText.split(' ')[0]
    console.log(prix)
    let quantite = +document.getElementById('qte').value
    console.log(quantite)
    let total= prix*quantite;
    document.getElementById('TOTAL').innerText = total + ('fr')

    let price= +document.getElementById('pu2').innerText.split(' ')[0]
    console.log(prix)
    let quanti = +document.getElementById('qte2').value
    console.log(quantite)
    let total2= price*quanti;
    document.getElementById('TOTAL2').innerText = total2 + ('fr')

    let pri= +document.getElementById('pu3').innerText.split(' ')[0]
    console.log(prix)
    let quantite1 = +document.getElementById('qte3').value
    console.log(quantite)
    let total3= pri*quantite1;
    document.getElementById('TOTAL3').innerText = total3 + ('fr')

    let TOTAL5 = total + total2 + total3
    console.log(TOTAL5)
    document.getElementById("xxx").innerText= TOTAL5 + ('fr')
}
    function remove(toto){
      toto.parentElement.parentElement.remove()
    }
    function lisk(toto){
    }











