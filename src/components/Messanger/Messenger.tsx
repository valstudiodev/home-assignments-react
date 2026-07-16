import { useState } from "react";
import { MessageType, ReactionType } from "./MessangerTypes";
import { MessangerList } from "./MessangerList";
import { MessageInput } from "./MessageInput";
import { MessengerLayout } from "./MessengerLayout";
import bgImage from "@/assets/img/bg-messenger.jpg";


export default function Messenger(): React.JSX.Element {
  const [messages, setMessages] = useState<MessageType[]>([])

  function handleSendMessage(text: string): void {
    const newMessage: MessageType = {
      id: crypto.randomUUID(),
      text,
      author: 'user',
      created: new Date(),
      reactions: {
        like: 0,
        dislike: 0,
      }
    }

    setMessages(prev => [...prev, newMessage])
  }

  function handleReactionClick(messageId: string, reaction: ReactionType): void {

    setMessages((prev) =>
      prev.map((message) => {

        if (message.id !== messageId) {
          return message
        }


        return {
          ...message,
          reactions: {
            ...message.reactions,
            [reaction]: message.reactions[reaction] + 1
          }
        }
      })
    )
  }

  return (

    <MessengerLayout image={bgImage}>
      <MessangerList messages={messages} onReactionClick={handleReactionClick} />
      <MessageInput onSendMessage={handleSendMessage} />
    </MessengerLayout>

    // <section className="messenger
    // bg-bg-card p-4 rounded-2xl">

    // </section>
  )
}