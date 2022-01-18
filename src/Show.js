import React, { useState, useEffect } from 'react'

const Show = () => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://kheloorjeetobackend.herokuapp.com/question", requestOptions)
            .then(response => response.json())
            .then(result => {
                setDatas(result)
                setIsloading(false)
                setFlag(!flag)
            })
            .catch(error => console.log('error', error));

    }, [flag])

    const deleteHandler = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://kheloorjeetobackend.herokuapp.com/question/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setFlag(!flag);
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className='show'>
            {isLoading && <p style={{ color: "white", textAlign: "center", marginTop: "100px" }}>Loading......</p>}
            {!isLoading && datas.map((data, id) => <div className='container' key={data._id}>
                <p>Que{id + 1}.{data.question}</p>
                <p>1.{data.opt1}</p>
                <p>2.{data.opt2}</p>
                <p>3.{data.opt3}</p>
                <p>4.{data.opt4}</p>
                <p>correct.{data.correct}</p>
                <p id='delete'><button className='del' onClick={() => deleteHandler(data._id)}>Delete</button></p>

            </div>)}
        </div>
    )
}

export default Show
