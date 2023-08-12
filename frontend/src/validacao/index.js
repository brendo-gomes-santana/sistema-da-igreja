import { z } from 'zod';

export const Schemalogin = z.object({
    email: z.string().email('Email tem que ser valido').nonempty('Campo é obrigatório'),
    senha: z.string().nonempty('Senha é obrigatório')
})