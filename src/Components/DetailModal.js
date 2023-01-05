import { Field, Form, Formik } from 'formik'
import React, { useMemo } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import "../App.css"

export default function DetailModal({ user, edit, setEdit, EditDetail, values, ...props }) {

    return (
        <Modal isOpen={edit} toggle={() => setEdit((edit) => !edit)} id={user.id}>
            <ModalHeader toggle={() => setEdit((edit) => !edit)}>User Detail</ModalHeader>
            <ModalBody className='p-1'>
                <div className='gap-3 p-3 d-flex align-items-center'>
                    <p> *Name:</p>
                    <Field name='name' values={values?.name} />
                </div>
                <div className='gap-3 p-3 d-flex align-items-center'>
                    <p>*Email:</p>
                    <Field name='email' values={values?.email} />
                </div>
                <div className='gap-3 p-3 d-flex align-items-center'>
                    <p>*Phone:</p>
                    <Field name='phone' values={values?.phone_number} />
                </div>
                <div className='gap-3 p-3 d-flex align-items-center'>
                    <p>*Website:</p>
                    <Field name='website' values={values?.website} />
                </div>
            </ModalBody>
            <ModalFooter className='d-flex justify-content-end'>
                <Button color='light' onClick={() => setEdit(false)}>Cancel</Button>
                <Button color='info' onClick={() => { EditDetail(values); setEdit(false) }}>Ok</Button>
            </ModalFooter>
        </Modal>
    )
}
