import { PlayerModel } from "./models/player-model";
import * as PlayerSet from "./service/players-service"
import { declareWinner } from "./service/results-server";
import { playRaceEngine } from "./service/race-service";



(async function main() {
    //criando os jogadores, mude o index para alterar o jogador
    let player1: PlayerModel = await PlayerSet.findPlayerById(1);  
    let player2: PlayerModel =  await PlayerSet.findPlayerById(4);

    //parametros (jogador 1 e 2 e a quantidade de voltas)
    await playRaceEngine(player1, player2,5);
    //verifica o resultado da corrida
    await declareWinner(player1, player2);
 })()