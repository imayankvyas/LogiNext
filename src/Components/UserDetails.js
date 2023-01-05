import { useEffect, useCallback, useState, memo } from 'react'
import { Col, Row, Container } from 'reactstrap'
import axios from 'axios';
import "./Loader.css"
import UserCard from './UserCard';


const Loader = () => {
    return (<div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
    </div>)
}

export default function UserDetails() {
    const [user, setUser] = useState([]);
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUser(response?.data);
            setFetching(false)
        })
    }, [])


    const DeleteUser = useCallback((DeletedUser) => {
        setUser((user) =>
            user.filter(item => {
                return item?.id !== DeletedUser?.id
            }
            ))
    }, [user])


    return (
        <>
            {fetching ? <Loader /> :
                <Container className='mt-5'>
                    <Row >
                        {user?.map((userDetails, id) => (
                            <Col md={3} >
                                <UserCard user={user} userDetails={userDetails} setUser={setUser} id={id} DeleteUser={DeleteUser} />
                            </Col>
                        ))}
                    </Row>

                </Container>
            }
        </>
    )
}
