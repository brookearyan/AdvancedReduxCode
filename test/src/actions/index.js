import { SAVE_COMMENT } from './types';

export function saveComment(comment) {
  return {
    action: SAVE_COMMENT,
    payload: comment
  }
}
