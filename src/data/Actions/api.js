import axios from "../../axios";
import {start, player} from "./state";


export const postGame = (data) => {
    return dispatch => {
        axios.post("/games", {
            player_1 : data.playerOneName,
            player_2 : data.playerTwoName,
            winning_score : data.winningScore,
            change_serve : data.servingNumber,

        }).then(({ data }) => {
            dispatch(start(data.data))
        })
    }
}

export const patchScore = playerNumber => {
    return (dispatch, getState) => {
        const id = getState().game_id;
        axios.patch(`/games/${id}/score`, {
            player : playerNumber,
        }
    ).then(() => {
        dispatch(player(playerNumber))
    })}
}


