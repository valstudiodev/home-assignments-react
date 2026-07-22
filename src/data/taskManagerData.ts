interface Worker {
  id: string;
  name: string;
}

export const workersList: Worker[] = [
  {
    id: 'user-001',
    name: 'Emma Johnson',
  },
  {
    id: 'user-002',
    name: 'Liam Brown',
  },
  {
    id: 'user-003',
    name: 'Olivia Davis',
  },
  {
    id: 'user-004',
    name: 'Noah Wilson',
  },
  {
    id: 'user-005',
    name: 'Sophia Miller',
  },
  {
    id: 'user-006',
    name: 'James Taylor',
  },
  {
    id: 'user-007',
    name: 'Ava Anderson',
  },
  {
    id: 'user-008',
    name: 'Benjamin White',
  },
];

interface TasksListProps {
  id: string;
  title: string;
}

export const tasksList: TasksListProps[] = [
  {
    id: 'task-001',
    title: 'Create project structure',
  },
  {
    id: 'task-002',
    title: 'Design login page',
  },
  {
    id: 'task-003',
    title: 'Implement authentication',
  },
  {
    id: 'task-004',
    title: 'Build dashboard layout',
  },
  {
    id: 'task-005',
    title: 'Create reusable Button component',
  },
  {
    id: 'task-006',
    title: 'Develop user profile page',
  },
  {
    id: 'task-007',
    title: 'Add dark mode support',
  },
  {
    id: 'task-008',
    title: 'Optimize application performance',
  },
  {
    id: 'task-009',
    title: 'Write unit tests',
  },
  {
    id: 'task-010',
    title: 'Deploy application',
  },
];