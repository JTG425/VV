import logo from './logo.svg';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Score from './judgeComponents/scoresheet';
import Dashboard from './judgeComponents/judgedashboard';
import { useState } from 'react';

function Judge() {
    const [home, setHome] = useState(true);
    const [showGroup, setShowGroup] = useState(0);

    const handleGroupChange = (group) => {
        setShowGroup(group);
        setHome(false);
    };

    const handleHomeChange = () => {
        setHome(true);
    };

    const groups = [ // Use SQL to pull from database of groups for specific Judge
        "The Ohio State Of Mind",
        "Bloom",
        "No Comment",
        "Buck That",
        "Furmata",
        "Majors and Minors",
        "Scarlet Fever",
        "Biscaydence",
        "Scarlet and Grace Notes"
    ];

    const [groupScores, setGroupScores] = useState({
        group: Array(groups.length).fill(""),
        score: Array(groups.length).fill(0),
        subjective: Array(groups.length).fill(0)
    })

    const handleScoreChange = (score) => {
        const group = groups[showGroup - 1];
        const newScores = { ...groupScores };
        newScores.group[group - 1] = groups[group - 1];
        newScores.score[group - 1] = score.vocTotal + score.visTotal + score.subjective;
        setGroupScores(newScores);
        console.log(groupScores);
    }


    return (
        <div className="App">
            <header className="header">
            </header>
            {home ? (
                <Dashboard showGroup={handleGroupChange} groups={groups} groupScores={groupScores} />
            ) : (
                <Score groupName={groups[showGroup - 1]} showGroup={handleHomeChange} setGroupScores={handleScoreChange} />
            )}
        </div>
    );
}

export default Judge;




