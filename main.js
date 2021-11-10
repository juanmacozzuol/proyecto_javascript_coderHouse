




/*
class character{
constructor(raza,subraza,atributos=[]){
    this.raza=raza;
    this.subraza=subraza;
    this.atributos=atributos;
    
}


asignarStats(atributos=[]){
let validacion=[0,0,0,0,0,0];
alert();

    while((validacion[0]+validacion[1]+validacion[2]+validacion[3]+validacion[4]+validacion[5])!=6){
        let at= prompt("Los valores disponibles son:" + atributos +"\nDonde quiere asignar el:" + atributos[0] +"\n 1.Fuerza(STR)\n2.Destreza(DEX)\n3.Constitución(CON)\n4.Inteligencia(INT)\n5.Sabiduría(WIS)\n6.Carisma(CHA)");

        switch(parseInt(at)){

            case 1:

                if(validacion[0]==0){

                    this.atributos[0]=this.atributos[0]+atributos[0];
                    atributos.shift();
                    validacion[0]=1;
                    
                }
                else{
                    
                    alert("El atributo Fuerza ya fue asignado, seleccione otro");
                    

                }
            break;

            case 2:

                if(validacion[1]==0){

                    this.atributos[1]=this.atributos[1]+atributos[0];
                    atributos.shift();
                    validacion[1]=1;
                    
                }
                else{
                    
                    alert("El atributo Destreza ya fue asignado, seleccione otro");
                    

                }
            break;
           
            case 3:

                if(validacion[2]==0){

                    this.atributos[2]=this.atributos[2]+atributos[0];
                    atributos.shift();
                    validacion[2]=1;
                    
                }
                else{
                    
                    alert("El atributo Constitución ya fue asignado, seleccione otro");
                    

                }
            break;
            case 4:

                if(validacion[3]==0){

                    this.atributos[3]=this.atributos[3]+atributos[0];
                    atributos.shift();
                    validacion[3]=1;
                    
                }
                else{
                    
                    alert("El atributo Inteligencia ya fue asignado, seleccione otro");
                    

                }
            break;
            case 5:

                if(validacion[4]==0){

                    this.atributos[4]=this.atributos[4]+atributos[0];
                    atributos.shift();
                    validacion[4]=1;
                    
                }
                else{
                    
                    alert("El atributo Sabiduria ya fue asignado, seleccione otro");
                    

                }
            break;
            case 6:

                if(validacion[5]==0){

                    this.atributos[5]=this.atributos[5]+atributos[0];
                    atributos.shift();
                    validacion[5]=1;
                    
                }
                else{
                    
                    alert("El atributo Fuerza ya fue asignado, seleccione otro");
                    

                }
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


  

    //Cada raza tiene incrementos en diferentes puntajes de habilidad
    switch(parseInt(race))
    
    {

        case 1:
        character1.atributos[0]=2;
        character1.atributos[5]=1;
        character1.raza="Dragonborn";
        character1.subraza="N/A";
        break;
        
        case 2:
        character1.atributos[2]=2;
        character1.raza="Dwarf";
        //Algunas razas ademas tiene subrazas con diferentes incrementos de habilidad (para es toda la segunda tanda de switchs)
        let subraced=prompt("Elija una sub-raza:\n 1.Hill Dwarf\n 2.Mountain Dwarf \n 3.Underdark Dwarf");
        
            switch(parseInt(subraced)){
            case 1:
                character1.atributos[4]=1;
                character1.subraza="Hill Dwarf";
            break;
                
            case 2:
                character1.atributos[0]=2;
                character1.subraza="Mountain Dwarf";
            break;

            case 3:
                character1.atributos[0]=1;
                character1.subraza="Underdark Dwarf";
            break;

            default:
                character1.subraza="N/A";
            break;

            }

        break;
        
        case 3:
            character1.atributos[1]=2;
            character1.raza="Elf";
            let subracee=prompt("Elija una sub-raza:\n 1.High Elf\n 2.Wood Elf \n 3.Dark Elf");
            switch(parseInt(subracee)){
            case 1:
                character1.atributos[3]=1;
                character1.subraza="High Elf";
            break;
                
            case 2:
                character1.atributos[4]=1;
                character1.subraza="Wood Elf";
            break;

            case 3:
                character1.atributos[5]=1;
                character1.subraza="Dark Elf";
            break;

            default:
                character1.subraza="N/A";
            break;

            }
        break;
        
        case 4:
            character1.atributos[3]=2;
            character1.raza="Gnome";
            let subraceg=prompt("Elija una sub-raza:\n 1.Forest Gnome\n 2.Rock Gnome");
            switch(parseInt(subraceg)){
            case 1:
                character1.atributos[1]=1;
                character1.subraza="Forest Gnome";
            break;
                
            case 2:
                character1.atributos[2]=1;
                character1.subraza="Rock Gnome";
            break;

            default:
                character1.subraza="N/A";
            break;

            }
        
        break;
        
        case 5:
            character1.atributos[1]=2;
            character1.raza="Halfling";
            let subraceh=prompt("Elija una sub-raza:\n 1.Lightfoot Halfling\n 2.Stout Halfling");
            switch(parseInt(subraceh)){
            case 1:
                character1.atributos[5]=1;
                character1.subraza="Lightfoot Halfling";
            break;
                
            case 2:
                character1.atributos[2]=1;
                character1.subraza="Stout Halfling";
            break;

            default:
                character1.subraza="N/A";
            break;

            }
        break;
        
        case 6:
            character1.raza="Half-Orc";
            character1.subraza="N/A";
            character1.atributos[0]=2;
            character1.atributos[2]=1;
        break;
        
        case 7:
            character1.raza="Human";
            character1.subraza="N/A";
            character1.atributos[0]=1;
            character1.atributos[1]=1;
            character1.atributos[2]=1;
            character1.atributos[3]=1;
            character1.atributos[4]=1;
            character1.atributos[5]=1;
        
        break;
        
        case 8:
            character1.raza="Tiefling";
            character1.subraza="N/A";
            character1.atributos[5]=2;
            character1.atributos[3]=1;
        break;
                
        default:
        break;
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
let raza=prompt("Elija una raza:\n 1.Dragonborn\n 2.Dwarf \n 3.Elf \n 4.Gnome \n 5.Halfling\n 6.Half-Orc\n 7.Human\n 8.Tiefling");
stats(raza);
ordenarStats(valores);
character1.asignarStats(valores);




alert("Tu raza es: " + character1.raza);
alert("Tu subraza es: " + character1.subraza);
alert("STR:" + character1.atributos[0] +"\n" + "DEX:" + character1.atributos[1] +"\n" + "CON:" + character1.atributos[2] +"\n" + "INT:" + character1.atributos[3] +"\n" + "WIS:" + character1.atributos[4] +"\n" + "CHA:" + character1.atributos[5] +"\n");

*/