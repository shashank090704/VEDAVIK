import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the magnifying glass icon from react-icons

const SearchBar = () => {
    return (
        <div style={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search For Crops"
                style={styles.searchInput}
            />
            <FaSearch style={styles.searchIcon} />
        </div>
    );
};

const styles = {
    searchContainer: {
        left:'4vw',
        top:'2vh',
        position: 'relative',
        width: '600px', // Adjust width as needed
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Blur effect
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        padding: '10px 40px 10px 10px', // Adjust padding as needed
        border: 'none',
        borderRadius: '20px',
        fontSize: '16px',
        outline: 'none',
        backgroundColor: 'transparent',
        color: '#000',
    },
    searchIcon: {
        position: 'absolute',
        top: '50%',
        right: '10px', // Adjust to align with padding
        transform: 'translateY(-50%)',
        fontSize: '20px',
        color: '#999',
    },
};

export default SearchBar;