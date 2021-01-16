import React from 'react';

const SearchForm = (props) => {
  
        return (
            
            <form className="form">
                <label className="label" htmlFor="query">Movie Name</label>
                    <input className="input" type="text" value={props.value}
                        onChange={(event) => props.setSearchVal(event.target.value)}
                        placeholder="Search a movie..."   
                    />
                    {/*<button className="button" type="submit">Search</button>*/}
            </form>
            
        )
    }


export default SearchForm;