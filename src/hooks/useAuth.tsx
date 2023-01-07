import React, { createContext, useContext, useState } from 'react';
// import Cookie from 'js-cookie';
import Axios from 'axios';
import endPoints from '@services/api';

const AuthContext:any = createContext(null);

export function ProviderAuth({children}:any){ //Este context es usado en _app.tsx para encapsular en la app
    const auth:any = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth(){ //función para envíar los datos al servidor
    const [user,setUser] = useState<any>(null)

    const options:any={
        Headers:{
            accept:'*/*', //trabajar de forma correcta con todas las solicitudes
            'Conentet-Type':'application/json' //tipo de contenido que vamos a envíar
        }
    };
    const  signIn = async (email:any,password:any)=>{
        const {data:access_token} = await Axios.post(endPoints.auth.login,{email,password},options);
        console.log(access_token);   
    }
    return {
        user,
        signIn
    }
}
