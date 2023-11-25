// decode HTML entities/special characters
export const decodeHtmlEntities = (input) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
};