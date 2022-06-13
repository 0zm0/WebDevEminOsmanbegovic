import { Col, Row, Image, Container, ToggleButton } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
const Post = (prop) => {
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Container> 
        <Row className="my-4" >
            <Col class="height: 90px">
                <div>
                    <Image class="text-center" src={prop.profile} className="img-fluid rounded-circle" width={75} height={75}></Image>
                </div>
            </Col>
            <Col className="d-flex align-items-center">
                <div>
                    {prop.user}
                </div>
            </Col>
        </Row>
        <Row>
            <div>
                <Image className="fluid" src={prop.pictureURL}></Image>
            </div>
        </Row>
        </Container>
       
    )
}

export default Post