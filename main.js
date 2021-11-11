

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

    while(validacion!=1){


    

        //Cada raza tiene incrementos en diferentes puntajes de habilidad
        switch(race.toLowerCase())
        
        {

            case "1":
            case "dragonborn":
                character1.atributos[0]=2;
                character1.atributos[5]=1;
                character1.raza="Dragonborn";
                character1.subraza="N/A";
                validacion=1;
            break;
            
            case "2":
            case "dwarf":
                character1.atributos[2]=2;
                character1.raza="Dwarf";
                //Algunas razas ademas tiene subrazas con diferentes incrementos de habilidad (para es toda la segunda tanda de switchs)
                let subraced=prompt("Elija una Sub-Raza:\n1.Hill Dwarf\n2.Mountain Dwarf\n3.Underdark Dwarf\n4.Sin Sub-Raza");
                let validaciond=0;

                while(validaciond!=1){
                    switch(subraced.toLowerCase()){
                        case "1":
                        case "hill dwarf":
                            character1.atributos[4]=1;
                            character1.subraza="Hill Dwarf";
                            validaciond=1;
                        break;
                            
                        case "2":
                        case "mountain dwarf":
                            character1.atributos[0]=2;
                            character1.subraza="Mountain Dwarf";
                            validaciond=1;
                        break;

                        case "3":
                        case "underdark dwarf":

                            character1.atributos[0]=1;
                            character1.subraza="Underdark Dwarf";
                            validaciond=1;
                        break;

                        case "4":
                        case "sin sub-raza":
                            character1.subraza="N/A";
                            validaciond=1;
                        break;
                        default:
                            alert("Opción incorrecta. Intente nuevamente.");
                            subraced=prompt("Elija una Sub-Raza:\n1.Hill Dwarf\n2.Mountain Dwarf\n3.Underdark Dwarf\n4.Sin Sub-Raza");
                        break;

                    }
                }
                validacion=1;

            break;
            
            case "3":
                character1.atributos[1]=2;
                character1.raza="Elf";
                let subracee=prompt("Elija una sub-raza:\n1.High Elf\n2.Wood Elf \n3.Dark Elf\n4.Sin Sub-Raza");
                let validacione=0;
                while(validacione!=1){
                    switch(subracee){
                        case "1":
                        case "high elf":
                            character1.atributos[3]=1;
                            character1.subraza="High Elf";
                            validacione=1;
                        break;
                            
                        case "2":
                        case "wood elf":
                            character1.atributos[4]=1;
                            character1.subraza="Wood Elf";
                            validacione=1;
                        break;

                        case "3":
                        case "dark elf":
                            character1.atributos[5]=1;
                            character1.subraza="Dark Elf";
                            validacione=1;
                        break;
                        case "4":
                        case "sin sub-raza":
                            character1.subraza="N/A";
                            validacione=1;
                        break;
                        default:
                            alert("Opción incorrecta. Intente nuevamente.");
                            subracee=prompt("Elija una sub-raza:\n1.High Elf\n2.Wood Elf \n3.Dark Elf\n4.Sin Sub-Raza");
                        break;


                    }
                }   
                validacion=1;
            break;
            
            case "4":
            case "gnome":
                character1.atributos[3]=2;
                character1.raza="Gnome";
                let subraceg=prompt("Elija una sub-raza:\n1.Forest Gnome\n2.Rock Gnome\n3.Sin Sub-Raza");
                validaciong=0;
                while(validaciong!=1){
                    switch(subraceg.toLowerCase()){
                        case "1":
                        case "forest gnome":
                            character1.atributos[1]=1;
                            character1.subraza="Forest Gnome";
                            validaciong=1;
                        break;
                            
                        case "2":
                        case "rock gnome":
                            character1.atributos[2]=1;
                            character1.subraza="Rock Gnome";
                            validaciong=1;
                        break;

                        case "3":
                        case "sin sub-raza":
                            character1.subraza="N/A";
                            validaciong=1;
                        break;
                        default:
                            alert("Opción incorrecta. Intente nuevamente.");
                            subraceg=prompt("Elija una sub-raza:\n1.Forest Gnome\n2.Rock Gnome\n3.Sin Sub-Raza");
                        break;

                    }
                    validacion=1;
                }
            break;
            
            case "5":
            case "halfling":
                character1.atributos[1]=2;
                character1.raza="Halfling";
                let subraceh=prompt("Elija una sub-raza:\n1.Lightfoot Halfling\n2.Stout Halfling\n3.Sin Sub-Raza");
                let validacionh=0;
                while(validacionh!=1){
                    switch(subraceh.toLowerCase()){
                        case "1":
                        case "lightfoot halfling":
                            character1.atributos[5]=1;
                            character1.subraza="Lightfoot Halfling";
                            validacionh=1;
                        break;
                            
                        case "2":
                        case "stout halfling":
                            character1.atributos[2]=1;
                            character1.subraza="Stout Halfling";
                            validacionh=1;
                        break;

                        case "3":
                        case "sin sub-raza":
                            character1.subraza="N/A";
                            validacionh=1;
                        break;
                        default:
                            alert("Opción incorrecta. Intente nuevamente.");
                            subraceh=prompt("Elija una sub-raza:\n1.Lightfoot Halfling\n2.Stout Halfling\n3.Sin Sub-Raza");
                        break;

                    }
                }
                validacion=1;
            break;
            
            case "6":
            case "half-orc":
                character1.raza="Half-Orc";
                character1.subraza="N/A";
                character1.atributos[0]=2;
                character1.atributos[2]=1;
                validacion=1;
            break;
            
            case "7":
            case "human":
                character1.raza="Human";
                character1.subraza="N/A";
                character1.atributos[0]=1;
                character1.atributos[1]=1;
                character1.atributos[2]=1;
                character1.atributos[3]=1;
                character1.atributos[4]=1;
                character1.atributos[5]=1;
                validacion=1;
            
            break;
            
            case "8":
            case "tiefling":
                character1.raza="Tiefling";
                character1.subraza="N/A";
                character1.atributos[5]=2;
                character1.atributos[3]=1;
                validacion=1;
            break;
                    
            default:
                alert("Opción incorrecta. Intente nuevamente.");
                race=prompt("Elija una raza:\n1.Dragonborn\n2.Dwarf\n 3.Elf\n 4.Gnome\n 5.Halfling\n6.Half-Orc\n7.Human\n8.Tiefling");
               
                
                
            break;
        }
    }
    
}   

    //Cada personaje tiene 6 puntajes de habilidad Fuerza(STR), Agilidad(DEX),Constitución(CON),Inteligencia(INT),Sabiduría(WIS),Carisma(CHA)
    //Una de las maneras de hacer esto es tirar 4 dados de 6 caras, descartar e valor mas bajo y sumar el resto
    let min = 1;
    let max= 6;
    var valores=[0,0,0,0,0,0];

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
    //idealmente tendria que poder decidir el usuario que valor asignar a cada puntuacion pero todavia no resolvi eso
    valores[j]=dados[0]+dados[1]+dados[2]+dados[3];
      
       

}


 
  
//Cada Personaje de D&D tiene una raza
let raza=prompt("Elija una raza:\n1.Dragonborn\n2.Dwarf\n3.Elf\n4.Gnome\n5.Halfling\n6.Half-Orc\n7.Human\n8.Tiefling");
stats(raza);
ordenarStats(valores);
character1.asignarStats(valores);




alert("Tu raza es: " + character1.raza + "\nTu subraza es: " + character1.subraza + "\nSTR:" + character1.atributos[0] +"\n" + "DEX:" + character1.atributos[1] +"\n" + "CON:" + character1.atributos[2] +"\n" + "INT:" + character1.atributos[3] +"\n" + "WIS:" + character1.atributos[4] +"\n" + "CHA:" + character1.atributos[5] +"\n");

