import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className='accordion'>
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
                <Accordion.Header>how useState works</Accordion.Header>
                <Accordion.Body>
                        ইউজস্টেইট একটি হুক যা ফাংশনাল কম্পোনেন্টে স্টেইট ভেরিয়েবলকে গ্রহন করে । যদি প্রাথমিক স্টেইট ফাংশনে পাস করা হয় তাহলে ইহা ভেরিয়েবলের সাথে চলতি স্টেইট
                        ভেলু ফেরত দেয় এবং অনন্য ফাংশনে ভেলু আপডেইট করে । প্রাথমিক রেন্ডারের সময় প্রথম আরগুমেন্ট এ সেইম ভেলু রেটার্ন করে । পশ্চাদ্গামী রি -রেন্ডারের সময়ে
                        প্রথম ভেলু সব সময় আপডেইট পরে মোস্ট রিসেন্ট স্টেইট হয় । ইউজস্টেইট কখনই স্বয়ংক্রিয়ভাবে মার্জ অবজেক্ট আপডেইট করে না সেটার ব্যবহার পুনরাবৃত্তি করা যায় 
                        অবজেক্ট স্প্রেড সিনট্যাক্সের মাধ্যমে ।
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Footer;