import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    const alerts = useSelector(state => state.alert)
    
    return (
        alerts !== null && alerts.length !== 0 && alerts.map(al => (
            <div key = {al.id} className = {`alert alert-${al.alertType}`}>
                {al.msg}
            </div>
        ))
    );
}

export default Alert;
