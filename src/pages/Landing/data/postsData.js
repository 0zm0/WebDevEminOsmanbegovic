import ProfilePicture from "./slika.jpg";

export const posts = [
    {profile: ProfilePicture, user: "User1", pictureURL: ProfilePicture, numberOfLikes: 10, comments: ["Hello", "Emin"]},
    {profile: ProfilePicture, user: "User2", pictureURL: ProfilePicture, numberOfLikes: 10, comments: ["Hello", "Emin"]}
]

export default function getData() {
    return {
        posts
    }
}