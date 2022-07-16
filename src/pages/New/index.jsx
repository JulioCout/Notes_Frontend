import { Link } from "react-router-dom"

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder='Título' />
                    <Textarea placeholder='Observações' />

                    <Section title="Links úteis">
                        <NoteItem value="htttp://www.google.com.br" />
                        <NoteItem placeholder="Novo link" isNew />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                        <NoteItem value="react" />
                        <NoteItem placeholder="Novo tag" isNew />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}