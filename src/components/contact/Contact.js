import { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const [users, setUser] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    })
    let name, value
    const data = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...users, [name]: value })
    }
    const sendData = async (e) => {
        const { Name, Email, Subject, Message } = users
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const response = await fetch('https://e-commerce-contact-2b9db-default-rtdb.firebaseio.com/Message.json', options)
        console.log(response)
        if (response) {
            alert("Your message sent successfully")
        } else {
            alert("An error occured")
        }

    }
    return (
        <>
            <div className="contact_container">
                <div className="content">
                    <h2># Contact Us</h2>
                    <div className="form">
                        <form method="POST">
                            <input type="text" name="Name" value={user.name} placeholder="Enter You Full Name" required autoComplete='off' onChange={data} />
                            <input type="email" name="Email" value={user.email} placeholder="Enter You Email" autoComplete='off' onChange={data} />
                            <input type="text" name="Subject" value={user.Subject} placeholder="Enter You Subject" autoComplete='off' onChange={data} />
                            <textarea name="Message" placeholder="Message..." value={user.Message} cols='20' autoComplete='off' onChange={data} />
                            {
                                isAuthenticated ?
                                    <button type="submit" onClick={(e) => sendData(e)}>Send</button>
                                    :
                                    <button type="submit" onClick={loginWithRedirect}>Login</button>

                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact