

class character{
constructor(raza,subraza,atributos=[]){
    this.raza=raza;
    this.subraza=subraza;
    this.atributos=atributos;  
}


asignarStats(atributos=[]){
let validacion=[0,0,0,0,0,0];


    while((validacion[0]+validacion[1]+validacion[2]+validacion[3]+validacion[4]+validacion[5])!=6){
        
        let at= prompt("Los valores disponibles son:" + atributos +"\nDonde quiere asignar el:" + atributos[0] +"\n1.Fuerza(STR)\n2.Destreza(DEX)\n3.Constitución(CON)\n4.Inteligencia(INT)\n5.Sabiduría(WIS)\n6.Carisma(CHA)");
        switch(at.toLowerCase()){

            case "1":
            case "fuerza":
            case "str":

                if(validacion[0]==0){

                    this.atributos[0]=this.atributos[0]+atributos[0];
                    atributos.shift();
                    validacion[0]=1;
                    
                    
                }
                else{
                    
                    alert("El atributo Fuerza ya fue asignado, seleccione otro");
                    

                }
            break;

            case "2":
            case "destreza":
            case "dex":

                if(validacion[1]==0){

                    this.atributos[1]=this.atributos[1]+atributos[0];
                    atributos.shift();
                    validacion[1]=1;
                   
                }
                else{
                    
                    alert("El atributo Destreza ya fue asignado, seleccione otro");
                    

                }
            break;
           
            case "3":
            case "constitución":
            case "con":

                if(validacion[2]==0){

                    this.atributos[2]=this.atributos[2]+atributos[0];
                    atributos.shift();
                    validacion[2]=1;
                    
                    
                }
                else{
                    
                    alert("El atributo Constitución ya fue asignado, seleccione otro");
                    

                }
            break;
            case "4":
            case "inteligencia":
            case "int":

                if(validacion[3]==0){

                    this.atributos[3]=this.atributos[3]+atributos[0];
                    atributos.shift();
                    validacion[3]=1;
                    
                    
                }
                else{
                    
                    alert("El atributo Inteligencia ya fue asignado, seleccione otro");
                    

                }
            break;
            case "5":
            case "sabiduría":
            case "wis":

                if(validacion[4]==0){

                    this.atributos[4]=this.atributos[4]+atributos[0];
                    atributos.shift();
                    validacion[4]=1;
                    
                    
                }
                else{
                    
                    alert("El atributo Sabiduria ya fue asignado, seleccione otro");
                    

                }
            break;
            case "6":
            case "carisma":
            case "cha":

                if(validacion[5]==0){

                    this.atributos[5]=this.atributos[5]+atributos[0];
                    atributos.shift();
                    validacion[5]=1;
                   
                    
                }
                else{
                    
                    alert("El atributo Fuerza ya fue asignado, seleccione otro");
                    

                }
            break;

            default:
                alert("Valor incorrecto, intente de nuevo.");
            
            break;


        }






        }

    }
}

function ordenarStats(atributos=[]){
    
   atributos.sort(function(a,b){return b-a});
}


const character1 = new character(0,0,[0,0,0,0,0,0]);



