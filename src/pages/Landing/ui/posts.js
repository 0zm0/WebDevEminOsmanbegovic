import Post from "../../../components/Post";

export const postToComponent = (posts) => {
    return <Post profile={posts.profile} user={posts.user} pictureURL={posts.pictureURL} numberOfLikes={posts.numberOfLikes} comments={posts.comments}  />
}