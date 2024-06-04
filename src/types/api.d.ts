// Chat Conversation
interface IResponseDetails {
  response?: string;
  options?: {
    type: string;
    priority: string;
    label: string;
  }[];
}
interface IChatContent {
  type: 'valid_response' | 'summary_text' | 'options';
  prompt_details: IResponseDetails;
}
export interface IChatConversation {
  message: {
    author: string;
    content: string | IChatContent[];
  };
}

// Suggested Prompts
export interface ISuggestedPrompts {
  type: 'grid';
  prompt_details: {
    n: string;
    messages: string[];
  };
}

// Chat Prompt Topics
export interface IChatTopics {
  id: string;
  topic: string;
  path: string;
}
