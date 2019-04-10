import { validationResult } from 'express-validator/check';

export const validateRequest = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return false;
  }
  return true;
}

export const handleError = (error, res) => {
  const isObject = typeof error === 'object';
  res
    .status(500)
    .json({ error: error && isObject ? error.message || error.error : error });
}
