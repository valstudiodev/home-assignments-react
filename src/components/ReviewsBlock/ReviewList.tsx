import { ReviewListProps, UserData } from "./ReviewsTypes";
import { ReviewItem } from "./ReviewItem";

export const reviews: UserData[] = [
  {
    id: crypto.randomUUID(),
    name: 'Emily Johnson',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    review:
      'Fantastic product! The quality exceeded my expectations and the delivery was very fast.',
    date: '2026-07-12',
  },
  {
    id: crypto.randomUUID(),
    name: 'Michael Brown',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4,
    review:
      'Very good overall. Easy to use and looks great. I would definitely recommend it.',
    date: '2026-07-09',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sophia Williams',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    review:
      'Amazing customer service and an excellent experience from start to finish.',
    date: '2026-07-06',
  },
  {
    id: crypto.randomUUID(),
    name: 'Daniel Wilson',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 3,
    review:
      'The product is good, but shipping took longer than expected.',
    date: '2026-07-02',
  },
  {
    id: crypto.randomUUID(),
    name: 'Olivia Martinez',
    avatar: 'https://i.pravatar.cc/150?img=41',
    rating: 5,
    review:
      'Absolutely love it! Great design, premium quality, and worth every dollar.',
    date: '2026-06-29',
  },
  {
    id: crypto.randomUUID(),
    name: 'James Anderson',
    avatar: 'https://i.pravatar.cc/150?img=18',
    rating: 4,
    review:
      'Solid purchase. Everything works as advertised and setup was straightforward.',
    date: '2026-06-25',
  },
  {
    id: crypto.randomUUID(),
    name: 'Emma Taylor',
    avatar: 'https://i.pravatar.cc/150?img=49',
    rating: 5,
    review:
      'One of the best purchases I have made this year. Highly recommended!',
    date: '2026-06-20',
  },
  {
    id: crypto.randomUUID(),
    name: 'Noah Thomas',
    avatar: 'https://i.pravatar.cc/150?img=22',
    rating: 4,
    review:
      'Good value for the money. Nice features and clean design.',
    date: '2026-06-17',
  },
];

export function ReviewList({ user, renderActions }: ReviewListProps): React.JSX.Element {
  return (
    <ul className="review-list max-w-150 mx-auto">
      {user.map((user) => (
        <li key={user.id}
          className="review-list__item">
          <ReviewItem user={user}>
            {renderActions && renderActions(user)}
          </ReviewItem>
        </li>
      ))}
    </ul>
  )
}