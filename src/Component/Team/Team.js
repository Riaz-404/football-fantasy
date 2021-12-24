import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

const Team = (props) => {
    const { first_name, second_name, photo, now_cost, form, total_points, selected_by_percent } = props.player;
    const cost = now_cost / 10;
    return (
        <div className="player-container">
            <div className="player-image">
                <img src={photo} alt="" />
            </div>
            <div className="player-details">
                <h1 id="player-name">{first_name} {second_name}</h1>
                <h3>Price: ${cost}</h3>
                <br />
                <div className="player-form">
                    <div className="form form-border">
                        <h4>Form</h4>
                        <p>{form}</p>
                    </div>
                    <div className="form form-border">
                        <h4>Total Points</h4>
                        <p>{total_points}</p>
                    </div>
                    <div className="form">
                        <h4>Teams selected by</h4>
                        <p>{selected_by_percent}%</p>
                    </div>
                </div>
                <button onClick={() => props.handleAddPlayer(props.player)} style={{ backgroundColor: '#000042' }} className="btn btn-success"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Player</button>
            </div>
        </div>


    );
};

export default Team;

