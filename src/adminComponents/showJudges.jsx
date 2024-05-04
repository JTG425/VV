import '../styles/admin.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AddJudge from './addjudge';


function ShowJudges() {
    const [createJudges, setCreateJudges] = useState(false);


    const createJudgeVariants = {
        hidden: {
            y: 100,
            overflow: 'hidden',
            opacity: 0,
            transition: { type: 'spring', duration: 1 }
        },
        visible: {
            y: -100,
            opacity: 1,
            zIndex: 2,
            transition: { type: 'spring', duration: 1 }
        },
    };

    const blurredBackground = {
        hidden: {
            opacity: 0,
            display: 'none',
            transition: {
                duration: 0.5
            }
        },
        visible: {
            opacity: 1,
            display: 'block',
            transition: {
                duration: 0.5
            }
        }
    }

    // This Would use SQL Database
    const [judges, setJudges] = useState({
        judgeName: ['Joshua Golonka', 'Kait Newcomb'],
        judgeRegion: ['Midwest', 'Midwest'],
        judgeCompetition: ['ICCA', 'ICHSA'],
    })

    const handleCreateJudge = (name, region, competition) => {
        setCreateJudges({
            judgeName: [...judges.judgeName, name],
            judgeRegion: [...judges.judgeRegion, region],
            judgeCompetition: [...judges.judgeCompetition, competition]
        })
    }

    const handleCloseMenu = () => {
        setCreateJudges(false);
    }

    return (
        <div className="admin-show-judge">
            <p>Active ICCA Judges</p>
            <motion.button
                className='create-judge-button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCreateJudges(!createJudges)}
            >Add Judge</motion.button>
            <motion.div
                className='create-judge-container'
                initial='hidden'
                animate={createJudges ? 'visible' : 'hidden'}
                variants={createJudgeVariants}

            >
                <AddJudge closeMenu={handleCloseMenu} createGroup={handleCreateJudge} />
            </motion.div>
            <motion.div
                className='blurred-background'
                initial='hidden'
                animate={createJudges ? 'visible' : 'hidden'}
                variants={blurredBackground}
            ></motion.div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Judge Name</th>
                        <th scope="col">Region</th>
                        <th scope="col">Competition</th>
                    </tr>
                </thead>
                <tbody>
                    {judges.judgeName.map((judge, index) => (
                        <tr key={index}>
                            <td>{judge}</td>
                            <td>{judges.judgeRegion[index]}</td>
                            <td>{judges.judgeCompetition[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowJudges;




