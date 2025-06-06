export const FormError = {
  TITLE: 'Title is required',
  CONTENT: 'Content is required',
};

export interface ErrorsData {
  title?: string;
  content?: string;
}

// export enum Error {
//   GET = 'Unable to load todos',
//   TITLE = 'Title should not be empty',
//   POST = 'Unable to add a todo',
//   PATCH = 'Unable to update a todo',
//   DELETE = 'Unable to delete a todo',
// }
