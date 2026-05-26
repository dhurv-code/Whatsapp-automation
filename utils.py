def needs_human(message):

    keywords = [
        "owner",
        "human",
        "call me",
        "real person",
        "manager",
        "complaint"
    ]

    message = message.lower()

    return any(word in message for word in keywords)