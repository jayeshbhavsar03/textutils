import React from 'react';
import img from "../Image/j.jpg";


export default function TextForm(props) {
    return (
        <>
            <hr />
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>What We Do</h1>
                <p className='my-3'>This  website is help to user perform the various activity like Convert Uppercase, Convert Lowercase, Convert toggle, Copy Text, Remove Extra Spaces and also the show what number of word, character and how time to read.  </p>
                <hr />
                <div class="text-center">
                    <img src={img} class="rounded-circle" alt="..."/>
                </div>
                <h1 className='text-center'>Omkar Giri</h1>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

            </div>
        </>
    )
}
