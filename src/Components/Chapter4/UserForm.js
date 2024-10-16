import React, { useState } from 'react'

export default function UserForm() {
    const [data, setData] = useState("");
    const [person, setPerson] = useState(
        {
            fname: '',
            lname: '',
            age: '',
            gender: '',
            married: false,
            mobile: ''
        }
    )
    const ChangePersonInfo = (e) => {
        setPerson((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    const ChangePersonInfoChecked = (e) => {
        setPerson((prevState) => {
            return { ...prevState, [e.target.name]: e.target.checked }
        })
    }
    const getData = (e) => {
        e.preventDefault();
        console.log(e)
        setData(person.fname + ' ' + person.lname + ' ' + person.age + ' ' + person.gender + ' ' + person.married + ' ' + person.mobile)
    }
    return (
        <div>
            <form onSubmit={getData} >
                <table>
                    <tr>
                        <td>
                            First Name:
                        </td>
                        <td>
                            <input name='fname' placeholder='First Name' onChange={ChangePersonInfo} /><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name:
                        </td>
                        <td>
                            <input name='lname' placeholder='Last Name' onChange={ChangePersonInfo} /><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Age:
                        </td>
                        <td>
                            <input name='age' type='number' placeholder='Age' onChange={ChangePersonInfo} /><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mobile no:
                        </td>
                        <td>
                            <input type='number' name='mobile' placeholder='Mobile' onChange={ChangePersonInfo} /><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Gender:
                        </td>
                        <td>
                            <input type='radio' name='gender' value='male' id='male' onChange={ChangePersonInfo} />
                            <label for='male'>Male</label>
                            <input type='radio' name='gender' value='female' id='female' onChange={ChangePersonInfo} />
                            <label for='female'>Female</label><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Married:
                        </td>
                        <td>
                            <input type='checkbox' name='married' placeholder='Married' onChange={ChangePersonInfoChecked} /><br />
                        </td>
                    </tr>

                    <tr>
                        <td>
                        </td>
                        <td>
                            <input type='submit' name='submit' value='Submit' onChange={getData} /><br />
                        </td>
                    </tr>

                </table>
            </form>
            {data}<br />
            {JSON.stringify(person)}
        </div>
    )
}
