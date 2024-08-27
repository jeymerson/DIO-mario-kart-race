export const rollDice = async ():  Promise<number> =>{
    return Math.floor(Math.random() * 6) +1;
}

//para decidir se o perdedor perde um ou dois pontos
export const rollDiceConfrontLoser = async (poits:number):  Promise<number> =>{
    //uma maneira de decidir de forma aleatória se o perdedor perde 1 ou dois pontos sem ficar com o valor negátivo
    if ((await rollDice()%2) === 0 && poits > 1) {
       return 2
    } 
    else {return 1}
}
//para decidir se o ganhador vai ganhar um ponto extra
export const rollDiceConfrontWiner = async ():  Promise<number> =>{
    if ((await rollDice()%2) === 0) {
        return 1
     } 
     else {return 0}

}