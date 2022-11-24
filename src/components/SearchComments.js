import React, { useState } from "react";

function SearchComments({ text, setText }) {

    function handleUsernameSearch(event) {
        setText(event.target.value);
        // console.log(event.target.value);
    }

    return (
        <div>
            <form className="searchForm">
                <label>
                    Search by username
                    <input
                        type="text"
                        value={text}
                        onChange={handleUsernameSearch}
                    />
                </label>
            </form>
            
        </div>
    )
}

export default SearchComments;