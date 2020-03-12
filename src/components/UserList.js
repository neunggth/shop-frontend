//rafce 
import React from 'react'

const UserList = () => {
    const shops =[
        {id: 1, name: 'เล็กนมสด'},
        {id: 2, name: 'เล็กนมสด1'},
    ];
    return (
        <>
        <ul>
            {
                shops.map((shop, index) => {
                return <li key={shop.id}>{shop.name}</li>
            })
            }
        </ul>
        </>
    )
}

export default UserList
