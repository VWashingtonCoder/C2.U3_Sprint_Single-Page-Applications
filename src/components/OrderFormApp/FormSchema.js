import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("we need to know how big to make your pizza"),
    beef: yup
        .boolean(),
    chicken: yup
        .boolean(),
    peppers: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    cheese: yup
        .boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;