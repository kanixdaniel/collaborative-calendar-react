export const EventBox = ({ event }) => {
    const { title, user } = event;

    return (
        <>
            <strong>{title}</strong>
            <span> - {user.fullName}</span>
        </>
    )
}
