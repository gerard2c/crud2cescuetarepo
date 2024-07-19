import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} {item.middle_name} {item.last_name}: {item.address} - {item.email} - {item.phone} - {item.sex} - {item.birthday} - {item.place_of_birth} - {item.civil_status} - {item.religion} - {item.citizenship} - {item.fathers_first_name} - {item.fathers_middle_name} - {item.fathers_last_name} - {item.fathers_occupation} - {item.mothers_first_name} - {item.mothers_middle_name} - {item.mothers_last_name} - {item.mothers_occupation} - {item.elementary} - {item.secondary} - {item.vocational_trade_course} - {item.college_course_program} - {item.emergency_contact_name} - {item.emergency_contact_relationship} - {item.emergency_contact_phone} - {item.emergency_contact_address}
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default ItemList;