function cambiaInfo(i){
    fetch("https://pokeapi.co/api/v2/pokemon-form/"+i)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            /*var elemento = document.getElementById("fotos");
            elemento.parentNode.removeChild(elemento);*/

            var bck = document.createElement("img");
            bck.src = myJson.sprites.back_default;
            var bckS = document.createElement("img");
            bckS.src = myJson.sprites.back_shiny;
            var frnt = document.createElement("img");
            frnt.src = myJson.sprites.front_default;
            var frntS = document.createElement("img");
            frntS.src = myJson.sprites.front_shiny;

            name.innerHTML += "Sprites: <br>";
            document.getElementById("resultado").appendChild(frnt);
            document.getElementById("resultado").appendChild(bck);
            document.getElementById("resultado").appendChild(bckS);
            document.getElementById("resultado").appendChild(frntS);
        });
}

function generaGraph(hp, atk, df, spAtk, spDf, spd){
    anychart.onDocumentReady(function () {
        // our data from bulbapedia
        var radar = document.getElementById("container");
        radar.innerHTML = "";
        var data1 = [
            {x: "HP", value: hp},
            {x: "Ataque", value: atk},
            {x: "Defensa", value: df},
            {x: "Ataque Especial", value: spAtk},
            {x: "Defensa Especial", value: spDf},
            {x: "Velocidad", value: spd},
        ];


        // create radar chart
        var chart = anychart.radar();
        // set chart yScale settings
        chart.yScale()
            .minimum(0)
            .maximum(800)
            .ticks({'interval':5});

        // create first series
        chart.line(data1)

        // set chart title
        chart.title("Pokémon Stats");

        chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
        chart.area(data1).markers(true).fill("#00ffff", 0.3).stroke("#00ffff");
        chart.dataArea().background().fill("#00ffff 0.2");
        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();

    });
}

