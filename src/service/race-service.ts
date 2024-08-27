import { PlayerModel } from "../models/player-model";
import { getRandomBlock } from "./block-server";
import { winnerBlock } from "./results-server";
import { rollDice } from "./rollDice-server";
    
 export const playRaceEngine = async(character1:PlayerModel, character2:PlayerModel, turnsRace:number) => {
    let raceHistory = `Histórico da corrida!:\n`
    console.log(`
             🏁🚨 Corrida Iniciada!🏁🚨
                    ${character1.NAME } 🆚 ${character2.NAME} 
                 Corrida de ${turnsRace} rodadas
            `)   
     
    for(let round =1; round <= turnsRace; round ++) {
        console.log(`🏁 Rodada ${round}`);
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)
        //ROLAR DADOS
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
        await winnerBlock(character1,character2,diceResult1,diceResult2,block);    

    raceHistory += `Volta Nº ${round} = ${character1.NAME}: ${character1.POINTS} ponto(s) | ${character2.NAME}: ${character2.POINTS} ponto(s) no bloco de ${block}\n` 
    console.log("_____________________________________________________________")
    }
    raceHistory += "_____________________________________________________________"
    console.log(raceHistory)
}
