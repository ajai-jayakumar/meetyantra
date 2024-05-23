export interface SuggestedTopics {
  id: string;
  title: string;
  create_time: string;
  is_archived: boolean;
}

export interface SuggestedPrompts {
  id: string;
  title: string;
  description: string;
  oneliner: string;
  prompt: string;
}
