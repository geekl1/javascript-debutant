
function show_table_with_content(signe, table_parent, limit = 10){
  //  On initial le content du tableau à vide
  table_parent.innerHTML = '';
  //  On déclare une ouverture de la balise tr
  var balise_tr = '<tr>';
  //  On déclare une fermeture de la balise tr
  var balise_tr_close = '</tr>';

  // Pour faire simple on déclare l'entête du tableau en HTML en fonction du signe réçu, On pouvait générer l'entête de façon dynamique en javascript
  //var headers = "<tr><th>"+signe+"</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>"

  // deuxième option de déclaration de l'entête

  var headers = "<th style='color:green;'>"+signe+"</th>";
    for (var i = 0; i < limit; i++) {
        headers += "<th style='color:red;'>" + i + "</th>";
    }
  headers = balise_tr + headers + balise_tr_close
  // On ajoute l'entête à notre tableau qu'on a réçu en paramètre
  table_parent.innerHTML += headers;

    // On parcours les différentes ligne de notre tableau
    for (var i = 0; i < limit; i++) {

      // On initialise la valeur du i courant pour éviter l'opération avec le signe réçu
      // En créant une ligne de debut
      let row = '<td><strong style="color:red;">'+ i +'</strong></td>';

      //  On parcours les colonnes et à chaque colonne on ajoute l'indice de la ligne (signe) indice du colonne
      for(var j=0; j<limit ; j++){
          //  en fonction du signe on ajoute le contenu approprié
          switch (signe) {
            case '+':
              row += "<td>" + (j + i) +"</td>";
              break;
            case '-':
              row += "<td>" + (j - i) +"</td>";
              break;
            case '*':
              row += "<td>" + (j * i) +"</td>";
              break;
            case '/':
              //  Ici on fixe le résultat à deux chiffres après la virgule
              row += "<td>" + (j / i).toFixed(2) +"</td>";
              break;
            case '%':
              row += "<td>" + (j % i) +"</td>";
              break;
            default:

          }
      }
      // On ajouter la ligne construite à notre tableau réçu en paramètre
      table_parent.innerHTML += balise_tr + row + balise_tr_close;
    }
}
