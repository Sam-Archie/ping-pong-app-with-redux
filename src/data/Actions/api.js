import axios from "../../axios";
import {start} from "./state";

export const postGame = (data) => {
    return dispatch => {
        axios.post("/games", {
            player_1 : data.playerOneName,
            player_2 : data.playerTwoName,
            winning_score : data.winningScore,
            change_serve : data.servingNumber,

        }).then(({ data }) => {
            dispatch(start(data.data))
            console.log(data.data)
        })
    }
}