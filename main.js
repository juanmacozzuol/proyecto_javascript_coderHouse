class character
{
    constructor(raza,subraza,atributos=[],atributos_raza=[])
    {
        this.raza=raza;
        this.subraza=subraza;
        this.atributos=atributos;  
        this.atributos_raza=atributos_raza;
    }
    //este metodo se encarga de bloquear stats asignados en otros selects hasta que lo liberes, asi no podes usar valores repetidos
    //segun vi, con jquery se puede resolver mucho ma facil, pero como todavia no lo vimos, no tengo idea
    asignarStats()
    {       
        let s =[document.getElementById("die-str"),document.getElementById("die-dex"),document.getElementById("die-con"),document.getElementById("die-int"),document.getElementById("die-wis"),document.getElementById("die-cha")];
        for(let i=0;i<6;i++)
        {
            s[i].addEventListener('change',indice);
        }

        function indice(a)
        {

            let index;
            switch(parseInt(a.target.name))
            
            {
                case 0:
                    index=s[0].selectedIndex;
                     
                    if(index==0)
                    {
                        for(let k=0;k<6;k++)
                        {
                            let opt =s[k].getElementsByTagName("option");
                       
                            opt[index_p[0]].disabled=false;
                        }

                    }

                    for(let k=0;k<6;k++)
                    {
                        let opt =s[k].getElementsByTagName("option");
                        opt[index].disabled=true;
                     index_p[0]=index;
                
                    }

                break;

                case 1:
                   
                    index=s[1].selectedIndex;
                    if(index==0)
                    {
                        for(let k=0;k<6;k++)
                        {
                            let opt =s[k].getElementsByTagName("option");
                        
                            opt[index_p[1]].disabled=false;
                        }

                    }
                     
                    for(let k=0;k<6;k++)
                    {
                        let opt =s[k].getElementsByTagName("option");
                        opt[index].disabled=true;
                        index_p[1]=index;
                    }

                break;

                case 2:
                   
                    index=s[2].selectedIndex;

                    if(index==0)
                    {
                        for(let k=0;k<6;k++)
                        {
                            let opt =s[k].getElementsByTagName("option");
                            opt[index_p[2]].disabled=false;
                        }

                    }
                    for(let k=0;k<6;k++)
                    {
                    let opt =s[k].getElementsByTagName("option");
                    opt[index].disabled=true;
                    index_p[2]=index;
                    }

                break;

                case 3:
                   
                     index=s[3].selectedIndex;

                     if(index==0)
                    {
                        for(let k=0;k<6;k++)
                        {
                        let opt =s[k].getElementsByTagName("option");
                       
                        opt[index_p[3]].disabled=false;
                        }

                    }
                    for(let k=0;k<6;k++)
                    {
                        let opt =s[k].getElementsByTagName("option");
                        opt[index].disabled=true;
                        index_p[3]=index;
                    }

                break;

                case 4:
                   
                    index=s[4].selectedIndex;
                    if(index==0)
                    {
                        for(let k=0;k<6;k++)
                        {
                        let opt =s[k].getElementsByTagName("option");
                       
                        opt[index_p[4]].disabled=false;
                        }

                    }
                    for(let k=0;k<6;k++)
                    {
                    let opt =s[k].getElementsByTagName("option");
                    opt[index].disabled=true;
                    index_p[4]=index;
                    }

                break;

                case 5:
                   
                index=s[5].selectedIndex;
                if(index==0)
                {
                    for(let k=0;k<6;k++)
                    {
                        let opt =s[k].getElementsByTagName("option");
                    
                        opt[index_p[5]].disabled=false;
                    }

                }
                    for(let k=0;k<6;k++)
                    {
                    let opt =s[k].getElementsByTagName("option");
                    opt[index].disabled=true;
                    index_p[5]=index;
                }

                break;
            }
       
        }
    }
}

//declaracion de variables, tuve que usar varias globales de validacion
const character1 = new character(0,0,[0,0,0,0,0,0],[0,0,0,0,0,0]);
var index_p=[0,0,0,0,0,0];
//Cada Personaje de D&D tiene una raza
var raza= document.getElementById("raza");
let roll = document.createElement("button");
roll.innerHTML=("Roll the dice!");
roll.setAttribute("id","roll");
let pestaña4 =document.getElementById("resultado_dados");
pestaña4.appendChild(roll);

let rolling = document.getElementById("roll");
rolling.onclick=()=>{ rolled()};

var val=[0,0];
var valu=0;
var clear=0;
character1.asignarStats();

