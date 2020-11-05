import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({title,cases,total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography >{title}</Typography>
                <h2 className="infoBox_cases">{cases}</h2>
                <Typography className="infoBox_total" >{total} Total</Typography>
            </CardContent>
            
        </Card>
    )
}

export default InfoBox
