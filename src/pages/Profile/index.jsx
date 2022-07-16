import { Link } from "react-router-dom"

import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


import { FiArrowLeft, FiUser, FiMail, FiLock,FiCamera } from 'react-icons/fi'


export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/JulioCout.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="Password" icon={FiLock} />
                <Input placeholder="Nova Senha" type="Password" icon={FiLock} />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}