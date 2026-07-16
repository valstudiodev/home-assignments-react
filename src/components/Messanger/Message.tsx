import { MessageProps } from "./MessangerTypes";
import { ActionButton } from "./ActionButton";
import { IconLike, IconDislike } from "../../assets/icons/Icons";

export function Message({ message, onReactionClick }: MessageProps): React.JSX.Element {

  const messageStyle = message.author === 'user' ? 'text-green-500' : 'text-blue-500'
  console.log(message.author);


  return (
    <article className="message-container 
    flex justify-between">
      <p className={messageStyle}>
        {message.text}
      </p>
      <div className="message-container__action
      flex items-center gap-1">
        <ActionButton
          icon={<IconLike />}
          count={message.reactions.like}
          onClick={() => onReactionClick(message.id, 'like')}
        />

        <ActionButton
          icon={<IconDislike />}
          count={message.reactions.dislike}
          onClick={() => onReactionClick(message.id, 'dislike')}
        />
      </div>
    </article>
  )
}