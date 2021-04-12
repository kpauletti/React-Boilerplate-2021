import firebase from 'firebase/app'
import { toast } from '#/alerts'

export const localStorageKey = '__auth__';

export const getToken = () => localStorage.getItem(localStorageKey);

export const login = async ({ email, password }) => {

    try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
        localStorage.setItem(localStorageKey, user.uid);
        await toast({title: 'Successfully Signed In'})
        return user
    }
    catch(error) {
        await toast({title: error.message, icon: 'error'})
    }

}
export const logout = async () => {

    try {
        await firebase.auth().signOut()
        localStorage.removeItem(localStorageKey);
    }
    catch (error) {
        await toast({title: error.message, icon: 'error'})
    }
};


export const register = async ({ email, password }) => {

    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
        return user;
    }
    catch (error) {
        await toast({title: error.message, icon: 'error'})
    }
}
