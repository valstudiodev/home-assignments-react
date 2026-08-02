import { MailProps } from "@/components/mail/components/mailList/mail.types";


export const mailsData: MailProps[] = [
  {
    id: '1',
    from: 'Sarah Johnson',
    email: 'sarah.johnson@acme.com',
    subject: 'Design review for Dashboard',
    preview: 'Could you review the latest dashboard design before tomorrow morning?',
    date: '09:12',
    unread: true,
    starred: true,
    hasAttachment: true,
    isMarked: false
  },
  {
    id: '2',
    from: 'GitHub',
    email: 'noreply@github.com',
    subject: 'Pull request approved',
    preview: 'Your pull request "refactor/sidebar" has been approved.',
    date: '08:46',
    unread: true,
    starred: false,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '3',
    from: 'Netflix',
    email: 'info@netflix.com',
    subject: 'New shows you may like',
    preview: 'We added several new movies and series based on your interests.',
    date: '09:45',
    unread: false,
    starred: false,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '4',
    from: 'Emily Carter',
    email: 'emily.carter@mail.com',
    subject: 'Weekend hiking trip',
    preview: 'Are you still planning to join us this Saturday morning?',
    date: '10:22',
    unread: false,
    starred: true,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '5',
    from: 'Figma',
    email: 'updates@figma.com',
    subject: 'New comments in your project',
    preview: 'Alex left 5 comments on the Mail UI prototype.',
    date: 'Mon',
    unread: true,
    starred: false,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '6',
    from: 'Amazon',
    email: 'shipment@amazon.ca',
    subject: 'Your package is on the way',
    preview: 'Expected delivery: Friday before 8 PM.',
    date: 'Sun',
    unread: false,
    starred: false,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '7',
    from: 'John Miller',
    email: 'john.miller@example.com',
    subject: 'Meeting notes',
    preview: 'I attached the meeting summary and action items.',
    date: 'Jul 18',
    unread: false,
    starred: false,
    hasAttachment: true,
    isMarked: false
  },
  {
    id: '8',
    from: 'LinkedIn',
    email: 'messages@linkedin.com',
    subject: '8 new job matches',
    preview: 'New Front-End Developer opportunities are waiting for you.',
    date: 'Jul 17',
    unread: true,
    starred: false,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '9',
    from: 'Spotify',
    email: 'hello@spotify.com',
    subject: 'Your Weekly Mix is ready',
    preview: 'Discover new artists picked just for you.',
    date: 'Jul 15',
    unread: false,
    starred: false,
    hasAttachment: false,
    isMarked: false
  },
  {
    id: '10',
    from: 'OpenAI',
    email: 'news@openai.com',
    subject: 'Platform updates',
    preview: 'Check out the latest API features and improvements.',
    date: 'Jul 12',
    unread: false,
    starred: true,
    hasAttachment: false,
    isMarked: false
  },
];