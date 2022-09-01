import React, {useState} from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
   const {inputUser, setInputUser} = props;

    const [ valueInput, setValueInput ] = useState('')

    const onSerachValueChange = (event) => {
        const inputValue = event.target.value 
        setValueInput(inputValue)
    }
    const handdleSubmit = () => {
        setInputUser(valueInput)
    }

    return (
        <Stack
            direction = 'row'
            sx={{
                direction: 'row',
                marginTop: '30px',
                width : '80%'
            }}>
            <TextField 
                id = "outlined-basic" 
                label = "GitHub User" 
                variant = "outlined"
                placeholder = 'Buscar usuario en Github'
                value = {valueInput}
                onChange = {onSerachValueChange}
                sx = {{
                    width :'90%'
                }}
                
            />
            <IconButton
                onClick={ handdleSubmit }
                sx ={{
                    left : '-45px',
                    margin: '10px 0'
                }}
            >
                <SearchIcon />
            </IconButton>
        </Stack>
    )
}

export default Searcher