function muestraInfo(i) {

    numPKM= 1118;   //Pokémon y formas
    numX = 898;     //Número máximo en la pokedex

    fetch("https://pokeapi.co/api/v2/pokemon/"+i)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {


            var nameGrid = document.getElementById("name");
            nameGrid.innerHTML = "";

            var idGrid = document.getElementById("num");
            idGrid.innerHTML = "";

            var imgGrid = document.getElementById("imagen");
            imgGrid.innerHTML = "";

            var alturaGrid = document.getElementById("h");
            alturaGrid.innerHTML = "";

            var pesoGrid = document.getElementById("w");
            pesoGrid.innerHTML = "";

            var habilidadesGrid = document.getElementById("ab");
            habilidadesGrid.innerHTML = "";

            var descripcionGrid = document.getElementById("desc");
            descripcionGrid.innerHTML = "";

            var spritesGrid = document.getElementById("spr");
            spritesGrid.innerHTML = "";

            var tiposGrid = document.getElementById("ty");
            tiposGrid.innerHTML = "";

            /*-----NOMBRE E ID-----*/
            nombre = myJson.species.name.charAt(0).toUpperCase() + myJson.species.name.slice(1);
            nameGrid.innerHTML += "<h2>Nombre:</h2><p style='color:#00ffff;'>" +nombre +"</p><br>";
            idGrid.innerHTML += "<h2>Id: </h2><p style='color:#00ffff;'>" +myJson.id +"</p><br>";

            /*-----ART WORK-----*/
            var artWrk = document.createElement("img");
            //artWrk.src = myJson.sprites.other.official-artwork.front_default;
            artWrk.src = myJson.sprites.other.dream_world.front_default;
            imgGrid.innerHTML += "<h2>Artwork: </h2>";
            document.getElementById("imagen").appendChild(artWrk);
            document.getElementsByClassName("grid-container")[0].getElementsByClassName("Imagen")[0].appendChild(artWrk);

            /*-----ALTURA Y PESO-----*/
            alturaGrid.innerHTML += "<h2>Altura: </h2><p style='color:#00ffff;'>" +myJson.height/10 +" m.</p><br>";
            pesoGrid.innerHTML += "<h2>Peso: </h2><p style='color:#00ffff;'>" +myJson.weight/10 +" kg.</p><br>";

            /*-----TIPOS-----*/
            tiposGrid.innerHTML += "<h2>Tipos: </h2>";
            //Colors extracted from https://www.epidemicjohto.com/t882-type-colors-hex-colors
            for (v = 0; v <myJson.types.length; v++ ){
                tipo = myJson.types[v].type.name.charAt(0).toUpperCase() + myJson.types[v].type.name.slice(1);
                switch(tipo){
                    case 'Fire':
                        tiposGrid.innerHTML += "<p style='color:#EE8130;'> Fuego </p>";
                        break;

                    case 'Normal':
                        tiposGrid.innerHTML += "<p style='color:#A8A77A;'> Normal</p>";
                        break;

                    case 'Water':
                        tiposGrid.innerHTML += "<p style='color:#6390F0;'> Agua</p>";
                        break;

                    case 'Electric':
                        tiposGrid.innerHTML += "<p style='color:#F7D02C;'> Eléctrico </p>";
                        break;

                    case 'Grass':
                        tiposGrid.innerHTML += "<p style='color:#7AC74C;'> Planta </p>";
                        break;

                    case 'Ice':
                        tiposGrid.innerHTML += "<p style='color:#96D9D6;'> Hielo </p>";
                        break;

                    case 'Fighting':
                        tiposGrid.innerHTML += "<p style='color:#C22E28;'> Lucha </p>";
                        break;

                    case 'Poison':
                        tiposGrid.innerHTML += "<p style='color:#A33EA1;'> Veneno </p>";
                        break;

                    case 'Ground':
                        tiposGrid.innerHTML += "<p style='color:#E2BF65;'> Tierra </p>";
                        break;

                    case 'Flying':
                        tiposGrid.innerHTML += "<p style='color:#A98FF3;'> Volador </p>";
                        break;

                    case 'Psychic':
                        tiposGrid.innerHTML += "<p style='color:#F95587;'> Psíquico </p>";
                        break;

                    case 'Bug':
                        tiposGrid.innerHTML += "<p style='color:#A6B91A;'> Bicho </p>";
                        break;

                    case 'Rock':
                        tiposGrid.innerHTML += "<p style='color:#B6A136;'> Roca </p>";
                        break;

                    case 'Ghost':
                        tiposGrid.innerHTML += "<p style='color:#735790;'> Fantasma </p>";
                        break;

                    case 'Dragon':
                        tiposGrid.innerHTML += "<p style='color:#6F35FC;'> Dragón </p>";
                        break;

                    case 'Dark':
                        tiposGrid.innerHTML += "<p style='color:#705746;'> Siniestro </p>";
                        break;

                    case 'Steel':
                        tiposGrid.innerHTML += "<p style='color:#B7B7CE;'> Acero </p>";
                        break;

                    case 'Fairy':
                        tiposGrid.innerHTML += "<p style='color:#D685AD;'> Hada </p>";
                        break;
                }
            }

            tiposGrid.innerHTML += "<br>";

            /*-----HABILIDADES-----*/
            habilidadesGrid.innerHTML += "<h2>Habilidades:</h2>";
            for (y = 0; y < myJson.abilities.length; y++ ){
                habilidad = myJson.abilities[y].ability.name.charAt(0).toUpperCase() + myJson.abilities[y].ability.name.slice(1);
                habilidad = habilidad.replace(/-/g, " ");
                habilidad = mayusculea(habilidad);

                habilidadesGrid.innerHTML += "<p style='color:#00ffff;'>" + habilidad + "</p>";
            }
            habilidadesGrid.innerHTML += "<br>";

            /*-----MOVIMIENTOS-----*/
            var M = document.getElementById("moves");
            var MO = document.getElementById("mos");

            M.style.display = "block";
            var mos = 0;

            var mocult = document.getElementById("mocultas");
            var moves = document.getElementById("movimientos");

            mocult.innerHTML = "";
            moves.innerHTML = "";
            for (x = 0; x < myJson.moves.length; x++ ){
                ataque = myJson.moves[x].move.name.charAt(0).toUpperCase() + myJson.moves[x].move.name.slice(1);
                ataque = ataque.replace(/-/g, " ");
                ataque = mayusculea(ataque);


                if (ataque == "Cut" || ataque == "Fly" || ataque == "Surf" || ataque == "Strength" || ataque == "Flash" || ataque == "Rock Smash" || ataque == "Waterfall" ||  ataque == "Dive" || ataque == "Whirlpool" || ataque == "Defog" || ataque == "Rock Climb"){
                    mocult.innerHTML += ataque + "<br>";
                    mos++;
                }else{
                    moves.innerHTML += ataque + "<br>";
                }
            }

            if (mos > 0){ MO.style.display = "block"; }

            /*-----VARIACIONES-----*/
            var forms = document.getElementById("formas");
            forms.innerHTML = "";
            fetch(myJson.species.url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    if (myJson.varieties.length > 1){
                        var F = document.getElementById("forms");
                        F.style.display = "block";
                        for (j = 0; j < myJson.varieties.length; j++ ){
                            variedad = myJson.varieties[j].pokemon.name.charAt(0).toUpperCase() + myJson.varieties[j].pokemon.name.slice(1);
                            variedad = variedad.replace(/-/g, " ");
                            variedad = mayusculea(variedad);

                            var x = document.createElement("A");
                            var t = document.createTextNode(variedad);

                            x.setAttribute("href", "#");
                            x.setAttribute("onclick", "limpiaResultado(); muestraInfo("+parseInt(myJson.varieties[j].pokemon.url.slice(34,-1))+");");
                            x.appendChild(t);

                            forms.appendChild(x);

                            forms.innerHTML += "<br>";
                        }
                    }
                });

            /*-----FORMAS-----*/
            var forms = document.getElementById("formas");
            if (myJson.forms.length > 1){
                var F = document.getElementById("forms");
                F.style.display = "block";
                for (a = 0; a < myJson.forms.length; a++){
                    forma = myJson.forms[a].name.charAt(0).toUpperCase() + myJson.forms[a].name.slice(1);
                    forma = forma.replace(/-/g, " ");
                    forma = mayusculea(forma);

                    var x = document.createElement("A");
                    var t = document.createTextNode(forma);

                    x.setAttribute("href", "#");
                    x.setAttribute("onclick", "cambiaInfo("+parseInt(myJson.forms[a].url.slice(39,-1))+");");
                    x.appendChild(t);

                    forms.appendChild(x);

                    forms.innerHTML += "<br>";
                }
            }

            /*-----LOCALIZACIONES-----*/
            var loc = document.getElementById("localizaciones");
            loc.innerHTML = "";
            fetch(myJson.location_area_encounters)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    if (myJson.length > 0){
                        var L = document.getElementById("locations");
                        L.style.display = "block";
                        for (h = 0; h < myJson.length; h++){

                            var nombre = myJson[h].location_area.name.charAt(0).toUpperCase() + myJson[h].location_area.name.slice(1);
                            nombre = nombre.replace(/-/g, " ");
                            nombre = mayusculea(nombre);

                            var link = myJson[h].location_area.url;

                            loc.innerHTML += "En: " + nombre + " <i class='arrow right'></i></a> ";

                            for (u = 0; u < myJson[h].version_details.length; u++){
                                var juego = myJson[h].version_details[u].version.name;
                                juego = juego.replace(/-/g, " ");
                                juego = mayusculea(juego);
                                loc.innerHTML += juego;
                                if (u < myJson[h].version_details.length-1){
                                    loc.innerHTML += ", ";
                                }else{
                                    loc.innerHTML += "<br>";
                                }
                            }


                            /*
                            sitio = myJson[h].location_area.name.charAt(0).toUpperCase() + myJson[h].location_area.name.slice(1);

                            var link = document.createElement("A");
                            var hijo = document.createTextNode(forma);

                            link.setAttribute("href", link);
                            //link.setAttribute("onclick", "");
                            link.appendChild(hijo);

                            sitio.appendChild(hijo);

                            sitio.innerHTML += "<br>";*/
                        }
                    }

                });

            /*-----DESCRIPCIÓN-----*/
            descripcionGrid.innerHTML += "<h2>Descripción: </h2>";
            var found = false;
            fetch(myJson.species.url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    if (myJson.flavor_text_entries.length > 0){
                        for (k = 0; k < myJson.flavor_text_entries.length && found == false ; k++ ){
                            //in case you want to change it to your language, check for the correct abrebiation in the PokeAPI web
                            if (myJson.flavor_text_entries[k].language.name == 'es'){
                                descripcionGrid.innerHTML += "<p style='color:#00ffff;'>" +myJson.flavor_text_entries[k].flavor_text+"</p><br>";
                                found = true;
                            }
                        }
                    }
                });

            /*-----EVOLUCIONES-----*/
            var evo = document.getElementById("evolucion");
            evo.innerHTML = "";
            fetch(myJson.species.url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    fetch(myJson.evolution_chain.url)
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(myJson) {

                            pkm1 = myJson.chain.species.name.charAt(0).toUpperCase() + myJson.chain.species.name.slice(1);

                            if (myJson.chain.evolves_to.length>0){

                                var E = document.getElementById("evolutions");
                                E.style.display = "block";

                                for (c = 0; c < myJson.chain.evolves_to.length; c++){

                                    evo.innerHTML += "<a href=pokedex.html?pokemon=" + pkm1.toLowerCase() + "> " + pkm1 + "<i class='arrow right'></i></a>";

                                    for (g = 0; g < myJson.chain.evolves_to[c].evolution_details.length; g++ ){

                                        if ( myJson.chain.evolves_to[c].evolution_details[g].gender !== null && myJson.chain.evolves_to[c].evolution_details[g].gender === 1){
                                            evo.innerHTML += " Si es del género: hembra";
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].gender !== null && myJson.chain.evolves_to[c].evolution_details[g].gender === 2){
                                            evo.innerHTML += " Si es del género: macho";
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].held_item !== null){
                                            evo.innerHTML += " Con este ítem en posesión): " + myJson.chain.evolves_to[c].evolution_details[g].held_item.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].item !== null){
                                            evo.innerHTML += " Con este ítem: " + myJson.chain.evolves_to[c].evolution_details[g].item.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].known_move !== null){
                                            evo.innerHTML += " Sabiendo este movimiento: " + myJson.chain.evolves_to[c].evolution_details[g].known_move.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].known_move_type !== null){
                                            evo.innerHTML += " Sabiendo un movimiento de tipo: " + myJson.chain.evolves_to[c].evolution_details[g].known_move_type.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].location !== null){
                                            evo.innerHTML += " En la localización: " + myJson.chain.evolves_to[c].evolution_details[g].location.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].min_affection !== null){
                                            evo.innerHTML += " Con afecto: " + myJson.chain.evolves_to[c].evolution_details[g].min_affection;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].min_beauty !== null){
                                            evo.innerHTML += " Con belleza: " + myJson.chain.evolves_to[c].evolution_details[g].min_beauty;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].min_happiness !== null){
                                            evo.innerHTML += " Con felicidad: " + myJson.chain.evolves_to[c].evolution_details[g].min_happiness;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].min_level !== null){
                                            evo.innerHTML += " Con nivel: " + myJson.chain.evolves_to[c].evolution_details[g].min_level;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].needs_overworld_rain !== false){
                                            evo.innerHTML += " Con lluvia: Sí";
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].party_species !== null){
                                            evo.innerHTML += " Si está esta especie en el equipo: " + myJson.chain.evolves_to[c].evolution_details[g].party_species.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].party_type !== null){
                                            evo.innerHTML += " Si está este tipo en equipo: " + myJson.chain.evolves_to[c].evolution_details[g].party_type.name;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].relative_physical_stats !== null){
                                            evo.innerHTML += " Si tiene estadísticas físicas: " + myJson.chain.evolves_to[c].evolution_details[g].relative_physical_stats;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].time_of_day !== '' && myJson.chain.evolves_to[c].evolution_details[g].time_of_day !== undefined && myJson.chain.evolves_to[c].evolution_details[g].time_of_day !== null){
                                            evo.innerHTML += " Dependiendo del tiempo del día: " + myJson.chain.evolves_to[c].evolution_details[g].time_of_day;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].trade_species !== null){
                                            evo.innerHTML += " Por tradeo: " + myJson.chain.evolves_to[c].evolution_details[g].trade_species;
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].trigger.name === 'trade'){
                                            evo.innerHTML += " Por tradeo: Sí";
                                        }
                                        if ( myJson.chain.evolves_to[c].evolution_details[g].turn_upside_down !== false){
                                            evo.innerHTML += " Girando boca abajo: Sí";
                                        }

                                        if(g == myJson.chain.evolves_to[c].evolution_details.length-1){

                                            evo.innerHTML += "<i class='arrow right'></i>";

                                            pkm2 = myJson.chain.evolves_to[c].species.name.charAt(0).toUpperCase() + myJson.chain.evolves_to[c].species.name.slice(1);

                                            evo.innerHTML += "Evoluciona a: <a href=pokedex.html?pokemon=" + pkm2.toLowerCase() + "> " + pkm2 + "</a>";

                                            if (myJson.chain.evolves_to[c].evolves_to.length>0){

                                                for (d = 0; d < myJson.chain.evolves_to[c].evolves_to.length; d++){

                                                    evo.innerHTML += "<i class='arrow right'></i>";

                                                    for (l=0; l<myJson.chain.evolves_to[c].evolves_to[d].evolution_details.length;l++){

                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].gender !== null && myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].gender === 2){
                                                            evo.innerHTML += " Si es del género: macho";
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].gender !== null && myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].gender === 1){
                                                            evo.innerHTML += " Si es del género: hembra";
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].held_item !== null){
                                                            evo.innerHTML += " Con este ítem en posesión): " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].held_item.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].item !== null){
                                                            evo.innerHTML += " Con este ítem: : " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].item.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].known_move !== null){
                                                            evo.innerHTML += " Sabiendo este movimiento: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].known_move.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].known_move_type !== null){
                                                            evo.innerHTML += " Sabiendo un movimiento de tipo: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].known_move_type.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].location !== null){
                                                            evo.innerHTML += " En la localización: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].location.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_affection !== null){
                                                            evo.innerHTML +=" Con afecto: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_affection;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_beauty !== null){
                                                            evo.innerHTML +=" Con belleza: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_beauty;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_happiness !== null){
                                                            evo.innerHTML +=" Con felicidad: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_happiness;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_level !== null){
                                                            evo.innerHTML +=" Con nivel: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].min_level;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].needs_overworld_rain !== false){
                                                            evo.innerHTML += " Con lluvia: Sí";
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].party_species !== null){
                                                            evo.innerHTML +=" Si está esta especie en el equipo: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].party_species.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].party_type !== null){
                                                            evo.innerHTML +=" Si está este tipo en equipo: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].party_type.name;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].relative_physical_stats !== null){
                                                            evo.innerHTML +=" Si tiene estadísticas físicas: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].relative_physical_stats;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].time_of_day !== '' && myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].time_of_day !== undefined && myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].time_of_day !== null){
                                                            evo.innerHTML +=" Dependiendo del tiempo del día: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].time_of_day;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].trade_species !== null){
                                                            evo.innerHTML +=" Por tradeo: " + myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].trade_species;
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].trigger.name === 'trade'){
                                                            evo.innerHTML +=" Por tradeo: Sí";
                                                        }
                                                        if ( myJson.chain.evolves_to[c].evolves_to[d].evolution_details[l].turn_upside_down !== false){
                                                            evo.innerHTML +=" Girando boca abajo: Sí";
                                                        }
                                                        if(l == myJson.chain.evolves_to[c].evolves_to[d].evolution_details.length-1){

                                                            evo.innerHTML += "<i class='arrow right'></i>";

                                                        }else{

                                                            evo.innerHTML += "<span class='dot'></span>";

                                                        }
                                                    }
                                                    pkm3 = myJson.chain.evolves_to[c].evolves_to[d].species.name.charAt(0).toUpperCase() + myJson.chain.evolves_to[c].evolves_to[d].species.name.slice(1);
                                                    evo.innerHTML += "Evoluciona a: <a href=pokedex.html?pokemon=" + pkm3.toLowerCase() + ">" + pkm3 + "<br></a>";
                                                }

                                            }else{
                                                evo.innerHTML += "<br>"
                                            }

                                        }else{
                                            evo.innerHTML += "<span class='dot'></span>";
                                        }

                                    }
                                }

                            }else{
                                evo.innerHTML += pkm1 + "<br>";
                            }

                        });

                });

            /*-----SPRITES-----*/
            fetch(myJson.forms[0].url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    var bck = document.createElement("img");
                    bck.src = myJson.sprites.back_default;
                    var bckS = document.createElement("img");
                    bckS.src = myJson.sprites.back_shiny;
                    var frnt = document.createElement("img");
                    frnt.src = myJson.sprites.front_default;
                    var frntS = document.createElement("img");
                    frntS.src = myJson.sprites.front_shiny;

                    spritesGrid.innerHTML += "<h2>Sprites Macho/Generales: </h2><br>";
                    document.getElementById("spr").appendChild(frnt);
                    document.getElementById("spr").appendChild(bck);
                    document.getElementById("spr").appendChild(bckS);
                    document.getElementById("spr").appendChild(frntS);
                    document.getElementById("spr").innerHTML += "<br>";

                    fetch("https://pokeapi.co/api/v2/pokemon-species/"+myJson.name+"/")
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(myJson) {
                            if (myJson.has_gender_differences){
                                spritesGrid.innerHTML += "<h2>Sprites Hembra: </h2><br>";
                                fetch("https://pokeapi.co/api/v2/pokemon/"+myJson.name+"/")
                                    .then(function(response) {
                                        return response.json();
                                    })
                                    .then(function(myJson) {
                                        var bckF = document.createElement("img");
                                        bckF.src = myJson.sprites.back_female;
                                        var bckSF = document.createElement("img");
                                        bckSF.src = myJson.sprites.back_shiny_female;
                                        var frntF = document.createElement("img");
                                        frntF.src = myJson.sprites.front_female;
                                        var frntSF = document.createElement("img");
                                        frntSF.src = myJson.sprites.front_shiny_female;

                                        document.getElementById("spr").appendChild(frntF);
                                        document.getElementById("spr").appendChild(bckF);
                                        document.getElementById("spr").appendChild(bckSF);
                                        document.getElementById("spr").appendChild(frntSF);
                                    });
                            }
                        });



                });

            //Sugerir Rol: https://sites.google.com/site/pokemoncompetitive/roles
            /*-----STATS-----*/
            var hp= 0;
            var atk = 0;
            var df = 0;
            var spAtk = 0;
            var spDf = 0;
            var spd = 0;

            for (z = 0; z < myJson.stats.length; z++ ){
                stat = myJson.stats[z].stat.name.charAt(0).toUpperCase() + myJson.stats[z].stat.name.slice(1);
                if (stat == 'Hp'){
                    hp = parseInt(myJson.stats[z].base_stat);
                }else if(stat == 'Attack'){
                    atk = parseInt(myJson.stats[z].base_stat);
                }else if(stat == 'Defense'){
                    df = parseInt(myJson.stats[z].base_stat);
                }else if(stat == 'Special-attack'){
                    spAtk = parseInt(myJson.stats[z].base_stat);
                }else if(stat == 'Special-defense'){
                    spDf = parseInt(myJson.stats[z].base_stat);
                }else if(stat == 'Speed'){
                    spd = parseInt(myJson.stats[z].base_stat);
                }
            }

            var hpBase = document.getElementById("BaseHP");
            var atkBase = document.getElementById("BaseATK");
            var defBase = document.getElementById("BaseDEF");
            var SpAtkBase = document.getElementById("BaseSPATK");
            var SpDefBase = document.getElementById("BaseSPDEF");
            var SpeedBase = document.getElementById("BaseSPEED");

            hpBase.innerHTML = hp;
            atkBase.innerHTML = atk;
            defBase.innerText  = df;
            SpAtkBase.innerHTML = spAtk;
            SpDefBase.innerHTML = spDf;
            SpeedBase.innerHTML = spd;

            generaGraph(hp,atk,df,spAtk,spDf,spd);

            /*-----CALCULADORA-----*/
            var C = document.getElementById("calc");
            C.style.display = "block";


        });
}

