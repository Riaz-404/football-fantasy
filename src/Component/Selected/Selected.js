import React from 'react';
import './Selected.css'

const Selected = (props) => {
    console.log(props);

    const team = props.team;

    let total_cost = 0;

    for (let i = 0; i < team.length; i++) {
        const player = team[i];
        total_cost = parseFloat(total_cost);
        total_cost += player.now_cost / 10;
        total_cost = parseFloat(total_cost).toFixed(1);
    }

    return (
        <div className="selected-container">
            <div className="player-section">
                <h4 id="title">Players Selected: {props.team.length}</h4>
                <h6>Selected Players: </h6>
                {
                    team.map(player =>
                        <li>{player.first_name} {player.second_name} <span className="text-righted">${player.now_cost / 10}</span></li>
                    )
                }
            </div>
            <div className="total-section">
                <h5>Total: <span className="text-righted">${total_cost}</span></h5>
            </div>
        </div>

    );
};

export default Selected;