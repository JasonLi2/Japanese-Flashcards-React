import React from "react";

const Header = ({ onChange }) => {
    return (
        <form className="header">
            <div className="form-group">
                <label htmlFor="category"> Category </label>
                <select id="category" onChange={onChange}>
                    <option value="hiragana"> Hiragana </option>
                    <option value="katakana"> Katakana </option>
                    <option value="kanji"> Kanji </option>
                </select>
            </div>
        </form>
    );
}

export default Header;