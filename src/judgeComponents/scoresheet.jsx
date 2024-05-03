import '../styles/score.css';
import { motion } from 'framer-motion';
import Radio from './createRadio';
import { useState, useEffect } from 'react';

function Score(props) {
    const groupName = props.groupName;


    const handleGroupChange = (group) => {
        props.showGroup(group);
    };

    const handleSubmit = (group) => {
        props.showGroup(group);
        props.setGroupScores(totals);
    };

    const [scores, setScores] = useState({
        voc: Array(9).fill(0),
        vis: Array(7).fill(0),
        subjective: [0]
    });

    const [totals, setTotals] = useState({
        vocTotal: 0,
        visTotal: 0,
        subjectiveTotal: 0
    });

    const handleScoreChange = (category, index, value) => {
        const newScores = { ...scores };
        newScores[category][index] = value;
        setScores(newScores);
    };

    useEffect(() => {
        const vocTotal = scores.voc.reduce((a, b) => a + b, 0);
        const visTotal = scores.vis.reduce((a, b) => a + b, 0);
        var subjectiveTotal = scores.subjective.reduce((a, b) => a + b, 0);
        if (subjectiveTotal === 1) {
            subjectiveTotal = 30;
        } else if (subjectiveTotal === 2) {
            subjectiveTotal = 20;
        } else if (subjectiveTotal === 3) {
            subjectiveTotal = 10;
        } else {
            subjectiveTotal = 0;
        }

        setTotals({ vocTotal, visTotal, subjectiveTotal });
    }, [scores]);

    const categoryTitles = ["Vocal", "Visual", "Subjective"];

    const categories = {
        voc: ["Balance and Blend", "Arrangement", "Rythmic Accuracy", "Interpretation", "Intonation", "Solo Interpretation", "Tone Quality", "Dynamics", "Diction"],
        vis: ["Visual Cohesiveness", "Effectiveness of Presentation", "Energy/Stage Presence", "Appropriateness of Movement", "Creativity of Movement", "Transitions/Blocking", "Professionalism"],
        subjective: ["Subjective Rank"]
    };

    return (
        <>
            <motion.div
                className="scoresheet-div"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.button
                    className='back-button'
                    onClick={() => handleGroupChange(0)}
                >
                    X
                </motion.button>
                <h2>{groupName}</h2>
                {Object.keys(categories).map((categoryKey, catIdx) => (
                    <div key={catIdx} className={categoryKey}>
                        <span className='section-header'>
                            <h2>{categoryKey === 'voc' ? 'Vocal Performance' : categoryKey === 'vis' ? 'Visual Performance' : 'Subjective Evaluation'}</h2>
                            <p>{categoryKey === 'voc' ? '75 Points' : categoryKey === 'vis' ? '50 Points' : '25 Points'} (Select Appropriate Score)</p>
                        </span>
                        {categories[categoryKey].map((label, index) => (
                            <div key={index} className="category">
                                <p>{label}</p>
                                <Radio numOptions={categoryKey === 'voc' && index < 6 ? 10 : categoryKey === 'vis' && index < 3 ? 10 : categoryKey === 'vis' || categoryKey === 'voc' ? 5 : 3} category={`${categoryKey}${index}`} setScore={(value) => handleScoreChange(categoryKey, index, value)} isSubjective={catIdx === 2} />
                            </div>
                        ))}
                        <p>{categoryTitles[catIdx]} Total: {totals[`${categoryKey}Total`]}</p>
                    </div>
                ))}
                <motion.button
                    className='submit-button'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSubmit(0)}
                >
                    Submit
                </motion.button>
            </motion.div>
        </>
    );
}

export default Score;
