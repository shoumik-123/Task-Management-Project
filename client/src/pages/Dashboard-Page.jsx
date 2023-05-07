import React from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";

const DashboardPage = () => {
    return (
        <div>
            <h1>not masterLayout</h1>
            <MasterLayout>
                <h1>Dashboard</h1>
            </MasterLayout>
        </div>
    );
};

export default DashboardPage;