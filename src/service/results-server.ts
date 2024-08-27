import { PlayerModel } from "../models/player-model";
import { rollDiceConfrontLoser, rollDiceConfrontWiner } from "./rollDice-server";

 export const logRollResult =  async(characterName: String, block: String, diceResult: number, attribute: number) => {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute}  = ${diceResult + attribute}  `)
}

export const declareWinner = async (character1:PlayerModel, character2:PlayerModel) => {
    console.log("Resultado final:")
    console.log(`${character1.NAME}: ${character1.POINTS} pontos(s)`);
    console.log(`${character2.NAME}: ${character2.POINTS} pontos(s)`);
    if(character1.POINTS> character2.POINTS) {
        console.log(`${character1.NAME} venceu a corrida! parabéns! 🏆`)
    } else if (character2.POINTS> character1.POINTS) {
        console.log(`${character2.NAME} venceu a corrida! parabéns! 🏆`)
     } else {
        console.log(`A corrida terminou em empate`)
     }
    
}
//bloco para avaliar o resultado do bloco atual
export const winnerBlock =  async(character1:PlayerModel, character2:PlayerModel, daceResul1: number, daceResul2: number, block: String) => {
    
    let racePoint1 = block === 'RETA'
    ? character1.SPEED
    : block === 'CURVA'
    ? character1.MANEUVERABILITY
    : block === 'CONFRONTO'
    ? character1.POWER
    : 0; // Caso o valor não seja nenhum dos três quer dizer que deu muito ruim
   
    let racePoint2 = block === 'RETA'
    ? character1.SPEED
    : block === 'CURVA'
    ? character1.MANEUVERABILITY
    : block === 'CONFRONTO'
    ? character1.POWER
    : 0; // Caso o valor não seja nenhum dos três quer dizer que deu muito ruim
    
    await logRollResult (character1.NAME, block, daceResul1,racePoint1)
    await logRollResult (character2.NAME,block,daceResul2,racePoint2)
    let raceTotalPoints1 = daceResul1 += racePoint1;
    let raceTotalPoints2 = daceResul2 += racePoint2;
    

    //verifica o bloco e coloca a pontuação

    if(raceTotalPoints1 > raceTotalPoints2) {
        if (block === "CONFRONTO") {
            let winnerConfront = await rollDiceConfrontWiner();
            console.log(`${character1.NAME} confrontou ${character2.NAME}🥊`)
            if (character2.POINTS > 0) {
                let loserResult = await rollDiceConfrontLoser(character2.POINTS);
                character2.POINTS -= loserResult
                console.log(`${character2.NAME} perdeu ` + (loserResult === 1 ? `um ponto 🐢💨`:`dois pontos 💣💥`))
                console.log(`A sorte foi lançada para o ganhador ${character1.NAME} e`+ (winnerConfront === 1 ? ` ganhou 1 ponto extra 😊`:` não ganhou nada😥`))
                character1.POINTS += winnerConfront
            } else {
                console.log(`${character2.NAME} não tem pontos a perder 🚫! `)
                console.log(`A sorte foi lançada para o ganhador ${character1.NAME} e`+ (winnerConfront === 1 ? ` ganhou 1 ponto extra 😊`:` não ganhou nada😥`))
                character1.POINTS += winnerConfront
            }
        } else {
            console.log (`${character1.NAME} venceu o bloco de ${block} e ganhou um ponto! 💹`)
            character1.POINTS ++;
        }

    } 
    else if (raceTotalPoints2 > raceTotalPoints1) {
        if (block === "CONFRONTO") {
            let winnerConfront = await rollDiceConfrontWiner();
            if (character1.POINTS > 0) {
                let loserResult = await rollDiceConfrontLoser(character1.POINTS);
                character1.POINTS -= loserResult
                console.log(`${character1.NAME} perdeu ` + (loserResult === 1 ? `um ponto 🐢💨`:`dois pontos 💣💥`))
                console.log(`A sorte foi lançada para o ganhador ${character2.NAME} e`+ (winnerConfront === 1 ? ` ganhou 1 ponto extra 😊`:` não ganhou nada😥`))
                character1.POINTS += winnerConfront
            } else {
                console.log(`${character1.NAME} não tem pontos a perder 🚫!  `)
                console.log(`A sorte foi lançada para o ganhador ${character2.NAME} e`+ (winnerConfront === 1 ? ` ganhou 1 ponto extra 😊`:` não ganhou nada😥`))
                character1.POINTS += winnerConfront
            }
        } else {
            console.log (`${character2.NAME} venceu o bloco de ${block} e ganhou um ponto! 💹`)
            character2.POINTS ++;
        }

    } else {console.log(`O bloco terminou em empate!`)}


}