import { motion } from 'framer-motion';

function Radio({ numOptions, category, setScore, isSubjective }) {
    const handleScoreChange = (event) => {
        setScore(parseInt(event.target.value, 10) + 1);  // Adjusting value to 1-indexed
    };

    const radioButtons = Array.from({ length: numOptions }, (_, index) => (
        <motion.div key={index} className="radio-container">
            <input 
                type="radio" 
                className='radio-button' 
                name={category} 
                id={`${category}${index}`} 
                value={index}
                onChange={handleScoreChange} 
            />
            {isSubjective && index === 0 ? <label className='radio-label' htmlFor={`${category}${index}`}>1st</label> : isSubjective && index === 1 ? <label className='radio-label' htmlFor={`${category}${index}`}>2nd</label> : isSubjective && index === 2 ? <label className='radio-label' htmlFor={`${category}${index}`}>3rd</label> :             <label className='radio-label' htmlFor={`${category}${index}`}>{index + 1}</label>
}

        </motion.div>
    ));

    return (
        <div className="radio-group">
            {radioButtons}
        </div>
    );
}

export default Radio;