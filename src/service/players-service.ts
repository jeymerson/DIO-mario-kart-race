import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
    NAME: "Mario",
    ID: 1,
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0
    }, 
    {
    NAME: "Peach",
    ID: 2,
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 2,
    POINTS: 0
    },
    {
    NAME: "Yoshi",
    ID: 3,
    SPEED: 2,
    MANEUVERABILITY: 4,
    POWER: 3,
    POINTS: 0
    }, 
    {
    NAME: "Bowser",
    ID: 4,
    SPEED: 5,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0
    },
    {
    NAME: "Luigi",
    ID: 5,
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0
    }, 
    {
    NAME: "Donkey Kong",
    ID: 6,
    SPEED: 2,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0
    },
  
 ]
 const defaultPlayer: PlayerModel = {
      ID: 0,
      NAME: "undefined",
      SPEED: 0,
      MANEUVERABILITY: 0,
      POWER: 0,
      POINTS: 0
    }
 
 export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
  };

  export const findPlayerById = async (id: number): Promise<PlayerModel> => {
    let player = undefined;
    player = database.find((player) => player.ID === id);
    if(player === undefined) {
        return defaultPlayer
    }
    return player;  
  };