import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sex, setSex] = useState('');
    const [birthday, setBirthday] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [religion, setReligion] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [fathersFirstName, setFathersFirstName] = useState('');
    const [fathersMiddleName, setFathersMiddleName] = useState('');
    const [fathersLastName, setFathersLastName] = useState('');
    const [fathersOccupation, setFathersOccupation] = useState('');
    const [mothersFirstName, setMothersFirstName] = useState('');
    const [mothersMiddleName, setMothersMiddleName] = useState('');
    const [mothersLastName, setMothersLastName] = useState('');
    const [mothersOccupation, setMothersOccupation] = useState('');
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [vocationalTradeCourse, setVocationalTradeCourse] = useState('');
    const [collegeCourseProgram, setCollegeCourseProgram] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('');
    const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
    const [emergencyContactAddress, setEmergencyContactAddress] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setSex(item.sex);
            setBirthday(item.birthday);
            setPlaceOfBirth(item.place_of_birth);
            setCivilStatus(item.civil_status);
            setReligion(item.religion);
            setCitizenship(item.citizenship);
            setFathersFirstName(item.fathers_first_name);
            setFathersMiddleName(item.fathers_middle_name);
            setFathersLastName(item.fathers_last_name);
            setFathersOccupation(item.fathers_occupation);
            setMothersFirstName(item.mothers_first_name);
            setMothersMiddleName(item.mothers_middle_name);
            setMothersLastName(item.mothers_last_name);
            setMothersOccupation(item.mothers_occupation);
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setVocationalTradeCourse(item.vocational_trade_course);
            setCollegeCourseProgram(item.college_course_program);
            setEmergencyContactName(item.emergency_contact_name);
            setEmergencyContactRelationship(item.emergency_contact_relationship);
            setEmergencyContactPhone(item.emergency_contact_phone);
            setEmergencyContactAddress(item.emergency_contact_address);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            email,
            phone,
            sex: sex,
            birthday: birthday,
            place_of_birth: placeOfBirth,
            civil_status: civilStatus,
            religion: religion,
            citizenship: citizenship,
            fathers_first_name: fathersFirstName,
            fathers_middle_name: fathersMiddleName,
            fathers_last_name: fathersLastName,
            fathers_occupation: fathersOccupation,
            mothers_first_name: mothersFirstName,
            mothers_middle_name: mothersMiddleName,
            mothers_last_name: mothersLastName,
            mothers_occupation: mothersOccupation,
            elementary: elementary,
            secondary: secondary,
            vocational_trade_course: vocationalTradeCourse,
            college_course_program: collegeCourseProgram,
            emergency_contact_name: emergencyContactName,
            emergency_contact_relationship: emergencyContactRelationship,
            emergency_contact_phone: emergencyContactPhone,
            emergency_contact_address: emergencyContactAddress,
            
        };
        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <label>Birthday:</label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <select value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} >
                <option value="Select">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                </select>
            </div>
            <div>
                <label>Religion:</label>
                <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={fathersFirstName} onChange={(e) => setFathersFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={fathersMiddleName} onChange={(e) => setFathersMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={fathersLastName} onChange={(e) => setFathersLastName(e.target.value)} />
            </div>
            <div>
                <label>Father's Occupation:</label>
                <input type="text" value={fathersOccupation} onChange={(e) => setFathersOccupation(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={mothersFirstName} onChange={(e) => setMothersFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={mothersMiddleName} onChange={(e) => setMothersMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Last Name:</label>
                <input type="text" value={mothersLastName} onChange={(e) => setMothersLastName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Occupation:</label>
                <input type="text" value={mothersOccupation} onChange={(e) => setMothersOccupation(e.target.value)} />
            </div>
            <div>
                <label>Elementary:</label>
                <input type="text" value={elementary} onChange={(e) => setElementary(e.target.value)} />
            </div>
            <div>
                <label>Secondary:</label>
                <input type="text" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
            </div>
            <div>
                <label>Vocational Trade Course:</label>
                <input type="text" value={vocationalTradeCourse} onChange={(e) => setVocationalTradeCourse(e.target.value)} />
            </div>
            <div>
                <label>College Course Program:</label>
                <input type="text" value={collegeCourseProgram} onChange={(e) => setCollegeCourseProgram(e.target.value)} />
            </div>
            <div>
                <label>Emergency Contact Name:</label>
                <input type="text" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
            </div>
            <div>
                <label>Emergency Contact Relationship:</label>
                <input type="text" value={emergencyContactRelationship} onChange={(e) => setEmergencyContactRelationship(e.target.value)} />
            </div>
            <div>
                <label>Emergency Contact Phone:</label>
                <input type="text" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />
            </div>
            <div>
                <label>Emergency Contact Address:</label>
                <input type="text" value={emergencyContactAddress} onChange={(e) => setEmergencyContactAddress(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
       
};
export default ItemForm;