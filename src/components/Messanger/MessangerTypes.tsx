
export interface Reaction {
  id: string;
  icon: string;
  count: number;
}

export type ReactionType = 'like' | 'dislike'

export interface ActiosButtonProps {
  icon: React.ReactNode;
  count: number;
  onClick: () => void;
}

export interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

export type Author = 'user' | 'bot'

export interface MessageType {
  id: string,
  text: string,
  author: Author,
  created: Date,
  reactions: Record<ReactionType, number>
}

export interface MessageProps {
  message: MessageType,
  onReactionClick: (
    messageId: string,
    reaction: ReactionType
  ) => void
}

export interface MessengerListProps {
  messages: MessageType[];
  onReactionClick: (
    messageId: string,
    reactionId: ReactionType
  ) => void
}

export interface MessengerLayoutProps {
  image: string;
  children: React.ReactNode
}