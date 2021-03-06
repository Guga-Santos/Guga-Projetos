import React, { useContext, useState } from "react";
import FortniteContext from "../context/FortniteContext";
import expandir from '../images/expandir.png';
import minimizar from '../images/minimizar.png';
import Loading from "./Loading";

export default function Table() {
    const context = useContext(FortniteContext);
    const { usersDataOne, usersDataTwo, loading } = context;

    const [solo, setSolo] = useState(true);
    const [duo, setDuo] = useState(true);
    const [trio, setTrio] = useState(true);
    const [squad, setSquad] = useState(true);

    return (
        loading ? <Loading /> :
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Users : </th>
                        <th>{usersDataOne?.name}</th>
                        <th>{usersDataTwo?.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nível nesta temporada : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.account?.level} níveis</td>
                        <td>{usersDataTwo?.account?.level} níveis</td>
                    </tr>
                    <tr>
                        <td>Soma dos níveis : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.accountLevelHistory?.length <= 1
                        ? '0' : usersDataOne?.accountLevelHistory?.map((obj) => obj.level)
                        .reduce((a, b) => a + b)} níveis</td>
                        <td>{usersDataTwo?.accountLevelHistory?.length <= 1
                        ? '0' : usersDataTwo?.accountLevelHistory?.map((obj) => obj.level)
                        .reduce((a, b) => a + b)} níveis</td>
                    </tr>
                    {/*  */}
                    <tr />
                    <tr className="collapse" onClick={() => setSolo(!solo)}>
                        <th >Stats do solo : </th>
                        <th style={{ padding: '0 0 0 0.5vw' }}></th>
                        <th>
                            <img 
                            alt="icone" 
                            src={!solo ? minimizar : expandir} 
                            className="icon-img"
                            />
                        </th>
                    </tr>
                    <div className={solo ? 'content' : ''}>
                    <tr>
                        <td>Partidas jogadas : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.solo?.matchesplayed} partidas</td>
                        <td>{usersDataTwo?.global_stats?.solo?.matchesplayed} partidas</td>
                    </tr>
                    <tr>
                        <td>Minutos jogados : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.solo?.minutesplayed} minutos</td>
                        <td>{usersDataTwo?.global_stats?.solo?.minutesplayed} minutos</td>
                    </tr>
                    <tr>
                        <td>Kills : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.solo?.kills} kills</td>
                        <td>{usersDataTwo?.global_stats?.solo?.kills} kills</td>
                    </tr>
                    <tr>
                        <td>Kills por partida : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.solo?.kd} kills</td>
                        <td>{usersDataTwo?.global_stats?.solo?.kd} kills</td>
                    </tr>
                    <tr>
                        <td>Vitória Royale : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.solo?.placetop1} vitórias</td>
                        <td>{usersDataTwo?.global_stats?.solo?.placetop1} vitórias</td>
                    </tr>
                    </div>
                     {/*  */}
                     <tr />
                     <tr className="collapse" onClick={() => setDuo(!duo)}>
                        <th>Stats do duo : </th>
                        <th style={{ padding: '0 0 0 0.5vw' }}></th>
                        <th>
                            <img 
                            alt="icone" 
                            src={!duo ? minimizar : expandir} 
                            className="icon-img"
                            />
                        </th>
                    </tr>
                    <div className={duo ? 'content' : ''}>
                    <tr>
                        <td>Partidas jogadas : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.duo?.matchesplayed} partidas</td>
                        <td>{usersDataTwo?.global_stats?.duo?.matchesplayed} partidas</td>
                    </tr>
                    <tr>
                        <td>Minutos jogados : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.duo?.minutesplayed} minutos</td>
                        <td>{usersDataTwo?.global_stats?.duo?.minutesplayed} minutos</td>
                    </tr>
                    <tr>
                        <td>Kills : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.duo?.kills} kills</td>
                        <td>{usersDataTwo?.global_stats?.duo?.kills} kills</td>
                    </tr>
                    <tr>
                        <td>Kills por partida : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.duo?.kd} kills</td>
                        <td>{usersDataTwo?.global_stats?.duo?.kd} kills</td>
                    </tr>
                    <tr>
                        <td>Vitória Royale : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.duo?.placetop1} vitórias</td>
                        <td>{usersDataTwo?.global_stats?.duo?.placetop1} vitórias</td>
                    </tr>
                    </div>
                    {/*  */}
                    <tr />
                    <tr className="collapse" onClick={() => setTrio(!trio)}>
                        <th>Stats do trio : </th>
                        <th style={{ padding: '0 0 0 0.5vw' }}></th>
                        <th>
                            <img 
                            alt="icone" 
                            src={!trio ? minimizar : expandir} 
                            className="icon-img"
                            />
                        </th>
                    </tr>
                    <div className={trio ? 'content' : ''}>
                    <tr>
                        <td>Partidas jogadas : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.trio?.matchesplayed} partidas</td>
                        <td>{usersDataTwo?.global_stats?.trio?.matchesplayed} partidas</td>
                    </tr>
                    <tr>
                        <td>Minutos jogados : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.trio?.minutesplayed} minutos</td>
                        <td>{usersDataTwo?.global_stats?.trio?.minutesplayed} minutos</td>
                    </tr>
                    <tr>
                        <td>Kills : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.trio?.kills} kills</td>
                        <td>{usersDataTwo?.global_stats?.trio?.kills} kills</td>
                    </tr>
                    <tr>
                        <td>Kills por partida : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.trio?.kd} kills</td>
                        <td>{usersDataTwo?.global_stats?.trio?.kd} kills</td>
                    </tr>
                    <tr>
                        <td>Vitória Royale : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.trio?.placetop1} vitórias</td>
                        <td>{usersDataTwo?.global_stats?.trio?.placetop1} vitórias</td>
                    </tr>
                    </div>
                     {/*  */}
                     <tr />
                     <tr className="collapse" onClick={() => setSquad(!squad)}>
                        <th>Stats do squad : </th>
                        <th style={{ padding: '0 0 0 0.5vw' }}></th>
                        <th>
                            <img 
                            alt="icone" 
                            src={!squad ? minimizar : expandir} 
                            className="icon-img"
                            />
                        </th>
                    </tr>
                    <div className={squad ? 'content' : ''}>
                    <tr>
                        <td>Partidas jogadas : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.squad?.matchesplayed} partidas</td>
                        <td>{usersDataTwo?.global_stats?.squad?.matchesplayed} partidas</td>
                    </tr>
                    <tr>
                        <td>Minutos jogados : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.squad?.minutesplayed} minutos</td>
                        <td>{usersDataTwo?.global_stats?.squad?.minutesplayed} minutos</td>
                    </tr>
                    <tr>
                        <td>Kills : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.squad?.kills} kills</td>
                        <td>{usersDataTwo?.global_stats?.squad?.kills} kills</td>
                    </tr>
                    <tr>
                        <td>Kills por partida : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.squad?.kd} kills</td>
                        <td>{usersDataTwo?.global_stats?.squad?.kd} kills</td>
                    </tr>
                    <tr>
                        <td>Vitória Royale : </td>
                        <td style={{ padding: '0 0 0 0.5vw' }}>{usersDataOne?.global_stats?.squad?.placetop1} vitórias</td>
                        <td>{usersDataTwo?.global_stats?.squad?.placetop1} vitórias</td>
                    </tr>
                    </div>
                     {/*  */}
                     <tr />
                </tbody>
            </table>
        </div>
    )
}