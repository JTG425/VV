import '../styles/admin.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function AddJudge(props) {
    const createGroup = props.createGroup;
    const closeMenu = props.closeMenu;

    return (
        <div className="admin-create-group">
            <motion.button
                className='close-button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => closeMenu()}
            >
                X
            </motion.button>
            <p>Create Judge</p>
            <input type="text" id='name' placeholder="Enter Judge Name"></input>
            <input type="text" id='region' placeholder="Enter Judge Region"></input>
            <input type="text" id='competition' placeholder="Enter Judge Competition"></input>
            <motion.button
                className='submit-button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    createGroup(document.getElementById('name').value, document.getElementById('region').value, document.getElementById('competition').value);
                    closeMenu();
                }}
            >
                Submit
            </motion.button>

        </div>
    );
}

export default AddJudge;




