import { MessengerLayoutProps } from "./MessangerTypes";
import styles from "./Messenger.module.css";

export function MessengerLayout({ image, children }: MessengerLayoutProps): React.JSX.Element {
  return (
    <div className={` messenger ${styles.messenger}`} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  )
}