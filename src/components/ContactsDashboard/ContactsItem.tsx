import { ContactItemProps } from './ContactsTypes';

export function ContactsItem({ contact, children }: ContactItemProps): React.JSX.Element {
  const { name, avatar, phone, email, status } = contact

  return (
    <article className="contact-item flex items-start gap-3">
      <div className="contact-item__img-wrap 
      w-12.5 h-12.5 rounded-full overflow-hidden">
        <img src={avatar} alt="avatar user"
          className="contact-item__image" />
      </div>
      <div className="contact-item__info grow">
        <h3 className="contact-item__title
        text-gray-500">{name}</h3>
        <div className="contact-item__phone">{phone}</div>
        <div className="contact-item__email">{email}</div>
        <div className="contact-item__status">{status}</div>
      </div>
      {children && <div className="contact-item__actions">{children}</div>}
    </article>
  )
}