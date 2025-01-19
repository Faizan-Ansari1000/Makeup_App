import app from "./FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firestore = getFirestore(app)
const auth = getAuth(app)

export const signUpUser = async (obj) => {
    return await createUserWithEmailAndPassword(auth, obj.email, obj.password)
}

export const loginUser = async (obj) => {
    return await signInWithEmailAndPassword(auth, obj.email, obj.password)
}

export const dataSet = async (nodeName, id, data) => {
    const docRef = doc(firestore, nodeName, id)
    await setDoc(docRef, data)
}