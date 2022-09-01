import React,{ useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Searcher from '../components/Searcher'
import { getGitHubUser } from '../services/users'

const App = () => {
    const [inputUser , setInputUser] = useState('octocat')

    const gettinUser = async (user) => {
        const userResponse = await getGitHubUser(user)
        console.log(userResponse);
    }

    useEffect(()=>{
        gettinUser(inputUser)
    },[inputUser])
    //const [userState, setUserState]  = useState('inputUser')
    console.log('inputUser', inputUser)


    return(
        <Container sx={{
            background : 'whitesmoke',
            width : '80vw',
            height : '500px',
            borderRadius : '16px',
            marginTop :  '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems : 'center'
        }}>
            <Searcher inputUser = {inputUser} setInputUser={setInputUser} />
        </Container>
    )
}  

export default App
