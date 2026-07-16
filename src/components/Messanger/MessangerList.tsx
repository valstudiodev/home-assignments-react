import { MessengerListProps } from "./MessangerTypes";
import { Message } from "./Message";

export function MessangerList({ messages, onReactionClick }: MessengerListProps): React.JSX.Element {
  return (
    <ul className="messenger-list flex
    flex-col gap-4 h-full grow justify-end">
      {messages.map((message) => (
        <li key={message.id}
          className="messenger-item">
          <Message message={message} onReactionClick={onReactionClick} />
        </li>
      ))}
    </ul>
  )
}