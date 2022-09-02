import { Stack, Typography } from '@mui/material'
import React from 'react'

const PrincipalInformation = (props) => {

    const { response } = props
    const {
        name,
        login,
        created_at
    } = response
    return (
        <>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </>
    )
}

export default PrincipalInformation

