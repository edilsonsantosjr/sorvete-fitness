
let obj = document.getElementById('img');
console.log(btn);

obj.onclick = () =>console.log('teste');


let ulSorvetes = document.querySelector("#products__presentation");

const sorvetes = [];


fetch("sorvetes.json").then((response) => {
    response.json().then((data) => {
        data.sorvetes.map((sorvete) => {
            sorvetes.push(sorvete);
        })
        renderSorvetes();
    })
});

 


const openModalInformation = () => {
    const modalMoreInformation = document.querySelector(".more__information__modal");
    if(modalMoreInformation.style.display == ''){
        modalMoreInformation.style.display = 'none';
    }
    console.log("Proximo é o resultado do display!")
    console.log(modalMoreInformation.style.display)
    console.log("Valeu!");
    if(modalMoreInformation.style.display == 'none'){
        modalMoreInformation.style.display = 'block';
    } else if(modalMoreInformation.style.display == 'block'){
        modalMoreInformation.style.display = 'none';
    }
};

const renderSorvetes = () => {
    console.log(sorvetes)
    sorvetes.map((sorvete) => {
        ulSorvetes.innerHTML += 
            `<li class="ice__cream__product">
                <img class="ice__cream__img" src=${sorvete.imagemURL} alt="sorvete de morango">
                <div class="product__card">
                    <p>${sorvete.nome}</p>
                    <p>${sorvete.litros}</p>
                    <p onclick="openModalInformation()" class="more__information">Saiba mais...</p>
                    <div class="more__information__modal" ></div>
                </div>
            </li>`

    })
}

const modalShop = document.querySelector(".modal__shop");
modalShop.style.display = 'none';

const openModal = () => {
    console.log("Valeu!");
    if(modalShop.style.display == 'none'){
        modalShop.style.display = 'block';
    } else if(modalShop.style.display == 'block'){
        modalShop.style.display = 'none';
    }
};