import React from 'react';

import DstImg from "../dstation.png";
import EstImg from "../Estation.png";
import IstImg from "../iStation.png";
import VstImg from "../Vstation.png";
import CCImg from "../CenterChain.png";
import CFImg from "../CenterFace.png";
import ElImg from "../elcloud.png";
import CVImg from "../centerverse.png";

export default function IntroduceList(){
    const iconlist = [{
        id: 1,
        name:'Dst',
        image: DstImg
    },
        {
            id: 2,
            name:'Est',
            image: EstImg
        },
        {
            id: 3,
            name:'Ist',
            image: IstImg
        },
        {
            id: 4,
            name:'Vst',
            image: VstImg
        },
        {
            id: 5,
            name:'CenterChain',
            image: CCImg
        },
        {
            id: 6,
            name:'CenterFace',
            image: CFImg
        },
        {
            id: 7,
            name:'Elcloud',
            image: ElImg
        },
        {
            id: 8,
            name:'CenterVerse',
            image: CVImg
        },
    ]
    return (
        <>
                    <div className="iconlist">
                        {iconlist.map(element => <icon name={element.name} picture={element.image} />)}
                    </div>
        </>
    );
}