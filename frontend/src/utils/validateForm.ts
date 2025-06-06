import { FormError, type ErrorsData } from '../types/Error';

export const validateForm = (
  title: string,
  content: string,
  setErrors: (errors: ErrorsData) => void
): boolean => {
  const newErrors: ErrorsData = {};

  if (!title.trim()) {
    newErrors.title = FormError.TITLE;
  }

  if (!content.trim()) {
    newErrors.content = FormError.CONTENT;
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
