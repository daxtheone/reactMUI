import React,{ useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Searcher from '../components/Searcher'
import { getGitHubUser } from '../services/users'
import UserCard from '../containers/UserCard'

const App = () => {
    const [inputUser , setInputUser] = useState('octocat')
    const [response , setResponse] = useState('null')

    const [notFound, setNotFound] = useState(false)

    const gettinUser = async (user) => {
        const userResponse = await getGitHubUser(user)

        if(inputUser === 'octocat'){
            localStorage.setItem('octocat',userResponse)
        }
        if(userResponse.message === 'Not Found'){
            setInputUser('octocat')
            setNotFound(true)
            setResponse(localStorage.getItem('octocat'))
        } else {
            setNotFound(false)
            setResponse(userResponse)

        }
        
        console.log(userResponse);
    }

    useEffect(()=>{
        gettinUser(inputUser)
    },[inputUser])
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
            <UserCard response={response} />
        </Container>
    )
}  

export default App
