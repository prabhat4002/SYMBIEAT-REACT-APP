import React from 'react';
import classes from './starRating.module.css';

export default function StarRating({ stars, size }) {
    const styles = {
        width: size + 'px', 
        height: size + 'px',
        marginRight: size / 6 + 'px',
    };

    function Star({ number }) {
        const halfNumber = number - 0.5;

        if (stars >= number) {
            return <img src="/star-full.svg" style={styles} alt={number} />;
        } else if (stars >= halfNumber) {
            return <img src="/star-half.svg" style={styles} alt={number} />;
        } else {
            return <img src="/star-empty.svg" style={styles} alt={number} />;
        }
    }

    return (
        <div className={classes.rating}>
            {[1, 2, 3, 4, 5].map(number => (
                <Star key={number} number={number} />
            ))}
        </div>
    );
}

StarRating.defaultProps = {
    size: 18,
};
