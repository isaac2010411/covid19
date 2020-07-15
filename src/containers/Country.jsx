import React from 'react';
import { useGetDataID } from '../hooks/useDataID';
import { UsePaises } from '../hooks/usePaises';
import MapaPresentation from '../components/Map';

const Countrie =(prop)=>{
    const name = prop.location.pathname.split('/');
    console.log(name)
    const data = useGetDataID({name:name[2]});

    const info = UsePaises({name:name[2]});
    console.log(info)

    return(

        <>
            {
                data ?
                <>
                
                    {
                        data.map((mapDate , i) => (
                            <div key={i}>
                                <MapaPresentation latitud={mapDate.latitude} longitud={mapDate.longitude}></MapaPresentation>
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
            {
                info
                ?
                <>
                    {
                    < div >
                            <h1>{info.capital}</h1>
                            <img src={info.flag} alt='Bandera'></img>
                    </div>

                     
                    }
                </>
                :
                <>
                </>
            }
        </>
    )
}



export default Countrie;