function stats(race)
{

    let validacion=0;

   


        

        //Cada raza tiene incrementos en diferentes puntajes de habilidad
        switch(race)
        
        {

            case "dragonborn":
               
                character1.atributos[0]=2;
                character1.atributos[5]=1;
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
                
                //Algunas razas ademas tiene subrazas con diferentes incrementos de habilidad (para es toda la segunda tanda de switchs)
                character1.atributos[2]=2;
                character1.raza="Dwarf";
                
                //Algunas razas ademas tiene subrazas con diferentes incrementos de habilidad (para es toda la segunda tanda de switchs)
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
                character1.atributos[1]=2;
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
                character1.atributos[3]=2;
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
                character1.atributos[1]=2;
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
                character1.atributos[0]=2;
                character1.atributos[2]=1;
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
                character1.atributos[0]=1;
                character1.atributos[1]=1;
                character1.atributos[2]=1;
                character1.atributos[3]=1;
                character1.atributos[4]=1;
                character1.atributos[5]=1;
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
                character1.atributos[5]=2;
                character1.atributos[3]=1;
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




  
//Cada Personaje de D&D tiene una raza
var raza= document.getElementById("raza");

raza.onchange =() =>{

    let raza= document.getElementById("raza").value;
    
    
    
    stats(raza);


    if(val[1]==1)

    {

        let element= document.getElementsByTagName("h3");
        element[0].parentNode.removeChild(element[0]);
        val[1]=0;

    }


 
    if(raza!="Choose a race")
    
    {   

        if(val[0]==1){

            let element= document.getElementsByTagName("h2");
            element[0].parentNode.removeChild(element[0]);


        }


        
        let titulo2 = document.createElement("h2");
        titulo2.innerHTML="Raza:" +character1.raza;
        document.body.appendChild(titulo2);
        val[0]=1;

    }
}


var subraza= document.getElementById("subraza");

subraza.onchange =() =>{

    let subraza= document.getElementById("subraza").value;
    
    console.log(subraza);
    

    switch(subraza){

        case "hill dwarf":
            character1.atributos[4]=1;
            character1.subraza="Hill Dwarf";
            console.log(subraza);
        break;
            

        case "mountain dwarf":
            character1.atributos[0]=2;
            character1.subraza="Mountain Dwarf";

        break;


        case "underdark dwarf":

            character1.atributos[0]=1;
            character1.subraza="Underdark Dwarf";

        break;


     
        case "high elf":
            character1.atributos[3]=1;
            character1.subraza="High Elf";

        break;
            

        case "wood elf":
            character1.atributos[4]=1;
            character1.subraza="Wood Elf";

        break;


        case "dark elf":
            character1.atributos[5]=1;
            character1.subraza="Dark Elf";

        break;

        case "forest gnome":
            character1.atributos[1]=1;
            character1.subraza="Forest Gnome";

        break;
            

        case "rock gnome":
            character1.atributos[2]=1;
            character1.subraza="Rock Gnome";

        break;


        case "lightfoot halfling":
            character1.atributos[5]=1;
            character1.subraza="Lightfoot Halfling";

        break;
            

        case "stout halfling":
            character1.atributos[2]=1;
            character1.subraza="Stout Halfling";

        break;



        case "sin subraza":
            character1.subraza="N/A";

        break;




    }



    if(subraza!="Choose a subrace")
    {
        
        if(val[1]==1){

            let elemento= document.getElementsByTagName("h3");
            elemento[0].parentNode.removeChild(elemento[0]);

        }


        let titulo3 = document.createElement("h3");
        titulo3.innerHTML="Subraza:" +character1.subraza;
        document.body.appendChild(titulo3);
        val[1]=1;
    }
}






//ordenarStats(valores);
//character1.asignarStats(valores);

let roll = document.createElement("button");
roll.innerHTML=("Roll the dice!");
roll.setAttribute("id","roll");
document.body.appendChild(roll);

let rolling = document.getElementById("roll");
rolling.onclick=()=>{ rolled()};

var val=[0,0];
var valu=0;

function rolled(){

        //Cada personaje tiene 6 puntajes de habilidad Fuerza(STR), Agilidad(DEX),Constitución(CON),Inteligencia(INT),Sabiduría(WIS),Carisma(CHA)
    //Una de las maneras de hacer esto es tirar 4 dados de 6 caras, descartar e valor mas bajo y sumar el resto
    let min = 1;
    let max= 6;
    var valores=[0,0,0,0,0,0];
    
    let stat = document.createElement("p");
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

if (valu>=1){
    let elemento= document.getElementsByTagName("p");
    elemento[0].parentNode.removeChild(elemento[0]);

}


stat.innerHTML="STR:" + valores[0] + "\nDEX:" + valores[1]  + "\nCON:" + valores[2]  + "\nINT:" + valores[3]  + "\nWIS:" + valores[4]  + "\nCHA:" + valores[5];
document.body.appendChild(stat);
valu=1;

}




//alert("Tu raza es: " + character1.raza + "\nTu subraza es: " + character1.subraza + "\nSTR:" + character1.atributos[0] +"\n" + "DEX:" + character1.atributos[1] +"\n" + "CON:" + character1.atributos[2] +"\n" + "INT:" + character1.atributos[3] +"\n" + "WIS:" + character1.atributos[4] +"\n" + "CHA:" + character1.atributos[5] +"\n");

