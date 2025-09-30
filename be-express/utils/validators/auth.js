import { body } from "express-validator";
import prisma from "../../prisma/client";

// Definisikan validasi untuk register
const validateRegister = [
  body("name").notEmpty().withMessage("Nama wajib diisi"),
  body("email")
    .notEmpty()
    .withMessage("Email wajib diisi")
    .isEmail()
    .withMessage("Format email tidak valid")
    .custom(async (value) => {
      if (!value) {
        throw new Error("Email wajib diisi");
      }
      const user = await prisma.user.findUnique({ where: { email: value } });
      if (user) {
        throw new Error("Email sudah terdaftar");
      }
      return true;
    }),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Kata sandi minimal 4 karakter"),
];

// Definisikan validasi untuk login
const validateLogin = [
  body("email").notEmpty().withMessage("Email wajib diisi"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Kata sandi minimal 4 karakter"),
];

export default { validateRegister, validateLogin };
