import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>
          <h1>Introdução</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellat quo odit beatae asperiores maiores vero ullam, eveniet libero unde reiciendis. Nostrum porro sed eos labore perspiciatis! Eum, culpa vel?</p>
          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="https">Link</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>

          <Button title="Voltar" loading />
        </Content>
      </main>
    </Container>
  );
}
