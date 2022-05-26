import User from "../../../components/User";

export const userToComponent = (users) => {
    return <User user={users.user} image ={users.image}/>
} 