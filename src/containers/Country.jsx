import React from 'react';
import { useGetDataID } from '../hooks/useDataID';
import { UsePaises } from '../hooks/usePaises';

const Countrie =(prop)=>{
    console.log(prop)
    const name = prop.location.pathname.split('/');
    const data = useGetDataID({name:name[2]});

    const info = UsePaises();

   
    return(

        <>
            {
                data ?
                <>
                
                    {
                        data.map((mapDate , i) => (
                            <div key={i}>
                                <h1>{ 'Latitud  :' + mapDate.latitude}</h1>
                                <h1>{ 'Longitud  :' + mapDate.longitude}</h1>
                                <h1>{ 'Pais  :' + mapDate.country}</h1>
                                <h1>{ 'Confirmados :' + mapDate.confirmed}</h1>
                                <h1>{ 'Muertos :' + mapDate.deaths}</h1>
                                <h1>{ 'En estado Critico :' + mapDate.critical}</h1>
                                <h1>{ 'Recuperados  :' + mapDate.recovered}</h1>
                                <h1>{ 'Proxima actualizacion  :' + mapDate.lastChange}</h1>
                                <h1>{ 'Ultima actualizacion  :' + mapDate.lastUpdate}</h1>
                            </div>
                        ))
                    }


                </>
                :
                <>
                    <h1>Cargando</h1>
                </>
            }
        </>
    )
}



export default Countrie;