//esta funcion lo unico que hace es guardar la raza y crea los select a mostrar para las subrazas
function stats(race)
{

    let validacion=0;
     
 
    switch(race)
        
    {
        
        case "dragonborn":
            

            character1.raza="Dragonborn";
        
            let subracedr=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracedr){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
  
        break;
        
        case "dwarf":
            
            
            character1.raza="Dwarf";
            

            let subraced=["Hill Dwarf","Mountain Dwarf","Underdark Dwarf","Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraced){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;

        break;
        

        case "elf":

            character1.raza="Elf";
            let subracee=["High Elf","Wood Elf","Dark Elf","Sin Subraza"];

            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracee){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
     
        break;
        

        case "gnome":

            character1.raza="Gnome";
            let subraceg=["Forest Gnome","Rock Gnome","Sin Subraza"];

            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraceg){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
        break;
        

        case "halfling":

            character1.raza="Halfling";
            let subraceh=["Lightfoot Halfling","Stout Halfling","Sin Subraza"];

            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraceh){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
           
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
     
        break;
        

        case "half-orc":
            character1.raza="Half-Orc";
            let subraceha=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraceha){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
           
        break;
        

        case "human":
            character1.raza="Human";

            let subracehu=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracehu){

                contenido += "<option value= '"+subraza.toLowerCase()+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
       
        break;
        

        case "tiefling":
            character1.raza="Tiefling";
            let subracet=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracet){

                contenido += "<option value= '  " + subraza.toLowerCase() + " '  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            
        break;
                
        default:
          
        break;
    }
    
    
}   


//este evento, muestra lo seleccionado (se encarga tambien de borrar selecciones previas para solo ver la actual)

raza.onchange =() =>{

    let raza= document.getElementById("raza").value;
    
    
    
    stats(raza);


    if(val[1]==1)

    {
        let element= document.getElementsByTagName("h3");
        element[0].parentNode.removeChild(element[0]);
        val[1]=0;
    }

    if((raza!="Choose a race"))
  
    {   
        if(val[0]==1){

            let element= document.getElementsByTagName("h2");
            element[0].parentNode.removeChild(element[0]);
            if(parseInt(subraza.selectedIndex!=0))
            {
                document.getElementById("atr0").remove();
                document.getElementById("atr1").remove();
                document.getElementById("atr2").remove();
                document.getElementById("atr3").remove();
                document.getElementById("atr4").remove();
                document.getElementById("atr5").remove();
            
            }


        }
       
        let titulo2 = document.createElement("h2");
        titulo2.innerHTML="Raza:" +character1.raza;
        let pestaña = document.getElementById("resultado_raza");
        pestaña.appendChild(titulo2);
        val[0]=1;
    }
}


var subraza= document.getElementById("subraza");
//aca asigna los atributos correspondientes a raza y subraza y guarda la subraza y en caso de que ya hayas puesto stats, te los vuelve a habilitar todos
subraza.onchange =() =>{

    let subraza= document.getElementById("subraza").value;
 
    character1.atributos_raza=[0,0,0,0,0,0];

    switch(subraza){

        case "hill dwarf":
            character1.atributos_raza[2]=2;
            character1.atributos_raza[4]=1;
            character1.subraza="Hill Dwarf";
            
        break;

        case "mountain dwarf":
            character1.atributos_raza[2]=2;
            character1.atributos_raza[0]=2;
            character1.subraza="Mountain Dwarf";

        break;

        case "underdark dwarf":
            character1.atributos_raza[2]=2;
            character1.atributos_raza[0]=1;
            character1.subraza="Underdark Dwarf";

        break;

        case "high elf":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[3]=1;
            character1.subraza="High Elf";

        break;

        case "wood elf":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[4]=1;
            character1.subraza="Wood Elf";

        break;

        case "dark elf":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[5]=1;
            character1.subraza="Dark Elf";

        break;

        case "forest gnome":
            character1.atributos_raza[3]=2;
            character1.atributos_raza[1]=1;
            character1.subraza="Forest Gnome";

        break;

        case "rock gnome":
            character1.atributos_raza[3]=2;
            character1.atributos_raza[2]=1;
            character1.subraza="Rock Gnome";

        break;

        case "lightfoot halfling":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[5]=1;
            character1.subraza="Lightfoot Halfling";

        break;

        case "stout halfling":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[2]=1;
            character1.subraza="Stout Halfling";

        break;

        case "sin subraza":

            character1.subraza="N/A";
           
            switch(character1.raza.toLowerCase())
        
            {
                
                case "dragonborn":
                    
                    character1.atributos_raza[0]=2;
                    character1.atributos_raza[5]=1;
              
                break;
                
                case "dwarf":
                    
                    character1.atributos_raza[2]=2;

        
                break;
                
        
                case "elf":
                    character1.atributos_raza[1]=2;
                   
                break;
                
        
                case "gnome":
                    character1.atributos_raza[3]=2;
                   
                    
                break;
                
        
                case "halfling":
                    character1.atributos_raza[1]=2;
                  
                    
                break;
                
        
                case "half-orc":
                   
                    character1.atributos_raza[0]=2;
                    character1.atributos_raza[2]=1;
                  
                break;
                
        
                case "human":
                  
                    character1.atributos_raza[0]=1;
                    character1.atributos_raza[1]=1;
                    character1.atributos_raza[2]=1;
                    character1.atributos_raza[3]=1;
                    character1.atributos_raza[4]=1;
                    character1.atributos_raza[5]=1;
                
                break;
                
        
                case "tiefling":
                    
                    character1.atributos_raza[5]=2;
                    character1.atributos_raza[3]=1;
 
                break;
                        
                default:
        
                break;
            }
        
        break;

    }



    if(subraza!="Choose a subrace")
    {
        
        if(val[1]==1){

            let elemento= document.getElementsByTagName("h3");
            elemento[0].parentNode.removeChild(elemento[0]);
            document.getElementById("atr0").remove();
            document.getElementById("atr1").remove();
            document.getElementById("atr2").remove();
            document.getElementById("atr3").remove();
            document.getElementById("atr4").remove();
            document.getElementById("atr5").remove();
        }
   
        let titulo3 = document.createElement("h3");
        titulo3.innerHTML="Subraza:" +character1.subraza;
        let pestaña1 = document.getElementById("resultado_raza");
        pestaña1.appendChild(titulo3);

        for(let i=0;i<6;i++){
        let  atr = "<p class='atr col' id='atr" +i+"' >" + character1.atributos_raza[i] +"</p>" ;
        document.getElementById("at"+i+"").innerHTML+=atr;
        }
        
        val[1]=1;
    }

    if(clear!=0)
    {
        let ss =[document.getElementById("die-str"),
        document.getElementById("die-dex"),
        document.getElementById("die-con"),
        document.getElementById("die-int"),
        document.getElementById("die-wis"),
        document.getElementById("die-cha")]


        for(let i=0;i<6;i++)
        {

            let habilitar = ss[i].getElementsByTagName("option");
            for(let g=0;g<6;g++)

            {
                habilitar[g].disabled=false;


            }
        }
    }

    character1.asignarStats();
}



//cuando se apreta el boton ready bloquea los select y te muestra el resultado definitivo de cada stat. 
//me falta ver porque pone en blanco los selects de stat, no lo pude descubrir todavia
//tambien corre la funcion enviar datos, que envía raza y subraza con JSON

document.getElementById('ready').onclick = function() 
{
    document.getElementById("raza").setAttribute("disabled","disabled");
    document.getElementById("subraza").setAttribute("disabled","disabled");
    document.getElementById("die-str").setAttribute("disabled","disabled");
    document.getElementById("die-dex").setAttribute("disabled","disabled");
    document.getElementById("die-con").setAttribute("disabled","disabled");
    document.getElementById("die-int").setAttribute("disabled","disabled");
    document.getElementById("die-wis").setAttribute("disabled","disabled");
    document.getElementById("die-cha").setAttribute("disabled","disabled");
    document.getElementById('ready').setAttribute("disabled","disabled");
  let r1 =  document.getElementById("die-str");
  let sum1 =parseInt(r1.options[r1.selectedIndex].innerHTML) + character1.atributos_raza[0];
  let resultado1 ="<p class='col'>=" +sum1+ "</p>";
  document.getElementById("at0").innerHTML+=resultado1;

  let r2 =  document.getElementById("die-dex");
  let sum2 =parseInt(r2.options[r2.selectedIndex].innerHTML) + character1.atributos_raza[1];
  let resultado2 ="<p class='col'>=" +sum2+ "</p>";
  document.getElementById("at1").innerHTML+=resultado2;

  let r3 =  document.getElementById("die-con");
  let sum3 =parseInt(r3.options[r3.selectedIndex].innerHTML) + character1.atributos_raza[2];
  let resultado3 ="<p class='col'>=" +sum3+ "</p>";
  document.getElementById("at2").innerHTML+=resultado3;

  let r4 =  document.getElementById("die-int");
  let sum4 =parseInt(r4.options[r4.selectedIndex].innerHTML) + character1.atributos_raza[3];
  let resultado4 ="<p class='col'>=" +sum4+ "</p>";
  document.getElementById("at3").innerHTML+=resultado4;

  let r5 =  document.getElementById("die-wis");
  let sum5 =parseInt(r5.options[r5.selectedIndex].innerHTML) + character1.atributos_raza[4];
  let resultado5 ="<p class='col'>=" +sum5+ "</p>";
  document.getElementById("at4").innerHTML+=resultado5;


  let r6 =  document.getElementById("die-cha");
  let sum6 =parseInt(r6.options[r6.selectedIndex].innerHTML) + character1.atributos_raza[5];
  let resultado6 ="<p class='col'>=" +sum6+ "</p>";
  document.getElementById("at5").innerHTML+=resultado6;
    enviarDatos();
    
}



// evento de boton para traer data guardada
document.getElementById("cargar_datos").addEventListener("click", cargarDatos);

//enviarDatos y cargarDatos son las dos funciones de JSON para guardar y traer data local, honestamente las puse porque lo decia el desafio pero no planeo usarlas en el final
function enviarDatos() {
    var razalc = document.getElementById("raza").value;
    var subrazalc = document.getElementById("subraza").value;
    localStorage.setItem("datos_formulario", JSON.stringify([razalc, subrazalc]));
}

function cargarDatos() {
    
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("raza").removeAttribute("disabled");
    document.getElementById("subraza").removeAttribute("disabled");
    document.getElementById("raza").value = datos[0];
    document.getElementById("subraza").value = datos[1];

    if(val[0]==1){

        let element= document.getElementsByTagName("h2");
        element[0].parentNode.removeChild(element[0]);
       if(parseInt(subraza.selectedIndex!=0)){
            document.getElementById("atr0").remove();
            document.getElementById("atr1").remove();
            document.getElementById("atr2").remove();
            document.getElementById("atr3").remove();
            document.getElementById("atr4").remove();
            document.getElementById("atr5").remove();
        
        }


    }


    
    let titulo2 = document.createElement("h2");
    titulo2.innerHTML="Raza:" +datos[0];
    let pestaña = document.getElementById("resultado_raza");
    pestaña.appendChild(titulo2);
    val[0]=1;

    if(val[1]==1){

        let elemento= document.getElementsByTagName("h3");
        elemento[0].parentNode.removeChild(elemento[0]);
        document.getElementById("atr0").remove();
        document.getElementById("atr1").remove();
        document.getElementById("atr2").remove();
        document.getElementById("atr3").remove();
        document.getElementById("atr4").remove();
        document.getElementById("atr5").remove();
    }

    let titulo3 = document.createElement("h3");
    titulo3.innerHTML="Subraza:" +datos[1]
    let pestaña1 = document.getElementById("resultado_raza");
    pestaña1.appendChild(titulo3);

    document.getElementById("die-str").removeAttribute("disabled");
    document.getElementById("die-dex").removeAttribute("disabled");
    document.getElementById("die-con").removeAttribute("disabled");
    document.getElementById("die-int").removeAttribute("disabled");
    document.getElementById("die-wis").removeAttribute("disabled");
    document.getElementById("die-cha").removeAttribute("disabled");
    document.getElementById('ready').removeAttribute("disabled");


}

//esta funcion tira los dados, los muestra y crea los select para los stats
function rolled()
{

    //Cada personaje tiene 6 puntajes de habilidad Fuerza(STR), Agilidad(DEX),Constitución(CON),Inteligencia(INT),Sabiduría(WIS),Carisma(CHA)
    //Una de las maneras de hacer esto es tirar 4 dados de 6 caras, descartar e valor mas bajo y sumar el resto
    let min = 1;
    let max= 6;
    var valores=[0,0,0,0,0,0];

    let stat = document.createElement("p");

    if (valu>=1){
        /*let elemento= document.getElementsByTagName("p");
        elemento[0].parentNode.removeChild(elemento[0]);*/
        alert("You already rolled!");

    }

    else{
         clear=1;
        let contenido="<option selected></option>";
    for(let j=0;j<6;j++){

        let dados=[0,0,0,0];
        //este for randomiza 4 dados entre 1 y 6 (simula los dados)
        for (let i=0;i<4;i++)
        {   
            let random = Math.floor(Math.random()*(max-min+1)+min);
            dados[i]=random;
        }
        //aca convierto el valor mas bajo en 0 (para no sumarlo)
        const smallest=Math.min(...dados);
        const index = dados.indexOf(smallest);
        dados[index]=0;
    
        //Aca guardo la suma de los beneficios de raza, subraza y los dados random

        valores[j]=dados[0]+dados[1]+dados[2]+dados[3];

    }
    ordenarStats(valores);
    for(let j=0;j<6;j++)
    {
        contenido += "<option>" + valores[j] + "</option>";
    }

        document.getElementById("die-str").innerHTML=contenido;
        document.getElementById("die-dex").innerHTML=contenido;
        document.getElementById("die-con").innerHTML=contenido;
        document.getElementById("die-int").innerHTML=contenido;
        document.getElementById("die-wis").innerHTML=contenido;
        document.getElementById("die-cha").innerHTML=contenido;

        stat.innerHTML="DICE:" + valores[0] + "," + valores[1] + "," + valores[2] + "," + valores[3] + "," + valores[4] + "," + valores[5];
        let pestaña3 = document.getElementById("resultado_dados");
        pestaña3.appendChild(stat);
        valu=1;
    
    }

}
//una simple funcion para ordenar el vector
function ordenarStats(atributos=[]){   
    atributos.sort(function(a,b){return b-a});
 }
