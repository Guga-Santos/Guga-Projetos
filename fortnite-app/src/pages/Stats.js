import React from "react";
import Header from "../components/Header";
import Table from '../components/Table';
import UserSearchInputs from '../components/UserSearchInputs';

export default function Stats() {
    return (
        <div>
            <Header />
            <UserSearchInputs />
            <Table />
        </div>
    )
}