import { useState } from 'react';
import { getAuth, FirebaseAuthTypes, signInAnonymously } from '@react-native-firebase/auth';

export const useAuthVM = () => {
    const currentUser = getAuth().currentUser;
    const [loading, setLoading] = useState<boolean>(!currentUser ? true : false);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(currentUser);

    getAuth().onAuthStateChanged((fbUser) => {
        setLoading(false);
        console.log(`user=${user}`);
        if (fbUser) {
            setUser(fbUser);
        } else {
            setUser(null);
        }
    });

    const handleLogin = async () => {
        setLoading(true);
        try {
            const userCredential = await signInAnonymously(getAuth());
            console.log('User signed in:', userCredential.user);
            setUser(userCredential.user);
        } catch (error) {
            console.error('Error signing in:', error);
        } finally {
            setLoading(false);
        }
    };
    const handleLogOut = async () => {
        setLoading(true);
        try {
            await user?.delete();
            console.log('User signed out');
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        user,
        handleLogin,
        handleLogOut,
    };
};
