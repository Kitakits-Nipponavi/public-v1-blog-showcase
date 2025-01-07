// All the types and interfaces are stored here

// RecommendedActions.tsx
export interface RAProps {
  action: {
    title: string;
  }[];
}

// ArticleSubtopic.tsx
export interface ArticleSubtopicProps {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  subtitle: string;
}

// ArticleHero.tsx
export interface ArticleHeroProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  timestamp: string;
}

// PageHeader.tsx
export interface PageHeaderProps {
  title: string;
  className?: string;
}

// InfoTOC.tsx
export interface InfoTOCProps {
  toc: {
    title: string;
    onClick: () => void;
    className?: string;
  }[];
}

// PageSubheader.tsx
export interface PageSubheaderProps {
  order?: number;
  title: string;
  className?: string;
}

// PageContent.tsx
export interface PageContentProps {
  content: string;
  className?: string;
}


// IndexArticle.tsx
export interface IndexArticleProps {
  title: string;
  subtitle: string;
  date: string;
  timestamp: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
}

// FeaturedIndexArticle.tsx
export interface FeaturedIndexProps {
  header: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
  date: string;
  timestamp: string;
  onClick: () => void;
}

// FeaturedArticle.tsx
export interface FeaturedCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  timestamp: string;
  onClick: () => void;
}

// InputField.tsx
export interface InputFieldProps {
  label?: string; // Optional label for the input field
  placeholder?: string; // Placeholder text for the input field
  value?: string; // Initial or current value of the input field
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Callback function to handle input changes
  type?: string; // Type of the input field (e.g., "text", "number", "email", "password")
  className?: string; // Optional CSS class for the input field
  disabled?: boolean; // Whether the input field should be disabled
  required?: boolean; // Whether the input field is required
  error?: string; // Optional error message to display
}

// Subheader.tsx
export interface SubheaderProps {
  label: string;
}

// TopicCard.tsx
export interface TopicProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  onClick: () => void;
}

// Hero.tsx
export interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  logo: ReactNode;
  actionButton: {
    label: string;
    onClick: () => void;
  };
}

// Icon.tsx
export interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// BookmarkSVG.tsx
export interface BookmarkSVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

// BookmarkButton.tsx
export interface BookmarkButtonProps {
  onClick?: () => void;
}

// ActionButtons.tsx
export type ButtonType = 'primary' | 'secondary' |'addition' | 'delete';

export interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: ButtonType;
}

// Close circular button
interface CloseButtonProps {
  onClick: () => void;
}

//Header.tsx
export interface HeaderProps {
  logo: string;
  width: number;
  height: number;
}

//BurgerMenu.tsx
export interface MenuItem {
  label: string;
  onClick: () => void;
  // Optionally add an icon or other properties
}
export interface BurgerMenuProps{
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface LayoutProps {
  children: ReactNode; // To allow children to be passed in
  isLoggedIn: boolean;
  user?: User;
  logo: string;
}

//TaskItem.tsx
export interface TaskItem {
  id: string;
  description: string;
  icon: string;
  isCompleted: boolean;
  isDefault?: boolean;
}

interface TaskItemProps extends TaskItem {
  onToggleTaskComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newDescription: string) => void;
}

//TaskListPage.tsx
export interface TaskListProps {
  // Array of Task objects, each representing an individual task
  tasks : TaskItem[];
  title: string;
  //Add a task to the list
  onAddTask: (description: string) => void;
  // Delete the entire task list
  onDeleteTaskList: () => void;
}

// AuthForm.tsx
export interface AuthFormProps {
  title: string;
  fields: { name: string; type: string; label: string; required?: boolean } [];
  buttonLabel: string;
  onSubmit: (FormData: { [ket: string]: string })=> void;
  errorMessage?: string;
}
