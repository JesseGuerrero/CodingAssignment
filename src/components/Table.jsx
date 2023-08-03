import React from 'react';
let contacts = require("../contacts.json")

const Table = () => {
    return (
        <div style={{width: "100%"}}>
            <table style={{margin: "0 auto"}} border="1">
                <tr>
                    <th>Contact ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Phone Number</th>
                    <th>Country Code</th>
                </tr>
                    {contacts.map((contact) => (
                        <tr>
                            <td>{contact.id}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.countryCode}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
};

export default Table;
