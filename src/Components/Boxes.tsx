import React from 'react'

interface BoxProps {
    id : number,
    on : boolean
}

const Boxes: React.FC<BoxProps> = ({id , on} : BoxProps ) =>{

    console.log(id , on)

    return(
        <div className='boxesDiv'>

        </div>
    )
}

export default Boxes;