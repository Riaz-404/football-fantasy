import { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Team from './Component/Team/Team';
import 'bootstrap/dist/css/bootstrap.css';
import Selected from './Component/Selected/Selected';

function App() {
    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                setPlayers(data);
            })
            .catch(err => console.error(err));
    }, [])

    const handleAddPlayer = (player) => {
        const newPlayer = [...team, player];
        setTeam(newPlayer);
    }

    return (
        <div>
            <Header></Header>

            <div className="team-container">
                <div className="player">
                    {
                        players.map(player => <Team player={player} key={player.code} handleAddPlayer={handleAddPlayer}></Team>)
                    }
                </div>
                <div className="selected">
                    <Selected team={team}></Selected>
                </div>
            </div>
        </div>
    );
}

export default App;
