// import { collection, getDocs } from "firebase/firestore";
// import { useState } from "react";
import ProfilePicture from "./slika.jpg";


// const [users, fetchUsers] = useState('');

// window.addEventListener('load', () => {
//     FetchData();
// })

// const FetchData = () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// }

export const users = [
    { user: "User1", image: ProfilePicture},
    { user: "User5", image: ProfilePicture},
    { user: "User4", image: ProfilePicture},
    { user: "User3", image: ProfilePicture},
    { user: "User2", image: ProfilePicture}
]


export const posts = [
    {profile: ProfilePicture, user: "User1"},
    {profile: ProfilePicture, user: "User2"},
    {profile: ProfilePicture, user: "User3"},
    {profile: ProfilePicture, user: "User4"}
]

export default function getData() {
    return {
        users
    }
}

export function getPosts(){
    return {
        posts
    }
}