import '../styles/admin.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CreateGroup from './addGroup';


function ShowGroups() {
    const [createGroup, setCreateGroup] = useState(false);


    const createGroupVariants = {
        hidden: {
            y: '100vw',
            opacity: 0,
        },
        visible: {
            y: -100,
            opacity: 1,
            zIndex: 1,
            transition: { type: 'spring', duration: 1 }
        },
        exit: {
            y: '-100vw',
            transition: { duration: 1 }

        }
    };

    // This Would use SQL Database
    const [groups, setGroups] = useState({
        groupName: ['The Ohio State of Mind', 'No Comment'],
        groupSchool: ['The Ohio State University', 'University of Illinois'],
        groupCity: ['Columbus', 'Champaign'],
        groupState: ['OH', 'IL'],
        groupCountry: ['USA', 'USA'],
    })

    const handleCreateGroup = (name, school, city, state, country) => {
        setGroups({
            groupName: [...groups.groupName, name],
            groupSchool: [...groups.groupSchool, school],
            groupCity: [...groups.groupCity, city],
            groupState: [...groups.groupState, state],
            groupCountry: [...groups.groupCountry, country]
        })
    }

    const handleCloseMenu = () => {
        setCreateGroup(false);
    }

    return (
        <div className="admin-show-groups">
            <p>Competing ICCA Groups</p>
            <motion.button
                className='create-group-button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCreateGroup(!createGroup)}
            >Create Group</motion.button>
            <motion.div
                className='create-group-container'
                initial='hidden'
                animate={createGroup ? 'visible' : 'hidden'}
                variants={createGroupVariants}

            >
                <CreateGroup closeMenu={handleCloseMenu} createGroup={handleCreateGroup} />
            </motion.div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">University</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.groupName.map((group, index) => (
                        <tr key={index}>
                            <th scope="row">{group}</th>
                            <td>{groups.groupSchool[index]}</td>
                            <td>{groups.groupCity[index]}</td>
                            <td>{groups.groupState[index]}</td>
                            <td>{groups.groupCountry[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowGroups;




