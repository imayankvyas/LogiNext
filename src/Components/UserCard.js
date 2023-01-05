import React, { useCallback, useState } from 'react'
import { Form, Formik } from 'formik'
import { Card, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap'
import "../App.css"
import phone from "../assests/phone.svg"
import email from "../assests/email.svg"
import web from "../assests/web.svg"
import like_icon from "../assests/like.svg"
import active_like from "../assests/active_like.svg"
import edit_icon from "../assests/edit.svg"
import delete_icon from "../assests/delete.svg"
import Avatar from './Avatar';
import DetailModal from './DetailModal';

export default function UserCard({ user, userDetails, DeleteUser, id, setUser, ...props }) {

    const [like, setLike] = useState();
    const [edit, setEdit] = useState();

    const EditDetail = useCallback((update, formik) => {
        console.log('formik', formik)
        user.map((items) => {
            if (items.id === update?.values?.id) {
                items.name = update.values?.name;
                items.email = update.values?.email;
                items.phone = update.values?.phone;
                items.website = update.values?.website;
            }
        })
    }, [user, userDetails])


    return (
        <div>
            <Formik initialValues={{ name: userDetails?.name, email: userDetails?.email, phone: userDetails?.phone, website: userDetails?.website, id: userDetails.id }} enableReinitialize={true}>
                {(values, ...formik) => (
                    <Form>
                        <Card className='my-3' id={id}>
                            <CardBody>
                                <Avatar user={userDetails} />
                                <CardTitle tag="h5" className='my-3'>
                                    {userDetails?.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="my-2 text-muted"
                                    tag="p"
                                >
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={email} height={20} alt='user_email' />
                                        {userDetails?.email}
                                    </div>

                                </CardSubtitle>
                                <CardSubtitle
                                    className="my-2 text-muted"
                                    tag="p"
                                >
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={phone} height={20} />
                                        {userDetails?.phone}
                                    </div>

                                </CardSubtitle>
                                <CardSubtitle
                                    className="my-2 text-muted"
                                    tag="p"
                                >
                                    <div className='d-flex align-items-center gap-3'>
                                        <img src={web} height={20} />
                                        {userDetails?.website}
                                    </div>

                                </CardSubtitle>
                                <CardFooter className='icons d-flex gap-5 justify-content-between p-3'>
                                    <img src={like ? active_like : like_icon} onClick={() => setLike((like) => !like)} height={20} className={'cursor-pointer'} />
                                    <img src={edit_icon} onClick={() => { setEdit(userDetails, formik) }} height={20} className='cursor-pointer' />
                                    <img src={delete_icon} onClick={() => DeleteUser(userDetails)} height={20} className={'cursor-pointer'} />
                                </CardFooter>
                            </CardBody>
                        </Card>
                        <DetailModal user={userDetails} setUser={setEdit} setEdit={setEdit} edit={edit} EditDetail={EditDetail} values={values} />

                    </Form>)}

            </Formik>


        </div>

    )
}
