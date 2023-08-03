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
                <tr>
                    <td>{contacts[0].id}</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                </tr>
                <tr>
                    <td>Data 4</td>
                    <td>Data 5</td>
                    <td>Data 6</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                </tr>
            </table>
        </div>
    );
};

export default Table;
