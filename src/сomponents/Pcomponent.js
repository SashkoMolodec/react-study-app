import React from 'react'
import { TabContainer, Tab, Nav, Row, Col } from 'react-bootstrap';

export default function Pcomponent(props) {

    const user = {
        FirstName: 'Vasya',
        SecondName: 'Pupkin',
        Phone: '+380-666-666-666',
        Address: 'Jmerunka, Poroshenka Street №3',
        Email: 'vasyapupkin@gmail.com',
        Site: 'www.xvideos.com',
        Birthday: 'April 36, 1998',
        Gender: 'Dinosaur',
        Age: 54
    }

    return (
        <div className = 'userInfo col-md-3 border text-left'>
            <ul className = 'greyText '>
                <p className='text-left text-uppercase'>contact information</p>

                    <li className = 'userText text-left'>Phone: {user.Phone} </li>
                    <li className = 'userText'>Address: {user.Address} </li>
                    <li className = 'userText'>Email: {user.Email} </li>
                    <li className = 'userText'>Site: {user.Site} </li>
                
            </ul>

            <ul className = 'greyText2'>
                <p className='text-left text-uppercase'>basic information</p>
                    <li className = 'userText'>First name: {user.FirstName} </li>
                    <li className = 'userText'>Second name: {user.SecondName} </li>
                    <li className = 'userText'>Birthday: {user.Birthday} </li>
                    <li className = 'userText'>Age: {user.Age} </li>
                    <li className = 'userText'>Gender: {user.Gender} </li>
            </ul>

        </div>
    )
}

