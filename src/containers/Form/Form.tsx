"use client"
import React, { useState } from 'react'
import styles from "./Form.module.scss"
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';

type Props = {
    open: boolean,
    toggle: () => void,
}

const Form = ({ open, toggle }: Props) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e:any) => { 
    e.preventDefault()

    // const data = {
    //   username,
    //   email,
    //   phone,
    //   message,
    // };

    // if (username != "" && email != "" && phone != "" && message != "" ) {
    // fetch('/api/sendEmail', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   }).then((res) => {
    //     if (res.status === 200) {
    //       setUsername('')
    //       setEmail('')
    //       setPhone('')
    //       setMessage('')
    //     } else{
    //       alert("Something Went Wrong")
    //     }
    //   })
    // } else{
    //   alert("Fill All The Fields")
    // }
  }

  return (
    <>
    <Drawer open={open} onClose={toggle} anchor={"right"}>
      <Box className={`${styles.discussYourIdeaBox}`} role="presentation">
        <div className={`${styles.container}`}>
            <div onClick={toggle} className={styles.closeBtnContainer}><MdClose /></div>
            <div className={`${styles.container_child}`}>
            <h2 className={`${styles.heading}`}>Have an <span>idea</span> in mind?</h2>
            <p>Tell us about your project—what you need, your timeline, and any challenges you're tackling. We'll take a close look and get back to you with the next steps right away.</p>
            <form className={styles.form}>
                <div className={styles.inputDiv}>
                    <input
                        type="text"
                        className=""
                        id="username"
                        placeholder="Name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.halInputDiv}>
                    <input
                        type="email"
                        className=""
                        id="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.halInputDiv}>
                    <input
                        type="text"
                        className=""
                        id="phone"
                        required
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={styles.inputDiv}>
                    <input
                        type="text"
                        className=""
                        id="msg"
                        required
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button onClick={(e)=>{handleSubmit(e)}} className={`${styles.submitBtn}`} type="submit">Get A Quote</button>
            </form>
            <p className={styles.lastPara}>Your details will be safely stored in our CRM so we can follow up on your request. You can learn more in our <Link href='/'>Privacy Policy</Link>.</p>
            </div>
        </div>
      </Box>
    </Drawer>
    </>
  )
}

export default Form