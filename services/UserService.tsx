import {signIn, useSession }from 'next-auth/react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';



export default class UserService{
    private session : any ;
    constructor(session : any) {
        this.session = session;
    }

    public signIn(method : string , email : string = "" , password : string  = ""){
        switch (method) {
            case "Credentials":
              return  signIn('credentials', {email : email, password : password, redirect: true, callbackUrl: '/'})
            case "google":
               return signIn('google')
             
        
            default:
                break;
        }

    }

    public signUp(email : string , password : string){
        return createUserWithEmailAndPassword(auth, email, password)
    }
}