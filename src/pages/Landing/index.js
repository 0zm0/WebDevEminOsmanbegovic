import React from "react";
import { Col, Row, Container } from "react-bootstrap"
import Heading from "../../components/Heading";
import getData from "./data";
import { userToComponent } from "./ui";
import DisplayUsers from "./wrapper/DisplayUsers";

export default function Landing() {
    const data = getData();
    const { users } = data;
    return (
        <>
            <Heading />

            <Container fluid>
                <Row>
                    <Col sm={3} className="border"> 
                    <DisplayUsers>
                        {users.map(userToComponent)}
                        </DisplayUsers> 
                    
                    </Col>
                    <Col sm={9} className="border"> </Col>
                </Row>
            </Container>
            
        </>
    )
}