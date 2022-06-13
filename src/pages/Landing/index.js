import React from "react";
import { Col, Row, Container } from "react-bootstrap"
import Heading from "../../components/Heading";
import getData from "./data";
import getPosts from "./data/postsData";
import { userToComponent } from "./ui";
import { postToComponent } from "./ui/posts.js";

import DisplayUsers from "./wrapper/DisplayUsers";
import DisplayPosts from "./wrapper/DisplayPosts";

export default function Landing() {
    const data = getData();
    const { users } = data;

    const postData = getPosts();
    const { posts } = postData;

    return (
        <>
        <Container fluid>
            <Heading />

            
                <Row>
                    <Col sm={3} className="border"> 
                    <DisplayUsers>
                        {users.map(userToComponent)}
                    </DisplayUsers> 
                    
                    </Col>
                    <Col sm={9} className="border">
                        <Container>

                        <DisplayPosts>
                            {posts?.map(postToComponent)}
                        </DisplayPosts>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}