/*ARRAYS*/

let carros=['Ferrari','Palio','Corola','Bmw'];
    console.log(carros[2]);

let produto = [
    'Computador',
    'mouse',
    'Teclado',
    'Monitor'
]   
console.log(produto[2]); 

let ingredientes = [
    ['Arroz,', 'Macarrão','Feijão','Café'],
    ['Agua','Refrigerante','Suco'],
    'Quantidade', 'Valor','Estoque'
]

console.log(ingredientes[0]);
console.log(ingredientes[1]);
console.log(ingredientes[2]);
console.log(ingredientes);

/*OBJETOS*/

let carro2 = {
    nome:'Fiat',
    modelo: 'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("VRUMM VRUMM");
    },

    acelerar:function(){
        if(this.ligado == true){
            console.log("Hriiihhhhh");
        }
    }
   
    }
   
console.log(carro2);
console.log(carro2.nome);
console.log(carro2.modelo);
console.log(carro2.peso);
carro2.ligar();
carro2.acelerar();

let carro3 = {
    nome:'S10 2.8 T.DIESEL LTZ ',
    modelo:'CHEVROLET',
    valor:125.990,
    peso:'990kg',
    ligar:function(){
        console.log("Estou ligando");
    }


}

console.log(carro3);
carro3.ligar();



/*OBEJETOS DENTRO DE ARRAYS*/ 

let carros4 = [
    {nome:'Fiat',modelo:'Palio'},
    {nome:'Fiat',modelo:'Uno'},
    {nome:'Toyota',modelo:'Corola'},
    {nome:'Ferrari',modelo:'Corolla'},
    
];
console.log(carros4);
console.log(carros4[0]);
console.log(carros4[1].modelo);
console.log(carros4[2].nome);
console.log(carros4[3].modelo);