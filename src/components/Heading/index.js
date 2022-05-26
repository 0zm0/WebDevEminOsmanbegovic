import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useAuth } from "../../components/Firebase/context"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

import * as ROUTES from '../../constants/routes';

export default function Heading() {

    const [error, setError] = useState("")
    const { currentUser, logOut } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logOut()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Container>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            React
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href={ROUTES.LANDING} >Home</Nav.Link>
                            <Nav.Link href={ROUTES.SIGN_IN}>Log in</Nav.Link>
                            <Nav.Link href={ROUTES.SIGN_UP}>Sign up</Nav.Link>
                            <Nav.Link href={ROUTES.UPDATE}>Update Profile</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}
