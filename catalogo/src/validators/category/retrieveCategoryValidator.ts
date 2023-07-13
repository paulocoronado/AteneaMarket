import { Request, Response, NextFunction, RequestHandler } from "express";
import { check, ValidationChain, validationResult } from "express-validator";

const validateTotalItems: ValidationChain[] = [
  check("totalItems")
    .isInt({ gt: 0 })
    .withMessage("totalItems must be an integer greater than 0")
    .toInt(),
];

const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.totalItems) {
    req.params.totalItems = "5";
  } else {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
  next();
};

export { validateTotalItems, handleValidationErrors };
