import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext({});

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState();
    
    useEffect(() => {
        try {
            fetch ("/profile.json", {
                headers: {
                    accept: "application/json"
                }
            }
            )
            .then(response => response.json())

            .then(async data => 
                {setProfile(data.profile)
                }
            ) 

            } catch (error) {
                console.log(error)
            }   
        },[]
    )
    return (
        
        <ProfileContext.Provider value={{profile}}>
            {children}
        </ProfileContext.Provider>
    )
}
export function useProfile() {
    const context = useContext(ProfileContext);

    return context
}
