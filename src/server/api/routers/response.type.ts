export type message = {
  role: string;
  type: string;
  content: string;
  content_type: string;
};

export type response = {
  messages: message[];
};