function limpiaResultado(){
    var nameGrid = document.getElementById("name");
    nameGrid.innerHTML = "";

    var idGrid = document.getElementById("num");
    idGrid.innerHTML = "";

    var imgGrid = document.getElementById("imagen");
    imgGrid.innerHTML = "";

    var alturaGrid = document.getElementById("h");
    alturaGrid.innerHTML = "";

    var pesoGrid = document.getElementById("w");
    pesoGrid.innerHTML = "";

    var habilidadesGrid = document.getElementById("ab");
    habilidadesGrid.innerHTML = "";

    var descripcionGrid = document.getElementById("desc");
    descripcionGrid.innerHTML = "";

    var spritesGrid = document.getElementById("spr");
    spritesGrid.innerHTML = "";

    var tiposGrid = document.getElementById("ty");
    tiposGrid.innerHTML = "";

}

function mayusculea(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function borraLista(){
    document.getElementById("lista").style.display = "none";
}

function muestraLista(){
    document.getElementById("lista").style.display = "inline";
}

function asyncGetAux() {
    numPKM= 1118;   //Pokémon y formas
    numX = 898;     //Número máximo en la pokedex


    for (i=1; i<=numX; i++){

        var link = "https://pokeapi.co/api/v2/pokemon/"+i
        fetch(link)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {


                var num = myJson.id;

                var node = document.createElement('li');
                nombre = myJson.species.name.charAt(0).toUpperCase() + myJson.species.name.slice(1);

                var x = document.createElement("A");
                var t = document.createTextNode(" #"+ num +" "+nombre);

                x.setAttribute("href", "#");
                x.setAttribute("onclick", "limpiaResultado(); muestraInfo("+num+");");
                x.appendChild(t);

                var frnt = document.createElement("img");
                frnt.src = myJson.sprites.front_default;
                frnt.setAttribute("onclick", "limpiaResultado(); muestraInfo("+num+");");
                node.appendChild(frnt);
                node.appendChild(x);
                node.setAttribute("id", num);
                document.getElementById("menu").appendChild(node);

            });
    }

    var num = GetURLParameter('pokemon');
    muestraInfo(num);
}

