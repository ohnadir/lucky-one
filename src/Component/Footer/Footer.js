import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Props Vs State</Accordion.Header>
                <Accordion.Body>
                        প্রপস হলো ইমিউটেবল । স্টেইট হলো মিউটেবল । প্রপস
                        পেরেন্ট কম্পোনেন্ট থেকে প্রোপার্টি হিসেবে পাস করা যায় ।
                        স্টেইট কম্পোনেন্ট এ নিজেই ডিফাইন করে । স্টেইট অবজেক্ট দ্বারা আপডেই হয় । 
                        স্টেইট এবং প্রপস দুইটাই  আট্টিবিউট হিসেবে আক্সেসএবল ।
                        স্টেইট asynchronous ভাবে পরিবর্তন হতে পারে । 

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Footer;