import '../App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function JudgeDashboard(props) {
    const groups = props.groups;
    const groupScores = props.groupScores;



    const handleGroupChange = (group) => {
        props.showGroup(group);
    };


    return (
        <div className="dashboard">
            <p>ICCA 2025 MW QF 1</p>
            <p> Welcome (Judge Name) </p>
            <p>Todays Competitors</p>
            <motion.div
                className='dashboard-groups'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {groups.map((group, index) => (
                    <motion.button
                        key={index}
                        className="group-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleGroupChange(index + 1)}
                    >
                        {group}
                        <p>{groupScores.score[index]}</p>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
}

export default JudgeDashboard;




