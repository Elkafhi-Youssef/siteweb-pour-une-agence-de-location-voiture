const typeV = document.getElementById('type');
const numbersDay = document.getElementById('number_day');
const powerselect = document.querySelector('#power_select')
const firstname = document.querySelector('#fname');
const lastname = document.querySelector('#lname');
const submit = document.querySelector('.submit');


// const elec = document.querySelector('.electric_form')
// const hyb = document.querySelector('.hybride_form')
// const essen = document.querySelector('.essence_form')
// const diesel = document.querySelector('.diesel_form')


let arr = [];
console.log(firstname + " "+lastname)
const tupeBoite =document.querySelector('#biote_vitesse')

typeV.addEventListener('change',(e)=>{
    const typeValue = typeV.value;
    const numbersday =numbersDay.value;
    arr[6]=firstname.value
    arr[7]=lastname.value
    arr[3]=numbersday;
    switch(typeValue){
        case'moto':
        arr[0]="moto"
        arr[1]=10;
        arr[2]=arr[1]*arr[3]
        arr[4]="";
        tupeBoite.innerHTML = `<p></p>`;
        powerselect.innerHTML = `
        
        <option value="" selected>chosse....</option>
        <option value="electric">Electric</option>
        <option value="essence">Essence</option>
        `
        break;
        case'citadine':
        // const priceCitadine = 12;
        arr[0]="citadine"
        arr[1]=12;
        arr[2]=arr[1]*arr[3]
        arr[4]="Manuelle"
        tupeBoite.innerHTML = `<h4>boite vitesse</h4><p id="boite_v">Manuelle</p>`;
        powerselect.innerHTML = `
        
        <option value="" selected>chosse....</option>
       
        <option value="electric">Electric</option>
        <option value="hybride">Hybride</option>
        <option value="essence">Essence</option>
       
        `
        break;
        case'compact':
        // const priceCompact = 14;
        arr[0]="compact"
        arr[1]=14;
        arr[2]=arr[1]*arr[3]
        arr[4]="Manuelle"
        tupeBoite.innerHTML = `<h4>boite vitesse</h4><p>Manuelle</p>`;
        powerselect.innerHTML = `
        <option value="" selected>chosse....</option>
       
        <option value="hybride">Hybride</option>
        <option value="essence">Essence</option>
        <option value="diesel">Diesel</option>
        `
        break;
        case'berline':
        // const priceBerlin = 20;
        arr[0]="berline"
        arr[1]=20;
        arr[2]=arr[1]*arr[3]
        arr[4]="Automatique"
        tupeBoite.innerHTML = `<h4>boite vitesse</h4><p>Automatique</p>`;
        powerselect.innerHTML = `
        <option value="" selected>chosse....</option>
    
        <option value="hybride">Hybride</option>
        <option value="essence">Essence</option>
        <option value="diesel">Diesel</option>
        `
        break;
        case'utilitaire':
        // const priceUtilitaire = 16;
        arr[0]="utilitaire"
        arr[1]=16;
        arr[2]=arr[1]*arr[3]
        arr[4]="Manuelle"
        tupeBoite.innerHTML = `<h4>boite vitesse</h4><p>Manuelle</p>`;
        power.innerHTML = `
        <option  selected>chosse....</option>

        <option value="diesel">Diesel</option>
        `
        break;
        case'e_chantier':
        // const priceE_chantier = 900;
        arr[0]="e_chantier"
        arr[1]=900;
        arr[2]=arr[1]*arr[3]
        arr[4]="Manuelle"
        tupeBoite.innerHTML = `<h4>boite vitesse</h4><p>Manuelle</p>`;
        powerselect.innerHTML = `
        
        <option value="" selected>chosse....</option>
        <option value="essence">Essence</option>
        <option value="diesel">Diesel</option>
        `
        break;
        case'camion':
        // const priceamion = 250;
        arr[0]="camion"
        arr[1]=250;
        arr[2]=arr[1]*arr[3]
        arr[4]="Automatique"
        tupeBoite.innerHTML = `<h4>boite vitesse</h4>
        <p>Automatique</p>`;
        powerselect.innerHTML = `
        <option value="" selected>chosse....</option>
        <option value="diesel">Diesel</option>
        `

        break;
        default :
        tupeBoite.innerHTML = `<p></p>`;
        
        break;
    }
console.log(arr)

    if(arr[4]=="Automatique"){
        arr[2]=arr[2]+0.19
    }
}) 


function getPower(){
    powerselect.value;
    console.log(powerselect.value);
    arr[5]=powerselect.value
    if(arr[5]=="electric"){
        arr[2]=arr[2]+0.05
    }else if(arr[5]=="essence"){
        arr[2]=arr[2]+0.14 
    }else if(arr[5]=="hybride"){
        arr[2]=arr[2]+0.09 
    }else if(arr[5]=="diesel"){
        arr[2]=arr[2]+0.21
    }
    if(arr[4]=="Automatique"){
        arr[2]=arr[2]+0.19
    }
console.log(arr)

}

console.log(arr)
   

submit.addEventListener('click',(e)=>{
    alert(`name:${arr[6]}${arr[7]}\n type vihecule:${arr[0]}`)
})




