import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links</p>
        <h2>Faça seu Login</h2>
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
