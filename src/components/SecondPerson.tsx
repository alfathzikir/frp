import React, { useState, useEffect } from "react";
import wordsStore, { IAction, update } from "../store/myWords";

const SecondPerson = () => {
    const [chatState, setChatState] = useState(wordsStore.initialState);

    useEffect(() => {
        wordsStore.subscribe(setChatState);
        wordsStore.init();
    }, []);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const messageObject = {
            person: "second-person",
            text: e.currentTarget.messageInput.value.trim(),
            favorited: false,
        };

        update(IAction.Send, messageObject);
    };
    return (
        <div className="container">
            <h2 style={{ float: "right" }}>Alfath 2</h2>
            <div className="chat-box">
                {chatState.data.map((message, index) => (
                    <div>
                        <p
                            className={message.person}
                            style={{
                                backgroundColor: message.favorited
                                    ? "red"
                                    : undefined,
                            }}
                        >
                            {message.text}
                            {message.person === "first-person" ? (
                                <button
                                    style={{ marginLeft: "100px" }}
                                    onClick={() =>
                                        update(
                                            IAction.Favorite,
                                            {
                                                person: "",
                                                text: "",
                                                favorited: false,
                                            },
                                            index
                                        )
                                    }
                                >
                                    {" "}
                                    {console.log(index)}
                                    Favorite
                                </button>
                            ) : null}
                        </p>
                        <div className="clear"></div>
                    </div>
                ))}
            </div>
            <form id="messageForm" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    id="messageInput"
                    name="messageInput"
                    required
                />
                <button type="submit">Send</button> <br />
            </form>
            <button
                className="clear-button"
                onClick={() =>
                    update(IAction.Clear, {
                        person: "",
                        text: "",
                        favorited: false,
                    })
                }
            >
                Clear Chat
            </button>
        </div>
    );
};

export default SecondPerson;
