import { useState } from 'react';
import {getAuth, FirebaseAuthTypes } from '@react-native-firebase/auth';

export const useAuthVM = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    getAuth().onAuthStateChanged((fbUser) => {
        setLoading(false);
        console.log(`user=${user}`);
        if (fbUser) {
            setUser(fbUser);
        } else {
            setUser(null);
        }
    });

    // const handleLogin = async (email: string, password: string) => {}
    // const handleLogOut = async () => {}

    return {
        loading,
        user,
        // handleLogin,
        // handleLogOut
    };
};
