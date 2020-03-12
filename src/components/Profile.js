import React from 'react'

const Profile = () => {
    let profile ={
        name: 'Bob'
    }
    return (
        <>
            {
                profile.name && (
                    <p> wellcome {profile.name} </p>
                )
            }
        </>
    )
}

export default Profile