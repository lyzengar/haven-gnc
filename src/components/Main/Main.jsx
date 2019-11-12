import React from 'react';
import SectionOne from '../SectionOne/SectionOne';
import Form from '../Form/Form';
import './Main.css';

const Main = (props) => {
    return (
        <div className="Main">
            <SectionOne />
            <Form />
        </div>
    )
}

export default Main;