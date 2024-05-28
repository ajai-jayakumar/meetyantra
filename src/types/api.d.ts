export interface Topics {
  id: string;
  topic: string;
  path: string;
}

export interface SuggestedPrompts {
  id: string;
  title: string;
  description: string;
  oneliner: string;
  prompt: string;
}

export interface ChatConversation {
  id: string;
  message: {
    id: string;
    author: {
      role: string;
      name: null;
      metadata: object;
    };
    create_time: number;
    content: string;
    status: string;
    metadata: object;
  };
}
