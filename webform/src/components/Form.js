import React, { useState, useEffect } from 'react'

function Form () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fetchedData, setFetchedData] = useState({});
    const [occupations, setOccupations] = useState('');
    const [states, setStates] = useState('');

    const handleSubmit = (event) => {
        alert(name + ' ' + email + ' ' + password + ' ' + occupations + ' ' + states);
        event.preventDefault();
    }

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://frontend-take-home.fetchrewards.com/form')
            .then(response => response.json())
            .then(data => setFetchedData(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    

    console.log('fetchedData list ' + fetchedData['occupations']);
    console.log('occupation list ' + occupations);
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Full Name
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            </label>
            <label>
                Email
                <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label>
                Password
                <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </label>
            <label>
                Occupation
                <select value={occupations} onChange={e => setOccupations(e.target.value)}>
                    <option value=""></option>
                    {fetchedData['occupations']?.map((o) => {
                        return (<option value={o}>{o}</option>);
                    })}
                </select>
            </label>
            <label>
                State
                <select value={states} onChange={e => setStates(e.target.value)}>
                     <option value=""></option>
                    {fetchedData['states']?.map((o) => {
                        return (<option value={o['name']}>{o['name']}</option>);
                    })}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form