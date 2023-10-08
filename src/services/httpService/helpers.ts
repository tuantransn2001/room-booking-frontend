import type { ServerErrorData } from './types';

export const serverErrorDataToString = (
  serverError: ServerErrorData,
): string => {
  const { detail, error } = serverError;
  if (error && error.message) {
    return `Status code ${error.code}! ${error.message}`;
  }
  if (!detail) return 'Unknown error';

  if (typeof detail === 'string') return detail;

  // process server error data to string message
  const errorMsg = detail.reduce((prev, curr) => {
    const location = curr.loc.join(' ');
    const row = `${location} ${curr.msg},\n`;

    const msg = prev + row;
    return msg;
  }, '');
  return errorMsg;
};
