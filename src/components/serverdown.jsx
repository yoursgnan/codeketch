import serverdown1 from '../assets/serverdown1.jpg';
import serverdown2 from '../assets/serverdown2.jpg';
import serverdown3 from '../assets/serverdown3.jpg';
import serverdown4 from '../assets/serverdown4.jpg';
import serverdown5 from '../assets/serverdown5.jpg';
import serverdown6 from '../assets/serverdown6.jpg';
import serverdown7 from '../assets/serverdown7.jpg';

import { useState, useEffect } from 'react';
import { getApiLink,getValue, USER_IDENTIFIER_KEY } from '../utils/helper_functions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const images = [serverdown1, serverdown2, serverdown3, serverdown4, serverdown5, serverdown6, serverdown7];

const ServerDown = () => {
    const [randomMemeIndex, setRandomMemeIndex] = useState(null);
    const navigate = useNavigate()

    useEffect(()=>{
        const handleNavigation = () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${getValue(USER_IDENTIFIER_KEY)}`
            axios.get(getApiLink()+'/api/login').then(response=>{
                navigate('/')
            })
        }
        handleNavigation();

        const index = Math.floor(Math.random() * images.length);
        setRandomMemeIndex(index);
        
    }, [navigate]);

    return (
        <div className="dialog-box flex center">
            <div className='flex center column'>
                {randomMemeIndex !== null && <img src={images[randomMemeIndex]} style={{ width: '80%', height: '80%' }} />}
                <h3>Our servers are down! We will get back to you shortly</h3>
            </div>
        </div>
    );
};

export default ServerDown;
