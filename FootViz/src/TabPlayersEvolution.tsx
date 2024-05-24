import { useState } from 'react'
import { Player, players } from './players/player';
import LineChart  from './components/LineChart';
import RadarChart  from './components/RadarChart';
import TimelineChart from './components/TimelineChart'
import { Improved_Player, improved_players } from './players/improved_player';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const TabPlayersEvolution = () => {

    const [displayOnePlayer, setDisplayOnePlayer] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState<Player>();
    const [selectedImprovedPlayer, setSelectedImprovedPlayer] = useState<Improved_Player>();
    const OnePlayer = () => {

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>

                <Button variant="contained" startIcon={<ArrowBackIcon />} style ={{width:'80px'}} onClick={() => setDisplayOnePlayer(false)}>
                    Back
                </Button>

                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '30px'}}>
                    <img src = {selectedImprovedPlayer?.player_face_url} alt = {selectedImprovedPlayer?.long_name} style ={{marginTop:'10px', width:'100px', height:'100px'}}/>
                    <div style ={{marginLeft: '10px'}}> {selectedImprovedPlayer?.long_name}</div>
                </div>

                <div style = {{width: '100%'}}>
                <iframe width="2500" height="800" src={selectedImprovedPlayer?.evolutionImageURL} title={selectedImprovedPlayer?.long_name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <div style = {{width: '50%'}}>
                        
                        <TimelineChart style = {{width: '60%'}} data={selectedImprovedPlayer?.timeline}/>
                    </div>

                    <div style = {{width: '50%'}}>

                        <RadarChart data = {selectedImprovedPlayer?.skill_2023 || []} style = {{width: '40%', borderRight: '1 px'}}/>
                    </div>
                </div>

            </div>
        )
    }

    const PlayerList = () => {

        const playerClicked = (improved_players: Improved_Player) => {
            setDisplayOnePlayer(true);
            setSelectedImprovedPlayer(improved_players);
        }

        return (
            <div>
                <h1>Players Evolution</h1>
                <p>Let's find out who can improve himself, starting from an average player to the top-tier player in the world.
                    We define the threadshold among all the players and split all the players into 6 levels: below-average player, 
                    above-average player,  great player, top player and world-top player. Among the thousands of professional players in the FIFA games,
                    only around 30 players actually thrive themselves from the bottom to the top. What an amazing achievement! In this small database, we are determine to show you
                     how those players arrange their professional careers. What are their trajectories, which lead them to the road of success?</p>
                <p>Blow we've displayed the top-30 most improved players. Click on the player's face to see his evolution!</p>
                <br />
                <h3>Top 30 most-improved players</h3>

                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {improved_players.map( player => {
                        return (
                            <div key = {player.long_name} style = {{width: '33%'}}>
                            <img src = {player.player_face_url} alt = {player.long_name} onClick = {() => playerClicked(player)}  style = {{width: '33%'}}/> 
                            <p>{player.long_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    
    return (
        displayOnePlayer? 
            <OnePlayer /> : <PlayerList />
    )
}