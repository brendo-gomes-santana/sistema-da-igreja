import { z } from 'zod';

export const Schemalogin = z.object({
    email: z.string().email('Email tem que ser valido').nonempty('Campo é obrigatório'),
    senha: z.string().nonempty('Senha é obrigatório')
})

export const SchemaCadastrarMusico = z.object({
    nome: z.string().nonempty('Campo é obrigatório'),
    email: z.string().nonempty('Campos é obrigatório').email('Email tem que ser valido'),
    tipo: z.string().nonempty('Selecione o qual banda esse músico faz parte')
})