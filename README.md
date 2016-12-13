# lunar-landing-javascript-Modificaciones
**código html:**

Se modificaron las etiquetas LI que están dentro de DIV con id="hidem" y se añadieron 3 botones javascript uno para reiniciar la pagina web actual y  dos más para abrir otras páginas web de about y instrucciones.

Se crearon los archivos html ABOUT y HOW para crear dos web una de instrucciones y otra de acerca de... 

**código CSS:**

CSS Escritorio: Se modifico los selectores de clase a, b, c, d con el fondo de una imagen del espacio(a,b,c) y la luna (d) en el css y se añadieron colores al testo de los id(cpanel y menu)de la etiquetas UL del html .

CSS dispositivos móviles: Se modificaron el fondo de los selectores de clase (a,b,c) con fondo negro y se añadió imagen de fondo al selector clase (d), después se modificaron los id NAVE para modificar tamaño imagen, id CPANEL para añadir color amarillo al testo, id HIDEM y SHOWM para añadir color verde al testo con fondo gris y borde verde.

CSS About y HOW : Se crearon dos css uno para escritorio y otro para dispositivos móviles, estos dos CSS le dan estilo a las paginas html about y how creadas para los botones javascript INSTRUCCIONES y ACERCA DE...  de la web index en las dos CSS se aplicaron fondo negro con títulos en color verde y letras color blanco también se aplico un formato para etiqueta DIV con id VOLVER para resaltar el botón javascript de volver a la web index. La css para dispositivos móviles tiene algunos parámetros distintos para ajustar mejor algunas etiquetas html como la id LISTA.

**código javascript**

1. Se agregaron las funciones document.onkeydown y onkeyup para que al pulsar el teclado poder cambiar imagen de la nave a motor encendido/apagado  y modificar la aceleración de g/-g, también se añadió otra modificación de variable (d) 0/10 (la variable D la usaremos como multiplicador con la variable DT para disminuir el depósito de combustible al activar los motores.

2. Se agregaron las funciones document.onmousedown y onmouseup para que al mantener pulsado el ratón poder cambiar imagen de la nave a motor encendido/apagado  y modificar la aceleración de g/-g, también se añadió otra modificación de variable (d) 0/10 (la variable D la usaremos como multiplicador con la variable DT para disminuir el depósito de combustible al activar los motores.

3. Dentro de la función moverNave() se añadió l -= d* dt para restar a la variable l el combustible usando el mismo "contador" que manipula las variables V y Y después se añadió document.getelementbyid("fuel").innerHTML=l para modificar el valor del fuel en la web.

4. Se modifico la condición if añadiendo Y<10 para detener  el javascript si la nave sube mas en vertical y evitar que salga de la pantalla por arriba, después se añadió else if para agregar otra condición Y<70 para indicar que si Y es menor que 70 modificar valor css de la etiqueta div nave y hacer que se desplace, por último else añadimos la llamada a la función verificar().

5. La función verificar tiene una condición para V<5 si la velocidad es menor que 5 indica mensaje de felicitación y detener el script, en caso superior a 5 cambiar la imagen de nave a explosión y termina el script.

