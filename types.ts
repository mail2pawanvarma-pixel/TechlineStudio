
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  isAudio?: boolean;
}

export interface PosterData {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  location: string;
  startDate: string;
  contact: string;
  email: string;
}
