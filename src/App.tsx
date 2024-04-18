import {
  ArrowRightOutlined,
  CheckOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import { Card } from "antd";
import Logo from "../src/assets/carina-pires.png";

const { Meta } = Card;

function App() {
  return (
    <S.Body>
      <S.Header>
        <S.Container>
          <S.Hero>
            <S.HeroImage src={Logo} alt="Logo" />
            <S.StyledTitle>
              Enfrentando um Flagrante? Conte com a Experiência de uma
              Especialista em Direito Criminal!
            </S.StyledTitle>
            <S.StyledText>
              Você foi pego de surpresa em uma situação de flagrante delito? Não
              se desespere! A advogada Carina Pires, especializada em Direito
              Criminal, está aqui para ajudar você a enfrentar esse momento com
              segurança e garantir seus direitos.
            </S.StyledText>
            <S.StyledText>
              Seja Qual For o Seu Caso, Estamos Aqui Para Ajudar
            </S.StyledText>
            <S.WhatsAppButton type="primary" href="https://wa.me/989288588">
              FALAR DIRETAMENTE COM UMA ADVOGADA
            </S.WhatsAppButton>
          </S.Hero>
        </S.Container>
      </S.Header>
      <S.Container>
        <S.List>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              Não confie em promessas de ajuda de autoridades policiais.
            </S.ListText>
          </S.ListItem>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              Não fale sem a presença de um advogada especializado.
            </S.ListText>
          </S.ListItem>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              Não assine documentos sem que um advogada especializado esteja
              presente.
            </S.ListText>
          </S.ListItem>
          <S.ListItem>
            <ArrowRightOutlined
              style={{ color: "#25d366", fontSize: "20px" }}
            />
            <S.ListText>
              Não tome qualquer atidude sem comunicar seu advogada previamente.
            </S.ListText>
          </S.ListItem>
        </S.List>
        <S.MarketingTitle>
          COMO PODEMOS LHE AJUDAR NESSE MOMENTO?
        </S.MarketingTitle>
        <S.MarketingSubtitle>
          Advocacia Especializada em Direito Criminal com ênfase em Flagrantes
        </S.MarketingSubtitle>
        <S.CardsContainer>
          <S.StyledCard
            cover={
              <DashboardOutlined style={{ color: "red", fontSize: "50px" }} />
            }
          >
            <Meta
              title="AGILIDADE NO ACOMPANHAMENTO:"
              description="Os primeiros momentos na delegacia são cruciais para garantir os direitos do cliente e evitar que sua defesa seja prejudicada. Por isso, nosso atendimento é imediato!"
            />
          </S.StyledCard>

          <S.StyledCard
            cover={<CheckOutlined style={{ color: "red", fontSize: "50px" }} />}
          >
            <Meta
              title="CASOS EM QUE ATUAMOS:"
              description="• Crimes contra a pessoa: (homicídio, lesão corporal, estupro, violência doméstica, etc.)"
            />
            <Meta description="• Crimes contra o patrimônio: (roubo, furto, extorsão, dano, apropriação indébita, etc.)" />
            <Meta description="• Crimes contra a administração pública: (corrupção, concussão, peculato, prevaricação, etc.)" />
            <Meta description="• Outros crimes: (tráfico de drogas, porte ilegal de arma de fogo, crimes ambientais, etc.)" />
          </S.StyledCard>
        </S.CardsContainer>
        <S.WhatsAppButton type="primary" href="https://wa.me/989288588">
          FALAR DIRETAMENTE COM UMA ADVOGADA
        </S.WhatsAppButton>
      </S.Container>
      <S.Footer>
        <S.Container>
          <S.FooterImage src={Logo} alt="Logo" />
          <S.FooterItem>
            Este site não faz parte do Google nem do Facebook ou do Facebook
            Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do
            governo. Trabalhamos exclusivamente com serviços jurídicos.
          </S.FooterItem>
          <S.FooterItem>
            Copyright © 2024 Carina Pires - Advocacia. Todos os direitos
            reservados.
          </S.FooterItem>
          <S.FooterItem>OAB/SP n° 503.201</S.FooterItem>
        </S.Container>
      </S.Footer>
    </S.Body>
  );
}

export default App;
