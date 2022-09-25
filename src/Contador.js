import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './estilos.css'

const Contador = () => {
    const [puntoFinal, cambiarPuntoFinal] = useState({});

    const Config = {
        apiKey: "AIzaSyBgwpoqanque0kR0_S-S6qumKPeEB_wS1w",
        authDomain: "punteador-9cd23.firebaseapp.com",
        databaseURL: "https://punteador-9cd23-default-rtdb.firebaseio.com",
        projectId: "punteador-9cd23",
        storageBucket: "punteador-9cd23.appspot.com",
        messagingSenderId: "73532947608",
        appId: "1:73532947608:web:a14c4007b337aa5c3b64ed"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(Config)
    }
    const list = [];
    useEffect(() => {
        firebase.database().ref().on('value', (puntos) => {
            puntos.forEach((punto) => {
                list.push(punto.val())
                cambiarPuntoFinal(list)
            })
        })
    }, []);
    return (
        <div>
            {
                puntoFinal.map((punto, i) => {
                    console.log(punto.P11S);
                    return (<table className="tabla-puntos-1" key={punto.PAREJA1+i}>
                        <tbody>
                            <tr>
                                {punto.PAREJA1 !== undefined && punto.SAQUE1 !== undefined ?
                                    <th className="parejas" colSpan="1">{punto.PAREJA1.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                                    console.log()
                                }

                                {punto.SAQUE1 !== undefined ?
                                    <th className="saque">{punto.SAQUE1.replace(/['"]+/g, '')}</th> :
                                    <th className="saque"></th>
                                }
                                {(punto.P11S !== '""' || punto.P21S !== '""') && punto.P11S !== undefined ?
                                    <th className="set">{punto.P11S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(punto.P12S !== '""' || punto.P22S !== '""') && punto.P12S !== undefined ?
                                    <th className="set">{punto.P12S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(punto.P13S !== '""' || punto.P23S !== '""') && punto.P13S !== undefined ?
                                    <th className="set">{punto.P13S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(punto.P1PS !== '""' || punto.P2PS !== '""' || punto.PUNTUACION === '"TBR"')
                                    && (punto.SAQUE1 !== '""' || punto.SAQUE2 !== '""' || punto.P1PS !== '"0"' || punto.P2PS !== '"0"')
                                    && punto.P1PS !== undefined ?
                                    punto.PUNTUACION === '"ORO"' ?
                                        <th className="oro">{punto.P1PS.replace(/['"]+/g, '')}</th> : punto.PUNTUACION === '"TBR"' ?
                                            <th className="tbr">{punto.P1PS.replace(/['"]+/g, '')}</th> :
                                            <th className="puntos">{punto.P1PS.replace(/['"]+/g, '')}</th>

                                    :
                                    console.log()
                                }
                            </tr>
                            <tr>
                                {punto.PAREJA2 !== undefined && punto.SAQUE2 !== undefined ?
                                    <th className="parejas" colSpan="1">{punto.PAREJA2.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                                    console.log()
                                }
                                {punto.SAQUE2 !== undefined ?
                                    <th className="saque">{punto.SAQUE2.replace(/['"]+/g, '')}</th> :
                                    <th className="saque"></th>
                                }

                                {(puntoFinal.P11S !== '""' || puntoFinal.P21S !== '""') && puntoFinal.P11S !== undefined ?
                                    <th className="set">{puntoFinal.P21S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(puntoFinal.P12S !== '""' || puntoFinal.P22S !== '""') && puntoFinal.P22S !== undefined ?
                                    <th className="set">{puntoFinal.P22S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(puntoFinal.P13S !== '""' || puntoFinal.P23S !== '""') && puntoFinal.P23S !== undefined ?
                                    <th className="set">{puntoFinal.P23S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(puntoFinal.P1PS !== '""' || puntoFinal.P2PS !== '""' || puntoFinal.PUNTUACION === '"TBR"')
                                    && (puntoFinal.SAQUE1 !== '""' || puntoFinal.SAQUE2 !== '""' || puntoFinal.P1PS !== '"0"' || puntoFinal.P2PS !== '"0"')
                                    && puntoFinal.P2PS !== undefined ?
                                    puntoFinal.PUNTUACION === '"ORO"' ?
                                        <th className="oro">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th> :
                                        puntoFinal.PUNTUACION === '"TBR"' ?
                                            <th className="tbr">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th> :
                                            <th className="puntos">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }
                            </tr>
                        </tbody>
                    </table>)
                })}
            {/* <table className="tabla-puntos-2">
            <tbody>
                    <tr>
                    {puntoFinal.PAREJA1 !== undefined && puntoFinal.SAQUE1 !== undefined ?
                        <th className="parejas" colSpan="1">{puntoFinal.PAREJA1.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                        console.log()
                    }
                    
                    {puntoFinal.SAQUE1 !== undefined ?
                        <th className="saque">{puntoFinal.SAQUE1.replace(/['"]+/g, '')}</th> :
                        <th className="saque"></th>
                    }
                    {(puntoFinal.P11S !== '""' || puntoFinal.P21S !== '""') && puntoFinal.P11S !== undefined ?
                    <th className="set">{puntoFinal.P11S.replace(/['"]+/g, '')}</th>
                    :
                    console.log()
                }
                
                {(puntoFinal.P12S !== '""' || puntoFinal.P22S !== '""') && puntoFinal.P12S !== undefined ?
                <th className="set">{puntoFinal.P12S.replace(/['"]+/g, '')}</th>
                :
                console.log()
            }

                        {(puntoFinal.P13S !== '""' || puntoFinal.P23S !== '""') && puntoFinal.P13S !== undefined ?
                            <th className="set">{puntoFinal.P13S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P1PS !== '""' || puntoFinal.P2PS !== '""' || puntoFinal.PUNTUACION === '"TBR"')
                            && (puntoFinal.SAQUE1 !== '""' || puntoFinal.SAQUE2 !== '""' || puntoFinal.P1PS !== '"0"' || puntoFinal.P2PS !== '"0"')
                            && puntoFinal.P1PS !== undefined ?
                            puntoFinal.PUNTUACION === '"ORO"' ?
                                <th className="oro">{puntoFinal.P1PS.replace(/['"]+/g, '')}</th> : puntoFinal.PUNTUACION === '"TBR"' ?
                                    <th className="tbr">{puntoFinal.P1PS.replace(/['"]+/g, '')}</th> :
                                    <th className="puntos">{puntoFinal.P1PS.replace(/['"]+/g, '')}</th>

                            :
                            console.log()
                        }
                    </tr>
                    <tr>
                        {puntoFinal.PAREJA2 !== undefined && puntoFinal.SAQUE2 !== undefined ?
                            <th className="parejas" colSpan="1">{puntoFinal.PAREJA2.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                            console.log()
                        }
                        {puntoFinal.SAQUE2 !== undefined ?
                            <th className="saque">{puntoFinal.SAQUE2.replace(/['"]+/g, '')}</th> :
                            <th className="saque"></th>
                        }

                        {(puntoFinal.P11S !== '""' || puntoFinal.P21S !== '""') && puntoFinal.P11S !== undefined ?
                            <th className="set">{puntoFinal.P21S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P12S !== '""' || puntoFinal.P22S !== '""') && puntoFinal.P22S !== undefined ?
                            <th className="set">{puntoFinal.P22S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P13S !== '""' || puntoFinal.P23S !== '""') && puntoFinal.P23S !== undefined ?
                            <th className="set">{puntoFinal.P23S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P1PS !== '""' || puntoFinal.P2PS !== '""' || puntoFinal.PUNTUACION === '"TBR"')
                            && (puntoFinal.SAQUE1 !== '""' || puntoFinal.SAQUE2 !== '""' || puntoFinal.P1PS !== '"0"' || puntoFinal.P2PS !== '"0"')
                            && puntoFinal.P2PS !== undefined ?
                            puntoFinal.PUNTUACION === '"ORO"' ?
                                <th className="oro">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th> :
                                puntoFinal.PUNTUACION === '"TBR"' ?
                                    <th className="tbr">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th> :
                                    <th className="puntos">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }
                    </tr>
                </tbody>
            </table>
            <table className="tabla-puntos-3">
                <tbody>
                    <tr>
                        {puntoFinal.PAREJA1 !== undefined && puntoFinal.SAQUE1 !== undefined ?
                            <th className="parejas" colSpan="1">{puntoFinal.PAREJA1.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                            console.log()
                        }

                        {puntoFinal.SAQUE1 !== undefined ?
                            <th className="saque">{puntoFinal.SAQUE1.replace(/['"]+/g, '')}</th> :
                            <th className="saque"></th>
                        }
                        {(puntoFinal.P11S !== '""' || puntoFinal.P21S !== '""') && puntoFinal.P11S !== undefined ?
                            <th className="set">{puntoFinal.P11S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P12S !== '""' || puntoFinal.P22S !== '""') && puntoFinal.P12S !== undefined ?
                            <th className="set">{puntoFinal.P12S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P13S !== '""' || puntoFinal.P23S !== '""') && puntoFinal.P13S !== undefined ?
                            <th className="set">{puntoFinal.P13S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P1PS !== '""' || puntoFinal.P2PS !== '""' || puntoFinal.PUNTUACION === '"TBR"')
                            && (puntoFinal.SAQUE1 !== '""' || puntoFinal.SAQUE2 !== '""' || puntoFinal.P1PS !== '"0"' || puntoFinal.P2PS !== '"0"')
                            && puntoFinal.P1PS !== undefined ?
                            puntoFinal.PUNTUACION === '"ORO"' ?
                                <th className="oro">{puntoFinal.P1PS.replace(/['"]+/g, '')}</th> : puntoFinal.PUNTUACION === '"TBR"' ?
                                    <th className="tbr">{puntoFinal.P1PS.replace(/['"]+/g, '')}</th> :
                                    <th className="puntos">{puntoFinal.P1PS.replace(/['"]+/g, '')}</th>

                            :
                            console.log()
                        }
                    </tr>
                    <tr>
                        {puntoFinal.PAREJA2 !== undefined && puntoFinal.SAQUE2 !== undefined ?
                            <th className="parejas" colSpan="1">{puntoFinal.PAREJA2.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                            console.log()
                        }
                        {puntoFinal.SAQUE2 !== undefined ?
                            <th className="saque">{puntoFinal.SAQUE2.replace(/['"]+/g, '')}</th> :
                            <th className="saque"></th>
                        }

                        {(puntoFinal.P11S !== '""' || puntoFinal.P21S !== '""') && puntoFinal.P11S !== undefined ?
                            <th className="set">{puntoFinal.P21S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P12S !== '""' || puntoFinal.P22S !== '""') && puntoFinal.P22S !== undefined ?
                            <th className="set">{puntoFinal.P22S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P13S !== '""' || puntoFinal.P23S !== '""') && puntoFinal.P23S !== undefined ?
                            <th className="set">{puntoFinal.P23S.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }

                        {(puntoFinal.P1PS !== '""' || puntoFinal.P2PS !== '""' || puntoFinal.PUNTUACION === '"TBR"')
                            && (puntoFinal.SAQUE1 !== '""' || puntoFinal.SAQUE2 !== '""' || puntoFinal.P1PS !== '"0"' || puntoFinal.P2PS !== '"0"')
                            && puntoFinal.P2PS !== undefined ?
                            puntoFinal.PUNTUACION === '"ORO"' ?
                                <th className="oro">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th> :
                                puntoFinal.PUNTUACION === '"TBR"' ?
                                    <th className="tbr">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th> :
                                    <th className="puntos">{puntoFinal.P2PS.replace(/['"]+/g, '')}</th>
                            :
                            console.log()
                        }
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default Contador;