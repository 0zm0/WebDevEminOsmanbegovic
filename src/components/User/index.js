import { Col, Row, Image } from "react-bootstrap"

const User = (prop) => {
    return (
        <Row className="my-4" >
            <Col>
                <div>
                    <Image class="text-center" src={prop.image} className="img-fluid rounded-circle" width={75} height={75}></Image>
                </div>
            </Col>
            <Col className="d-flex align-items-center">
                <div id="user">
                    {prop.user}
                </div>
            </Col>
        </Row>
    )
}

export default User