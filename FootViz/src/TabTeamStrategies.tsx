
export const TabTeamStrategies = () => {

    return (
        <div>

            <h1>Teams strategies</h1>
            <p>We will briefly explain our approach here. </p>
            <br />

            <div style={{marginLeft: '20%', width: '60%'}} >
                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:'100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3> Produces rising stars </h3>
                        <p>Ajax Amsterdam</p>
                        <p>Benfica</p>
                        <p>Olympique Lyonnais</p>
                        <p>Sporting Portugal</p>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3> Attracts peak players</h3>
                        <p>PSG</p>
                        <p>Real Madrid</p>
                        <p>Manchester City</p>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3> Attracts falling stars</h3>
                        <p>Al Hilal FC</p>
                        <p>Al Ittihad</p>
                        <p>Inter Miami</p>
                    </div>
                        
                </div>
            </div>

            <p style={{marginTop: '60px'}}> We will briefly explain our approach here. </p>
            <br />
           <img src = 'sankey2.gif' />

        </div>
   )
}