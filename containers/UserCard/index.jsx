import { CardMedia, Grid} from '@mui/material'
import React from 'react'
import PrincipalInformation from '../../components/PrincipalInformation'

const UserCard = (props) => {

    const {
        response
    } = props
    const { avatar_url } = response
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CardMedia
                    component = "img"
                    image = {avatar_url}
                    alt = "Avatar Github"
                />
            </Grid>
            <Grid item xs={9}> 
                <PrincipalInformation response={response} />
            </Grid>
           
            {/* <Description /> */}
        </Grid>
    )

}

export default UserCard
