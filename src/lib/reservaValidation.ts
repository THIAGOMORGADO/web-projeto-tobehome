/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";

const bookingFormSchema = yup.object().shape({
  checkIn: yup.date().required("Check-in é obrigatório"),
  checkOut: yup
    .date()
    .required("Check-out é obrigatório")
    .min(yup.ref("checkIn"), "Check-out deve ser após o check-in"),
  guests: yup
    .number()
    .required("Número de Hóspedes é obrigatório")
    .min(1, "Deve haver pelo menos 1 hóspede"),
  roomType: yup.string().required("Tipo de Quarto é obrigatório"),
});

interface ValidationResult {
  valid: boolean;
  errors: Array<{ path: string; message: string }>;
}

export const validateBookingForm = async (
  data: Record<string, any>
): Promise<ValidationResult> => {
  try {
    await bookingFormSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err: any) {
    return { valid: false, errors: err.inner };
  }
};
