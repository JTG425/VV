import '../styles/admin.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function CreateGroup(props) {
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
            <p>Create Group</p>
            <input type="text" id='name' placeholder="Enter Group Name"></input>
            <input type="text" id='school' placeholder="Group School"></input>
            <input type="text" id='city' placeholder="Group City"></input>
            <input type="text" id='state' placeholder="Group State"></input>
            <input type="text" id='country' placeholder="Group Country"></input>
            <motion.button
                className='submit-button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    createGroup(document.getElementById('name').value, document.getElementById('school').value, document.getElementById('city').value, document.getElementById('state').value, document.getElementById('country').value);
                    closeMenu();
                }}
            >
                Submit
            </motion.button>

        </div>
    );
}

export default CreateGroup;




