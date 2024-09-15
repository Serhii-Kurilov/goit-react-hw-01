import s from "./FriendListItem.module.css"
import clsx from "clsx"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img
        className={s.avatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.isOnline : s.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>

  )
}

export default FriendListItem