import React, { Component } from "react";
import AuthService from "../../services/auth.service";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }
    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem("user")));
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>

                        <p>this details </p>
                        <strong>{currentUser.user.name}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token: </strong>{" "}

                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.user.id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.user.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        );
    }
}
