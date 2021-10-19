import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wordsStore from "../store/myWords";

const PersonSwitcher = () => {
    const [chatState, setChatState] = useState(wordsStore.initialState);
    const location = window.location.href.split("/")[3];

    useEffect(() => {
        wordsStore.subscribe(setChatState);
        wordsStore.init();
    }, []);

    const messageNotification = chatState.newDataCount > 0 && (
        <span className="notify">{chatState.newDataCount}</span>
    );

    return (
        <div className="switcher-div">
            <Link to="/first-person">
                <button className="switcher">
                    Person1
                    {location !== "first-person" &&
                        location.length > 1 &&
                        messageNotification}
                </button>
            </Link>
            <Link to="/second-person">
                <button className="switcher">
                    Person2
                    {location !== "second-person" && messageNotification}
                </button>
            </Link>
        </div>
    );
};

export default PersonSwitcher;
