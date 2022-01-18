import React, { useRef, useState } from 'react'

const Create = () => {
    const [correct, setCorrect] = useState('');
    const [message, setMessage] = useState(null);
    const queRef = useRef('');
    const opt1Ref = useRef('');
    const opt2Ref = useRef('');
    const opt3Ref = useRef('');
    const opt4Ref = useRef('');

    console.log(opt1Ref.current.value);
    console.log(correct);
    const addquestion = () => {
        if (queRef.current.value == "" || opt1Ref.current.value == "" || opt2Ref.current.value == "" || opt3Ref.current.value == "" || opt4Ref.current.value == "" || correct == "") {
            alert("fill all the fields correctly")
        }

        else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "question": queRef.current.value,
                "opt1": opt1Ref.current.value,
                "opt2": opt2Ref.current.value,
                "opt3": opt3Ref.current.value,
                "opt4": opt4Ref.current.value,
                "correct": correct
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://kheloorjeetobackend.herokuapp.com/question", requestOptions)
                .then(response => response.json())
                .then(result => setMessage(result.message))
                .catch(error => console.log('error', error));
            queRef.current.value = "";
            opt1Ref.current.value = "";
            opt2Ref.current.value = "";
            opt3Ref.current.value = "";
            opt4Ref.current.value = "";
            setCorrect('');
            setTimeout(() => {
                setMessage(null);
            }, 4000)

        }
    }
    const setCorrectOpt = (i) => {
        if (queRef.current.value == "" || opt1Ref.current.value == "" || opt2Ref.current.value == "" || opt3Ref.current.value == "" || opt4Ref.current.value == "") {
            alert("fill all the fields correctly")
        }
        else {
            setCorrect(i)
        }
    }
    return (
        <div className='create'>
            {message && <p className='msg'>{message}</p>}
            <div className='que'>
                <input className='question' ref={queRef} type="text" placeholder='Type Question Here..' />
            </div>

            <div className='option'>
                <button className='radio' style={opt1Ref.current.value == correct ? { background: "green" } : { background: "red" }} onClick={() => setCorrectOpt(opt1Ref.current.value)}></button>
                <input type="text" className='opt' ref={opt1Ref} placeholder='Option1' />
            </div>
            <div className='option'>
                <button className='radio' style={opt2Ref.current.value == correct ? { background: "green" } : { background: "red" }} onClick={() => setCorrectOpt(opt2Ref.current.value)}></button>
                <input type="text" className='opt' ref={opt2Ref} placeholder='Option2' />
            </div>
            <div className='option'>
                <button className='radio' style={opt3Ref.current.value == correct ? { background: "green" } : { background: "red" }} onClick={() => setCorrectOpt(opt3Ref.current.value)}></button>
                <input type="text" className='opt' ref={opt3Ref} placeholder='Option3' />
            </div>
            <div className='option'>
                <button className='radio' style={opt4Ref.current.value == correct ? { background: "green" } : { background: "red" }} onClick={() => setCorrectOpt(opt4Ref.current.value)}></button>
                <input type="text" className='opt' ref={opt4Ref} placeholder='Option4' />
            </div>
            <button className='add' onClick={addquestion}>Add +</button>



        </div>
    )
}

export default Create
