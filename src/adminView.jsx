import './styles/admin.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GiMicrophone } from "react-icons/gi";
import { FaPenAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import AddJudge from './adminComponents/addjudge';
import ShowGroups from './adminComponents/showGroups';
import CreateComp from './adminComponents/createComp';
import AdminDashboard from './adminComponents/adminDash';


function Admin() {
    const [showMenu, setShowMenu] = useState(false);
    const [pageShown, setPageShown] = useState('dashboard');
    const sidebarVariants = {
        hidden: {
            x: -200
        },
        visible: {
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="Admin">
            <p>Welcome (Admin Name)</p>
            <motion.button
                className='menu-button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowMenu(!showMenu)}
            >
                <GiHamburgerMenu />
            </motion.button>
            <motion.div
                className='sidebar'
                initial='hidden'
                animate={showMenu ? 'visible' : 'hidden'}
                variants={sidebarVariants}
            >
                <motion.button
                    className='sidebar-button'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        setPageShown('dashboard');
                        setShowMenu(false);
                    }}
                >
                    <MdSpaceDashboard />
                    <p>Dashboard</p>
                </motion.button>
                <motion.button
                    className='sidebar-button'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        setPageShown('competitions');
                        setShowMenu(false);
                    }}
                >
                    <FaBuilding />
                    <p>Competitions</p>
                </motion.button>
                <motion.button
                    className='sidebar-button'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        setPageShown('groups');
                        setShowMenu(false);
                    }}
                >
                    <GiMicrophone />
                    <p>Groups</p>
                </motion.button>
                <motion.button
                    className='sidebar-button'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        setPageShown('judges');
                        setShowMenu(false);
                    }}
                >
                    <FaPenAlt />
                    <p>Judges</p>
                </motion.button>
            </motion.div>
            <div className='admin-page'>
                {pageShown === 'dashboard' ? (
                    <div>
                        <AdminDashboard />
                    </div>
                ) : pageShown === 'competitions' ? (
                    <div>
                        <CreateComp />
                    </div>
                ) : pageShown === 'groups' ? (
                    <div>
                        <ShowGroups />
                    </div>
                ) : (
                    <div>
                        <AddJudge />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;




