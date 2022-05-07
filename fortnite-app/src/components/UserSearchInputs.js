import React, { useContext } from 'react';
import FortniteContext from '../context/FortniteContext';
import getStats from '../services/getStats';
import userFetch from '../services/userFetch';

export default function UserSearchInputs() {
    const context = useContext(FortniteContext);
    const {  
        users,
        setUsers,
        setUsersDataOne,
        setUsersDataTwo,
        setLoading,
     } = context;
    const { userOne, userTwo } = users;
    // const { dataOne, dataTwo } = userData;

    const handleClick = async () => {
        setLoading(true);
        const getUserOne = await userFetch(userOne);
        const dataOneInfo = await getStats(getUserOne);
        const getUserTwo = await userFetch(userTwo);
        const dataTwoInfo = await getStats(getUserTwo);

        setUsersDataOne(dataOneInfo)
        setUsersDataTwo(dataTwoInfo)

        setUsers({userOne: "", userTwo: ""})
        setLoading(false);
    }
    
    return(
        <div className='userInputs-Container'>
            <label htmlFor="userOne">
                UserOne:
                <input 
                type="text"
                value={userOne}
                placeholder="Insert username"
                onChange={ (e) => setUsers({...users, userOne: e.target.value})}
                />
            </label>
            <label htmlFor="userOne">
                UserTwo:
                <input 
                type="text"
                value={userTwo}
                placeholder="Insert username"
                onChange={ (e) => setUsers({...users, userTwo: e.target.value})}
                />
            </label>
            <button 
            type='button'
            onClick={ () => handleClick()}
            >
                Compare!
            </button>
        </div>
    )
}