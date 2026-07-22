import { ReactElement } from "react";

// export interface ReviewItemProps {
//   nickName: string;
//   text: string;
//   children: React.ReactNode;
// }


export interface ReviewButtonAction {
  iconPath: ReactElement;
}

export interface UserData {
  id: string;
  name: string;
  avatar: string;
  rating?: number;
  review: string;
  date: string;
}

export interface ReviewItemProps {
  user: UserData;
  children?: React.ReactNode;
}

export interface ReviewListProps {
  user: UserData[];
  renderActions?: (user: UserData) => React.ReactNode;
}