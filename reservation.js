const typeV = document.getElementById('type');
const numbersDay = document.getElementById('number_day');


// const elec = document.querySelector('.electric_form')
// const hyb = document.querySelector('.hybride_form')
// const essen = document.querySelector('.essence_form')
// const diesel = document.querySelector('.diesel_form')
const powerselect = document.querySelector('#power_select')


let arr = [];

const tupeBoite =document.querySelector('#biote_vitesse')

typeV.addEventListener('change',(e)=>{
    const typeValue = typeV.value;
    const numbersday =numbersDay.value;
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
        tupeBoite.innerHTML = `<p id="boite_v">Manuelle</p>`;
        power.innerHTML = `
        <select id="power_select" name="type">
        <option value="" selected>chosse....</option>
        <option value="electric">Electric</option>
        <option value="hybride">Hybride</option>
        <option value="essence">Essence</option>
        </select>
        `
        break;
        case'compact':
        // const priceCompact = 14;
        arr[0]="compact"
        arr[1]=14;
        arr[2]=arr[1]*arr[3]
        arr[4]="Manuelle"
        tupeBoite.innerHTML = `<p>Manuelle</p>`;
        power.innerHTML = `
        <select id="power_select" name="type">
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
        tupeBoite.innerHTML = `<p>Automatique</p>`;
        power.innerHTML = `
        <select id="power_select" name="type">
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
        tupeBoite.innerHTML = `<p>Manuelle</p>`;
        power.innerHTML = `
        <select id="power_select" name="type">
        <option value="" selected>chosse....</option>
        <option value="diesel">Diesel</option>
        `
        break;
        case'e_chantier':
        // const priceE_chantier = 900;
        arr[0]="e_chantier"
        arr[1]=900;
        arr[2]=arr[1]*arr[3]
        arr[4]="Manuelle"
        tupeBoite.innerHTML = `<p>Manuelle</p>`;
        power.innerHTML = `
        <select id="power_select" name="type">
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
        tupeBoite.innerHTML = `<p>Automatique</p>`;
        power.innerHTML = `
        <select id="power_select" name="type">
        <option value="" selected>chosse....</option>
        <option value="diesel">Diesel</option>
        `

        break;
        default :
        tupeBoite.innerHTML = `<p></p>`;
        
        break;
    }
    console.log(arr)
 
}) 

   
        console.log(powerS)
   






