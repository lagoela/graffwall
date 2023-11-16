import * as yup from "yup";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  sobrenome: yup.string().required("Sobrenome é obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default validationSchema;
