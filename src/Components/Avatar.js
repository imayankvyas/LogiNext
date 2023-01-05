import { useEffect, useState } from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';

export default function Avatar({ user, ...props }) {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        axios.get(`https://avatars.dicebear.com/v2/avataaars/${user?.username}.svg?background=%23eeeef0`).then((res) => {
            setAvatar(res);
        })

    }, [])
    return (
        <>
            {ReactHtmlParser(avatar?.data)}
        </>
    )
}
