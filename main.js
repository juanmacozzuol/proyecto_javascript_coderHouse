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
                     
                    if(index!=0)
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
                    if(index!=0)
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

                    if(index!=0)
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

                     if(index!=0)
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
                    if(index!=0)
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
                if(index!=0)
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
var valClass =0;
var speed,race_traits;
var bpress = 0;

//esta funcion lo unico que hace es guardar la raza y crea los select a mostrar para las subrazas
function stats(race)
{

    let validacion=0;
     
 
    switch(race)
        
    {
        
        case "Dragonborn":
            

            character1.raza="Dragonborn";
        
            let subracedr=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracedr){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="30ft."
            race_traits="<p><b>Race Traits:</b><ul><li>Draconic Ancestry</li><li>Breath Weapon</li><li>Damage Resistance</li><li>Languages: Common & Draconic</li></ul></p>";
        break;
        
        case "Dwarf":
            
            
            character1.raza="Dwarf";
            

            let subraced=["Hill Dwarf","Mountain Dwarf","Underdark Dwarf","Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraced){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="25ft.";
            race_traits="<p><b>Race Traits:</b><ul><li>Darkvision</li><li>Dwarven Resilience</li><li>Dwarven Combat Training</li><li>Stonecunning</li><li>Languages: Common & Dwarvish</li></ul></p>"
        break;
        

        case "Elf":

            character1.raza="Elf";
            let subracee=["High Elf","Wood Elf","Dark Elf","Sin Subraza"];

            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracee){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="30ft."
            race_traits="<p><b>Race Traits:</b><ul><li>Darkvision</li><li>Keen Senses</li><li>Fey Ancestry</li><li>Trance</li><li>Languages: Common & Elvish</li></ul></p>"
        break;
        

        case "Gnome":

            character1.raza="Gnome";
            let subraceg=["Forest Gnome","Rock Gnome","Sin Subraza"];

            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraceg){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="25ft.";
            race_traits="<p><b>Race Traits:</b><ul><li>Darkvision</li><li>Gnome Cunning</li><li>Languages: Common & Gnomish</li></ul></p>"
        break;
        

        case "Halfling":

            character1.raza="Halfling";
            let subraceh=["Lightfoot Halfling","Stout Halfling","Sin Subraza"];

            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraceh){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
           
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="25ft.";
            race_traits="<p><b>Race Traits:</b><ul><li>Lucky</li><li>Brave</li><li>Halfling Nimbleness</li><li>Languages: Common & Halfling</li></ul></p>"
     
        break;
        

        case "Half-orc":
            character1.raza="Half-Orc";
            let subraceha=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subraceha){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="30ft."
            race_traits="<p><b>Race Traits:</b><ul><li>Darkvision</li><li>Menacing</li><li>Relentless Endurance</li><li>Savage Attacks</li><li>Languages: Common & Orc</li></ul></p>"
        break;
        

        case "Human":
            character1.raza="Human";

            let subracehu=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracehu){

                contenido += "<option value= '"+subraza+"'  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="30ft."
            race_traits="<p><b>Race Traits:</b><ul><li>Languages: Common</li></ul></p>"
        break;
        

        case "Tiefling":
            character1.raza="Tiefling";
            let subracet=["Sin Subraza"];
            var contenido;
            contenido ="<select>";
            contenido +="<option selected>Choose a subrace</option>"

            for (let subraza of subracet){

                contenido += "<option value= '  " + subraza + " '  >" +subraza+ "</option>" ;
            }
            contenido += "</select>";
            document.getElementById("subraza").innerHTML=contenido;
            speed="30ft."
            race_traits="<p><b>Race Traits:</b><ul><li>Darkvision</li><li>Hellish Resistance</li><li>Infernal Legacy</li><li>Languages: Common & Infernal</li></ul></p>"
        break;
                
        default:
          
        break;
    }
    
    
}   


//este evento, muestra lo seleccionado (se encarga tambien de borrar selecciones previas para solo ver la actual)

raza.onchange =() =>{

    let raza= document.getElementById("raza").value;
    
    
    
    stats(raza);
    if(bpress!=0)
    {
        let element= document.getElementsByTagName("h4");
        element[0].parentNode.removeChild(element[0]);

    }


    if(val[1]==1)

    {
        /*let element= document.getElementsByTagName("h4");
        element[0].parentNode.removeChild(element[0]);*/
        val[1]=0;
        $("#resultado_raza").empty();
        $("#additional-data").empty();
        $("#additional-data").append("<p> <b>Speed:</b> "+ speed  +"</p>");
        $("#additional-data").append(race_traits);
    }

    if((raza!="Choose a race"))
  
    {   
        if(val[0]==1){

            /*let element= document.getElementsByTagName("h2");
            element[0].parentNode.removeChild(element[0]);*/
            $("#resultado_raza").empty();
         
            
                $("#atr0").remove();
                $("#atr1").remove();
                $("#atr2").remove();
                $("#atr3").remove();
                $("#atr4").remove();
                $("#atr5").remove();
               
            


        }
       
        let titulo2 = document.createElement("h2");
        titulo2.innerHTML="Raza:" +character1.raza;
        let pestaña = document.getElementById("resultado_raza");
        pestaña.appendChild(titulo2);
        val[0]=1;
        $("#additional-data").empty();
        $("#additional-data").append("<p> <b>Speed:</b> "+ speed  +"</p>");
        $("#additional-data").append(race_traits);

    }
}


var subraza= document.getElementById("subraza");
//aca asigna los atributos correspondientes a raza y subraza y guarda la subraza y en caso de que ya hayas puesto stats, te los vuelve a habilitar todos
subraza.onchange =() =>{

    let subraza= document.getElementById("subraza").value;
 
    character1.atributos_raza=[0,0,0,0,0,0];
    
    switch(subraza){
        
        case "Hill Dwarf":
            character1.atributos_raza[2]=2;
            character1.atributos_raza[4]=1;
            character1.subraza="Hill Dwarf";
            
        break;

        case "Mountain Dwarf":
            character1.atributos_raza[2]=2;
            character1.atributos_raza[0]=2;
            character1.subraza="Mountain Dwarf";

        break;

        case "Underdark Dwarf":
            character1.atributos_raza[2]=2;
            character1.atributos_raza[0]=1;
            character1.subraza="Underdark Dwarf";

        break;

        case "High Elf":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[3]=1;
            character1.subraza="High Elf";

        break;

        case "Wood Elf":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[4]=1;
            character1.subraza="Wood Elf";

        break;

        case "Dark Elf":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[5]=1;
            character1.subraza="Dark Elf";

        break;

        case "Forest Gnome":
            character1.atributos_raza[3]=2;
            character1.atributos_raza[1]=1;
            character1.subraza="Forest Gnome";

        break;

        case "Rock Gnome":
            character1.atributos_raza[3]=2;
            character1.atributos_raza[2]=1;
            character1.subraza="Rock Gnome";

        break;

        case "Lightfoot Halfling":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[5]=1;
            character1.subraza="Lightfoot Halfling";

        break;

        case "Stout Halfling":
            character1.atributos_raza[1]=2;
            character1.atributos_raza[2]=1;
            character1.subraza="Stout Halfling";

        break;

        case "Sin Subraza":

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

            let elemento= document.getElementsByTagName("h4");
            elemento[0].parentNode.removeChild(elemento[0]);
            document.getElementById("atr0").remove();
            document.getElementById("atr1").remove();
            document.getElementById("atr2").remove();
            document.getElementById("atr3").remove();
            document.getElementById("atr4").remove();
            document.getElementById("atr5").remove();

        }
   
        let titulo3 = document.createElement("h4");
        titulo3.innerHTML="Subraza:" +character1.subraza;
        let pestaña1 = document.getElementById("resultado_raza");
        pestaña1.appendChild(titulo3);

        for(let i=0;i<6;i++){
        let  atr = "<h6 class='atr col' id='atr" +i+"' >" + character1.atributos_raza[i] +"</h6>" ;
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
    $("#stats").empty();
    if (valu>=1){
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
  var sum1 =parseInt(r1.options[r1.selectedIndex].innerHTML) + character1.atributos_raza[0];


  let r2 =  document.getElementById("die-dex");
  var sum2 =parseInt(r2.options[r2.selectedIndex].innerHTML) + character1.atributos_raza[1];


  let r3 =  document.getElementById("die-con");
  var sum3 =parseInt(r3.options[r3.selectedIndex].innerHTML) + character1.atributos_raza[2];


  let r4 =  document.getElementById("die-int");
  var sum4 =parseInt(r4.options[r4.selectedIndex].innerHTML) + character1.atributos_raza[3];


  let r5 =  document.getElementById("die-wis");
  var sum5 =parseInt(r5.options[r5.selectedIndex].innerHTML) + character1.atributos_raza[4];



  let r6 =  document.getElementById("die-cha");
  var sum6 =parseInt(r6.options[r6.selectedIndex].innerHTML) + character1.atributos_raza[5];

  var sum=[sum1,sum2,sum3,sum4,sum5,sum6]

        $("#stats").append("<p> STR:"+sum1+"(" + parseInt((sum1-10)/2) +")</p>" );
        $("#stats").append("<p> DEX:"+sum2 +"(" + parseInt((sum2-10)/2) +")</p>");
        $("#stats").append("<p> CON:"+sum3 +"(" + parseInt((sum3-10)/2) +")</p>");
        $("#stats").append("<p> INT:"+sum4 +"(" + parseInt((sum4-10)/2) +")</p>");
        $("#stats").append("<p> WIS:"+sum5 +"(" + parseInt((sum5-10)/2) +")</p>");
        $("#stats").append("<p> CHA:"+sum6 +"(" + parseInt((sum6-10)/2) +")</p>");

        


    enviarDatos(sum);
    }
    else{
        $("#alert").remove();
        $("#resultado_dados").append("<p id='alert' style='font-size:20px'>Roll the dice first!</p>")

        $("#ready").prop("checked",false);

    }
    
}



// evento de boton para traer data guardada
document.getElementById("cargar_datos").addEventListener("click", cargarDatos);

//enviarDatos y cargarDatos son las dos funciones de JSON para guardar y traer data local, honestamente las puse porque lo decia el desafio pero no planeo usarlas en el final
function enviarDatos(sum) {
    var razalc = document.getElementById("raza").value;
    var subrazalc = document.getElementById("subraza").value;
    var final_stats =sum;
    localStorage.setItem("datos_formulario", JSON.stringify([razalc, subrazalc, final_stats,speed,race_traits]));
    
}

function cargarDatos() {

    bpress=1;

    
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("raza").removeAttribute("disabled");
    document.getElementById("subraza").removeAttribute("disabled");
    document.getElementById('cargar_datos').setAttribute("disabled","disabled");

   
 
    $("#stats").empty();
   $("#stats").append("<p> STR:"+datos[2][0]+"(" + parseInt((datos[2][0]-10)/2)+")</p>" );
   $("#stats").append("<p> DEX:"+datos[2][1]+"(" + parseInt((datos[2][1]-10)/2)+")</p>" );
   $("#stats").append("<p> CON:"+datos[2][2]+"(" + parseInt((datos[2][2]-10)/2)+")</p>" );
   $("#stats").append("<p> INT:"+datos[2][3]+"(" + parseInt((datos[2][3]-10)/2)+")</p>" );
   $("#stats").append("<p> WIS:"+datos[2][4]+"(" + parseInt((datos[2][4]-10)/2)+")</p>" );
   $("#stats").append("<p> CHA:"+datos[2][5]+"(" + parseInt((datos[2][5]-10)/2)+")</p>" );
   $("#additional-data").empty();
   $("#additional-data").append("<p> <b>Speed:</b> "+ datos[3]  +"</p>");
   $("#additional-data").append(datos[4]);
   


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

        let elemento= document.getElementsByTagName("h4");
        elemento[0].parentNode.removeChild(elemento[0]);
        document.getElementById("atr0").remove();
        document.getElementById("atr1").remove();
        document.getElementById("atr2").remove();
        document.getElementById("atr3").remove();
        document.getElementById("atr4").remove();
        document.getElementById("atr5").remove();
    }

    let titulo3 = document.createElement("h4");
    titulo3.innerHTML="Subraza:" +datos[1];
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
        $("#rolled").remove();
        $("#resultado_dados").append("<p id='rolled' style='font-size:20px'>You already rolled!</p>")
       
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
        $("#alert").remove();
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

var fotos=["./images/Barbarian.png","./images/bard.png","./images/Cleric.png","./images/Druid.png","./images/Fighter.png","./images/Monk.png","./images/Paladin.png","./images/Ranger.png","./images/Rogue.png","./images/Sorcerer.png","./images/Warlock.png","./images/Wizard.png"];
var first =0;
 $("#clase").on("change",function(){

        $("#hitdie").remove();
        $("#armorp").remove();
        $("#weaponp").remove();
        $("#features").remove();
        $("#savingt").remove();
        

    $("#class").append("<div id='hitdie'><h3>Hit Die</h3></div>");
    $("#class").append("<div id='savingt'><h3>Saving Throw Proficiencies</h3></div>");
    $("#class").append("<div id='armorp'><h3>Armor Proficiencies</h3></div>");
    $("#class").append("<div id='weaponp'><h3>Weapon Proficiencies</h3></div>");
    $("#class").append("<div id='features'><h3>Features</h3></div>");


let clase_elegida =($("#clase option:selected").text());
$("#resultado_clase").empty();
$("#resultado_clase").append("<h4> Class: " +$("#clase option:selected").text()+ "</h4>")

switch(clase_elegida){
 
    case "Barbarian":
        
        $("#hitdie").append("<p>1D12</p>");
        $("#savingt").append("<p>Strength & Constitution</p>");
        $("#armorp").append("<p>Light and medium armor</p>");
        $("#weaponp").append("<p>Shields, simple and martial weapons</p>");
        $("#features").append("<p><b>Rage:</b> on your turn, you can enter a rage as a bonus action. While raging, if you aren’t wearing heavy armor:<ul><li> You have advantage on Strength checks and Strength saving throws.</li> <li>  When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian</li><li> You have resistance to bludgeoning, piercing, and slashing damage.</li></ul> You must finish a long rest before you can rage again (PHB page 48). </p> <p><b>Unarmored Defense:</b> While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>");
        if(first==0)
        {

            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'  style='display:none' src='" +fotos[0] +"'>")
            $("#imgclass").fadeIn(1000);
        }
        else
        {
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[0] +"'>")
            $("#imgclass").fadeIn(1000);
            });

        }


        first++;
    break;

    case "Bard":
        
        $("#hitdie").append("<p>1D8</p>");
        $("#savingt").append("<p>Dexterity & Charisma</p>");
        $("#armorp").append("<p>Light armor</p>");
        $("#weaponp").append("<p>Simple weapons, hand crossbows, longswords,rapiers,shortswords</p>");
        $("#features").append("<p><b>Spellcasting</b></p> <p><b>Bardic Inspiration:</b> Use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of tim es equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.        </p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'  style='display:none' src='" +fotos[1] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[1] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
        
    break;

    case "Cleric":

        $("#hitdie").append("<p>1D8</p>");
        $("#savingt").append("<p>Wisdom & Charisma</p>");
        $("#armorp").append("<p>Light and medium armor</p>");
        $("#weaponp").append("<p>Shields, simple weapons</p>");
        $("#features").append("<p><b>Spellcasting</b></p> <p><b>Divine Domain</b></p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[2] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[2] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;

    case "Druid":

        $("#hitdie").append("<p>1D8</p>");
        $("#savingt").append("<p>Intelligence & Wisdom</p>");
        $("#armorp").append("<p>Light and medium armor (nonmetal)</p>");
        $("#weaponp").append("<p>Shields (nonmetal), clubs, daggers, darts, javelins, maces, quartersaffs, scimitars, sickles, slings, spears</p>");
        $("#features").append("<p><b>Druidic:</b> You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message´s presence with a successful DC 15 Wisdom (Perception) check but can´t decipher it without magic.</p> <p><b>Spellcasting</b></p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[3] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[3] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;

    case "Fighter":

        $("#hitdie").append("<p>1D10</p>");
        $("#savingt").append("<p>Strength & Constitution</p>");
        $("#armorp").append("<p>All armor</p>");
        $("#weaponp").append("<p>Shields, simple and martial weapons</p>");
        $("#features").append("<p><b>Fighting Style:</b> You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option m ore than once, even if you later get to choose again. <ul><li><b>Archery:</b> You gain a +2 bonus to attack rolls you make with ranged weapons.</li><li><b>Defense:</b> While you are wearing armor, you gain a +1 bonus to AC.</li><li><b>Dueling:</b> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</li><li><b>Great Weapon Fighting:</b> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</li><li><b>Protection:</b> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to im pose disadvantage on the attack roll. You must be wielding a shield.</li><li><b>Two-Weapon Fighting</b> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack</li></ul></p> <p><b>Second Wind</b>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again</p>");
      if(first==0){
        $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[4] +"'>")
        $("#imgclass").fadeIn(1000); 
    }
    else{
        $("#imgclass").fadeOut(1000,function(){
        $("#imgclass").remove();
        $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[4] +"'>")
        $("#imgclass").fadeIn(1000);
        });
    
    }
    first++;
    break;
    case "Monk":

        $("#hitdie").append("<p>1D8</p>");
        $("#savingt").append("<p>Strength & Dexterity</p>");
        $("#armorp").append("<p>None</p>");
        $("#weaponp").append("<p>Simple weapons, shortswords</p>");
        $("#features").append("<p><b>Unarmored Defense:</b> Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p> <p><b>Martial Arts:</b> At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:<ul><li>You can use Dexterity instead of Strength for the attack and damage rolls o f your unarm ed strikes and monk weapons.</li><li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels.</li><li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarm ed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarm ed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li></ul></p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[5] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'  style='display:none' src='" +fotos[5] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;

    case "Paladin":

        $("#hitdie").append("<p>1D10</p>");
        $("#savingt").append("<p>Wisdom & Charisma</p>");
        $("#armorp").append("<p>All armor</p>");
        $("#weaponp").append("<p>Shields, simple and martial weapons</p>");
        $("#features").append("<p><b>Divine Sense:</b>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being w hose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the sam e radius, you also detect the presence o f any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a num ber of times equal to 1 + your Charisma modifier. W hen you finish a long rest, you regain all expended uses</p> <p><b>Lay on hands:</b>Your blessed touch can heal wounds. You have a pool of healing pow er that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw pow er from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use o f Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.</p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[6] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'  style='display:none' src='" +fotos[6] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;

    case "Ranger":

        $("#hitdie").append("<p>1D10</p>");
        $("#savingt").append("<p>Strength & Dexterity</p>");
        $("#armorp").append("<p>Light and medium armor</p>");
        $("#weaponp").append("<p>Shields, simple and martial weapons</p>");
        $("#features").append("<p><b>Favored Enemy:</b>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. C hoose a type o f favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orc s) as favored enemies. You have advantage on W isdom (Survival) checks to track your favored enem ies, as w ell as on Intelligence checks to recall information about them. W hen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.</p> <p><b>Natural Explorer:</b> You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or m ore in your favored terrain, you gain the following benefits:<ul><li>Difficult terrain doesn’t slow your group’s travel.</li><li>Your group can’t becom e lost except by magical means.</li><li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li><li>If you are traveling alone, you can move stealthily at a norm al pace.</li><li>When you forage, you find tw ice as much food as you normally would.</li><li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li></ul></p>");
       if(first==0){
        $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[7] +"'>")
        $("#imgclass").fadeIn(1000); 
    }
    else{
        $("#imgclass").fadeOut(1000,function(){
        $("#imgclass").remove();
        $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[7] +"'>")
        $("#imgclass").fadeIn(1000);
        });
    
    }
    first++;
    break;

    case "Rogue":

        $("#hitdie").append("<p>1D8</p>");
        $("#savingt").append("<p>Dexterity & Intelligence</p>");
        $("#armorp").append("<p>Light armor</p>");
        $("#weaponp").append("<p>Simple weapons, hand crossbows, longswords,rapiers, shortswords</p>");
        $("#features").append("<p><b>Expertise:</b>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you m ake that uses either of the chosen proficiencies.</p> <p><b>Sneak Attack:</b> Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.</p><p><b>Thieves´Cant:</b>During your rogue training you learned thieves’ cant, a secret m ix of dialect, jargon, and code that allows you to hide m essages in seem ingly norm al conversation. Only another creature that knows thieves’ cant understands such m essages. It takes four tim es longer to convey such a m essage than it does to speak the sam e idea plainly. In addition, you understand a set of secret signs and sym bols used to convey short, simple m essages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy m arks or will provide a safe house for thieves on the run. C u n n i n g A c t i o n Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.</p>");
      if(first==0){
        $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[8] +"'>")
        $("#imgclass").fadeIn(1000); 
    }
    else{
        $("#imgclass").fadeOut(1000,function(){
        $("#imgclass").remove();
        $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[8] +"'>")
        $("#imgclass").fadeIn(1000);
        });
    
    }
    first++;
    break;


    case "Sorcerer":

        $("#hitdie").append("<p>1D6</p>");
        $("#savingt").append("<p>Constitution & Charisma</p>");
        $("#armorp").append("<p>None</p>");
        $("#weaponp").append("<p>Daggers, darts, slings, quarterstaffs, light crossbows</p>");
        $("#features").append("<p><b>Spellcasting</b></p> <p><b>Sorcerous Origin:</b>Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic</p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[9] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[9] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;

    case "Warlock":

        $("#hitdie").append("<p>1D8</p>");
        $("#savingt").append("<p>Wisdom & Charisma</p>");
        $("#armorp").append("<p>Light armor</p>");
        $("#weaponp").append("<p>simple weapons</p>");
        $("#features").append("<p><b>Otherworldly Patron:</b>At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One.</p> <p><b>Pact Magic:</b>Your arcane research and the m agic bestow ed on you by your patron have given you facility with spells</p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[10] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'  style='display:none' src='" +fotos[10] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;

    case "Wizard":

        $("#hitdie").append("<p>1D6</p>");
        $("#savingt").append("<p>Intelligence & Wisdom</p>");
        $("#armorp").append("<p>None</p>");
        $("#weaponp").append("<p>Daggers, darts, slings, quarterstaffs, light crossbows</p>");
        $("#features").append("<p><b>Spellcasting</b></p> <p><b>Arcane Recovery:</b> You have learned to regain som e of your magical energy by studying your spellbook. O nce per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a com bined level that is equal to or less than half your w izard level (rounded up), and none of the slots can be 6th level or higher. For example, if you’re a 4th-level wizard, you can recover up to two levels worth o f spell slots. You can recover either a 2nd-level spell slot or tw o 1st-level spell slots.</p>");
        if(first==0){
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'   style='display:none' src='" +fotos[11] +"'>")
            $("#imgclass").fadeIn(1000); 
        }
        else{
            $("#imgclass").fadeOut(1000,function(){
            $("#imgclass").remove();
            $("#imagen").append("<img id='imgclass' class='d-block mx-auto'  style='display:none' src='" +fotos[11] +"'>")
            $("#imgclass").fadeIn(1000);
            });
        
        }
        first++;
    break;
  
}



 });


 $("body").append('<button class="btn btn-primary" id="btn1">Do you need help?</button>');


  
 $("#btn1").click(() => { 
    $.ajax({
        method: "GET",
        url:  "datos.json",
        success: function(respuesta) {
            let contenido = "<div class='ayuda container-fluid'><ol>";
            
            for (let datos of respuesta) {
                contenido += "<li>";
                contenido += "<strong>" + datos.race + "</strong></>";
                contenido += "</li>";
                contenido += "<li>";
                contenido += "<strong>" + datos.dice + "</strong></>";
                contenido += "</li>";
                contenido += "<li>";
                contenido += "<strong>" + datos.atributos + "</strong></>";
                contenido += "</li>";
                contenido += "<li>";
                contenido += "<strong>" + datos.class + "</strong></>";
                contenido += "</li>";
            }

            contenido += "</ol></div>";
            $("body").prepend(contenido);
            $("#btn1").prop("disabled",true);
        },
        error: function(respuesta) {
            $("body").prepend(`<div><strong>Error!</strong> No se pudo enviar los datos!</div>`);
        }
    });
});


