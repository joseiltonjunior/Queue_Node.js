import Mail from '../lib/Mail'

export default {
    async store(req, res) {
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }

        Mail.sendMail({
            from: 'Ambiente de Desenvolvimento <ambdevtech.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá ${name}, bem-vindo ao sistema de filas do Ambiente de Desenvolvimento Tech:)`
        })

        return res.json(user)
    }
}