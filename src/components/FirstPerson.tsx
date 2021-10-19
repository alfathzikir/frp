import React, { useEffect, useState } from "react";
import wordsStore, { IAction, update } from "../store/myWords";

const FirstPerson = () => {
    const [chatState, setChatState] = useState(wordsStore.initialState);

    useEffect(() => {
        wordsStore.subscribe(setChatState);
        wordsStore.init();
    }, []);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const messageObject = {
            person: "first-person",
            text: e.currentTarget.messageInput.value.trim(),
            favorited: false,
        };

        update(IAction.Send, messageObject);
    };

    return (
        <div className="container">
            <h2>Alfath 1</h2>
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
                            {" "}
                            {message.person === "second-person" ? (
                                <button
                                    style={{ marginRight: "100px" }}
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
                                    {message.favorited
                                        ? "unfavorite"
                                        : "Favorite"}
                                </button>
                            ) : null}
                            {message.text}
                        </p>
                        <div className="clear"></div>
                    </div>
                ))}
            </div>

            <form
                id="messageForm"
                onSubmit={onFormSubmit}
                style={{ width: 800 }}
            >
                <input
                    type="text"
                    id="messageInput"
                    name="messageInput"
                    placeholder="type here..."
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

export default FirstPerson;
