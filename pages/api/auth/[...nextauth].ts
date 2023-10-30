import { auth } from "@/app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    pages: {
        signIn: '/signin',
        signUp: '/signup',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize( credentials ): Promise<any> {
               return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                .then( userCredential => {
                    if (userCredential.user){
                        return userCredential.user
                    }
                    return null;
                })
                .catch(err => {console.log(err);})
            }
        })
    ]
}
export default NextAuth(authOptions)