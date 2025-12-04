function drawGift(size, symbol) {
    if (size <= 1) return ''

    let gift = '';

    const lineBreak =  () => gift += `\n`


    const topOrBottom = () => {
        for(let i = 0; i < size; i++){
            gift += `${symbol}`
        }
    }

    topOrBottom();
    lineBreak();

    for (let i = 0; i < size - 2; i++){
        for (let j = 0; j < size; j++){

            if(j === 0 || j === size - 1){
                gift += `${symbol}`
            }else{
                gift += ` `
            }
        }
        lineBreak();
    }

    topOrBottom();

    return gift
}



// En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

// Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

// Le pasan dos parámetros:

// size: el tamaño del regalo cuadrado
// symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
// El regalo debe cumplir:

// Debe ser un cuadrado de size x size.
// El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
// Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
// El resultado final debe ser un string con saltos de línea \n.
// Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

// 🧩 Ejemplos


const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…