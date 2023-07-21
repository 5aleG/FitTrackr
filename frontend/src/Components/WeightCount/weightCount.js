import React from 'react'
import { 
    CurrentWeightSquare,
    CurrentWeightInfo,
    WeightRecord,
    WeightRecordNumber,
    KgLabel,
    WeightImage } from "./weightCountStyled"

    const weightGraphImage = require("../../Assets/weight_graph.svg").default;

const WeightCount = () => {

    const currentWeight = 95
    // API call for current weight
    
    return (
       <CurrentWeightSquare>
            <CurrentWeightInfo>
                <WeightRecord>Weight Record</WeightRecord>
                <WeightRecordNumber>
                    {currentWeight} <KgLabel>Kg</KgLabel>
                </WeightRecordNumber>
            </CurrentWeightInfo>
            <WeightImage src={weightGraphImage} alt='Weight Image' />
       </CurrentWeightSquare>
    )
}

export default WeightCount;