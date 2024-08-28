import React, { ChangeEvent } from 'react';

interface SearchBoxProps {
    searchTerm: string;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleClearSearch: () => void;
}

export default function SearchBox({ searchTerm, handleSearchChange, handleClearSearch}: SearchBoxProps){
    return (
        <div className="p-1">
            <input className="p-2.5 text-base bg-gray-200 rounded"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
            />
            <button className="ml-2.5 p-2.5 text-base text-blue-600" onClick={handleClearSearch}>
                Cancel
            </button>
        </div>
    )
}