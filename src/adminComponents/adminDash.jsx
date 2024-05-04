import '../styles/admin.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function AdminDashboard() {

    return (
        <div className="admin-dashboard">
            <p>Dashboard</p>
            <div className='admin-dashboard-widgets-container'>
                <div className='admin-dashboard-widget'>
                    <p>Recent Scores</p>
                </div>
                <div className='admin-dashboard-widget'>
                    <p>Upcoming Shows</p>
                </div>
                <div className='admin-dashboard-widget'>
                    <p>Current Judges</p>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;