function makeSearch() {
    var variable = document.getElementById("search").value;
    muestraInfo(variable.toLowerCase());
    return false;
}

function actualizaInfo() {

    /*Ponemos los límites*/
    var limIV = 31;
    var limEV = 255;
    var limEVConjunto = 510;

    var IVHP = 0;
    var IVATK = 0;
    var IVSPATK = 0;
    var IVDEF =  0;
    var IVSPDEF = 0;
    var IVSPE = 0;

    var EVHP = 0;
    var EVATK = 0;
    var EVSPATK = 0;
    var EVDEF =  0;
    var EVSPDEF = 0;
    var EVSPE = 0;

    /*Cogemos los IVs, ninguno puede ser mayor a 31*/
    if ( document.getElementById("salud").value != ""){IVHP = parseInt(document.getElementById("salud").value);}
    if ( document.getElementById("ataque").value != ""){IVATK = parseInt(document.getElementById("ataque").value);}
    if ( document.getElementById("ataque_especial").value != ""){IVSPATK = parseInt(document.getElementById("ataque_especial").value);}
    if ( document.getElementById("defensa").value != ""){IVDEF =  parseInt(document.getElementById("defensa").value);}
    if ( document.getElementById("defensa_especial").value != ""){IVSPDEF = parseInt(document.getElementById("defensa_especial").value);}
    if ( document.getElementById("velocidad").value != ""){IVSPE = parseInt(document.getElementById("velocidad").value);}

    /*Cogemos los EVs, ninguno puede ser mayor a 255 y el acumulado total no puede rebasar 510*/
    if ( document.getElementById("hp").value!= ""){EVHP = parseInt(document.getElementById("hp").value);}
    if ( document.getElementById("atk").value != ""){EVATK = parseInt(document.getElementById("atk").value);}
    if ( document.getElementById("spatk").value != ""){EVSPATK = parseInt(document.getElementById("spatk").value);}
    if ( document.getElementById("def").value != ""){EVDEF =  parseInt(document.getElementById("def").value);}
    if ( document.getElementById("spdf").value!= ""){EVSPDEF = parseInt(document.getElementById("spdf").value);}
    if ( document.getElementById("spd").value != ""){EVSPE = parseInt(document.getElementById("spd").value);}

    /*Cogemos la info del gráfico radar*/
    var hpBase = parseInt(document.getElementById("BaseHP").innerText);
    var atkBase = parseInt(document.getElementById("BaseATK").innerText);
    var defBase = parseInt(document.getElementById("BaseDEF").innerText);
    var SpAtkBase = parseInt(document.getElementById("BaseSPATK").innerText);
    var SpDefBase = parseInt(document.getElementById("BaseSPDEF").innerText);
    var SpeedBase = parseInt(document.getElementById("BaseSPEED").innerText);

    /*Modificadores de Naturaleza*/
    var atkNat = 1;
    var defNat = 1;
    var SpAtkNat = 1;
    var SpDefNat = 1;
    var SpeedNat = 1;

    /*Cogemos el nivel y la naturaleza*/
    var Nivel = parseInt(document.getElementById("level").value);
    var Naturaleza = document.getElementById("nats").value;

    /*Arreglamos valores si es que falla alguno*/
    var acumuladoEVS = 0;

    /*Limitamos la info de los IVs si hay un valor superior a los límites*/
    if(IVHP > limIV){IVHP = limIV;}
    if(IVATK > limIV){IVATK = limIV;}
    if(IVSPATK > limIV){IVSPATK = limIV;}
    if(IVDEF > limIV){IVDEF = limIV;}
    if(IVSPDEF > limIV){IVSPDEF = limIV;}
    if(IVSPE > limIV){IVSPE = limIV;}

    /*Limitamos la info de los EVs si hay valores superiores a los límites individuales o comunitarios*/
    if(EVHP > limEV){EVHP = limEV;}
    if(EVATK > limEV){EVATK = limEV;}
    if(EVSPATK > limEV){EVSPATK = limEV;}
    if(EVDEF > limEV){EVDEF = limEV;}
    if(EVSPDEF > limEV){EVSPDEF = limEV;}
    if(EVSPE > limEV){EVSPE = limEV;}

    if (acumuladoEVS + EVHP > limEVConjunto){ EVHP = limEVConjunto - acumuladoEVS; }
    acumuladoEVS += EVHP;

    if (acumuladoEVS + EVATK > limEVConjunto){ EVATK = limEVConjunto - acumuladoEVS; }
    acumuladoEVS += EVATK;

    if (acumuladoEVS + EVSPATK > limEVConjunto){ EVSPATK = limEVConjunto - acumuladoEVS; }
    acumuladoEVS += EVSPATK;

    if (acumuladoEVS + EVDEF > limEVConjunto){ EVDEF = limEVConjunto - acumuladoEVS; }
    acumuladoEVS += EVDEF;

    if (acumuladoEVS + EVSPDEF > limEVConjunto){ EVSPDEF = limEVConjunto - acumuladoEVS; }
    acumuladoEVS += EVSPDEF;

    if (acumuladoEVS + EVSPE > limEVConjunto){ EVSPE = limEVConjunto - acumuladoEVS; }

    /*Switch para establecer valores de Naturaleza*/
    switch(Naturaleza){
        case 'Osada':
            atkNat = 0.9;
            defNat = 1.1;
            break;
        case 'Modesta':
            atkNat = 0.9;
            SpAtkNat = 1.1;
            break;
        case 'Serena':
            atkNat = 0.9;
            SpDefNat = 1.1;
            break;
        case 'Miedosa':
            atkNat = 0.9;
            SpeedNat = 1.1;
            break;
        case 'Huraña':
            atkNat = 1.1;
            defNat = 0.9;
            break;
        case 'Afable':
            defNat = 0.9;
            SpAtkNat = 1.1;
            break;
        case 'Amable':
            defNat = 0.9;
            SpDefNat = 1.1;
            break;
        case 'Activa':
            SpAtkNat = 0.9;
            SpeedNat = 1.1;
            break;
        case 'Firme':
            atkNat = 1.1;
            SpAtkNat = 0.9;
            break;
        case 'Agitada':
            SpAtkNat = 0.9;
            defNat = 1.1;
            break;
        case 'Cauta':
            SpAtkNat = 0.9;
            SpDefNat = 1.1;
            break;
        case 'Alegre':
            SpAtkNat = 0.9;
            SpeedNat = 1.1;
            break;
        case 'Pícara':
            atkNat = 1.1;
            SpDefNat = 0.9;
            break;
        case 'Floja':
            SpDefNat = 0.9;
            defNat = 1.1;
            break;
        case 'Alocada':
            SpDefNat = 0.9;
            SpAtkNat = 1.1;
            break;
        case 'Ingenua':
            SpDefNat = 0.9;
            SpeedNat = 1.1;
            break;
        case 'Audaz':
            atkNat = 1.1;
            SpeedNat = 0.9;
            break;
        case 'Plácida':
            SpeedNat = 0.9;
            defNat = 1.1;
            break;
        case 'Mansa':
            SpeedNat = 0.9;
            SpAtkNat = 1.1;
            break;
        case 'Grosera':
            SpeedNat = 0.9;
            SpDefNat = 1.1;
            break;
    }

    /*Hacemos el cálculo de los stats nuevos*/
    if (hpBase < 5 ){
        HPFinal = hpBase;
    }else{
        var HPFinal = Math.floor(0.01*(2*hpBase + IVHP + Math.floor(0.25*EVHP))*Nivel) +Nivel +10;
    }

    if (atkBase < 5){
        AtkFinal = atkBase;
    }else{
        var AtkFinal = Math.floor(((0.01*(2*atkBase + IVATK + Math.floor(0.25*EVATK))*Nivel)+5)*atkNat);
    }

    if (defBase < 5){
        DefFinal = defBase;
    }else{
        var DefFinal = Math.floor(((0.01*(2*defBase + IVDEF + Math.floor(0.25*EVDEF))*Nivel)+5)*defNat);
    }

    if (SpAtkBase < 5){
        SpAtkFinal = SpAtkBase;
    }else{
        var SpAtkFinal = Math.floor(((0.01*(2*SpAtkBase + IVSPATK + Math.floor(0.25*EVSPATK))*Nivel)+5)*SpAtkNat);
    }

    if (SpDefBase < 5){
        SpDefFinal = SpDefBase;
    }else{
        var SpDefFinal = Math.floor(((0.01*(2*SpDefBase + IVSPDEF + Math.floor(0.25*EVSPDEF))*Nivel)+5)*SpDefNat);
    }

    if (SpeedBase < 5){
        SpeedFinal = SpeedBase
    }else{
        var SpeedFinal = Math.floor(((0.01*(2*SpeedBase + IVSPE + Math.floor(0.25*EVSPE))*Nivel)+5)*SpeedNat);
    }

    /*Escribimos en las casillas los valores correctos*/

    document.getElementById("salud").value = IVHP;
    document.getElementById("ataque").value = IVATK;
    document.getElementById("ataque_especial").value = IVSPATK;
    document.getElementById("defensa").value = IVDEF;
    document.getElementById("defensa_especial").value = IVSPDEF;
    document.getElementById("velocidad").value = IVSPE;

    document.getElementById("hp").value = EVHP;
    document.getElementById("atk").value = EVATK;
    document.getElementById("spatk").value = EVSPATK;
    document.getElementById("def").value = EVDEF;
    document.getElementById("spdf").value = EVSPDEF;
    document.getElementById("spd").value = EVSPE;

    /*Dibujamos el nuevo graph*/
    generaGraph(HPFinal, AtkFinal, DefFinal, SpAtkFinal, SpDefFinal, SpeedFinal);

    return false;
}


function sortFunc(){
    var ul = document.getElementById("menu");
    var list = ul.children;

    for(var i=0; i<list.length; i++){
        list[i].onclick = function(){
            if(i > 0){
                ul.removeChild(this);
                ul.insertBefore(this, list[0]);

                for(var j=0; j<list.length; j++){
                    list[j].id = j+1;
                }
            }
        };
    }
}

function GetURLParameter(sParam) {

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
