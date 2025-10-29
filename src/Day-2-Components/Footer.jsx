import { Link } from 'react-router-dom';
import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
export default function Footer() {
    return (
        <footer className='z-2 bg-gray-800 text-white p-4  justify-center text-center'>
            <div className=' container mx-auto'>
                <p className='mb-2'>My App. All rights are reserved.</p>
                <ul>
                    <li><Link to="#" className='text-white hover:text-gray-200'>Privacy Policy</Link></li>
                </ul>
                <ul>
                    <li><Link to="#" className='text-white hover:text-gray-200'>Online Shopping</Link></li>
                </ul>
                <ul>
                    <li><Link to="#" className='text-white hover:text-gray-200'>Customer Policy</Link></li>
                </ul>
            </div>
            <div className='mt-auto items-center'>
                <Link to="#" className='text-white hover:text-gray-200'>Contact Us</Link>
                <Link to="#">
                    <CiFacebook />
                </Link>
                <Link to="#">
                    <CiTwitter />
                </Link>
                <Link to="#">
                    <CiInstagram />
                </Link>
            </div>
        </footer>
    );
}