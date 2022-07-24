import './styles.scss'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export const Form = ({ addUser }) => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const id = uuidv4();

    const handlers = {
        name(value) {
            setName(value);
        },
        lastname(value) {
            setLastname(value);
        },
    }

    const handleChange = (e) => {
        const propName = e.target.name;
        
        if (propName) {
            handlers[propName](e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ id, name, lastname });
        setName("");
        setLastname("")
    }

    const handleClick = (e) => {
        handleSubmit(e)
    }

    const handlePressEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <div className="wrapper">
            <form className="form" onSubmit={handleSubmit} >
                <h3 className="form__title title">Create Person</h3>
                <div className="form__group">
                    <input className="form__input" type="text" placeholder=" " value={name} name="name" onChange={handleChange} />
                    <label className="form__label">Name*</label>
                </div>
                <div className="form__group">
                    <input className="form__input" type="text" placeholder=" " value={lastname} name="lastname" onChange={handleChange} />
                    <label className="form__label">Lastname*</label>
                </div>
                <button className="form__button" onKeyDown={handlePressEnter} onClick={handleClick} >Create</button>
            </form>
        </div>
    )
}
