import { Button, Card } from "antd";
import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
`;

export const Header = styled.div`
  width: 100%;
  height: 90vh;
  background: #001734;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Hero = styled.div`
  height: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const StyledText = styled.p`
  color: #ffffff;
  font-family: "Montserrat", Sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: center;
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledTitle = styled.h1`
  color: #ffffff;
  font-family: "Montserrat", Sans-serif;
  font-size: 39px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: center;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const HeroImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    fmax-width: 200px;
    max-height: 200px;
  }
`;

export const WhatsAppButton = styled(Button)`
  width: 500px;
  height: 50px;
  background: #25d366 !important;
  border-color: #25d366 !important;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #075e54 !important;
    border-color: #075e54 !important;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    font-size: 12px;
  }
`;

export const List = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  border-radius: 25px;
  margin: 40px auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ListItem = styled.div`
  display: flex;
  padding: 2%;
`;

export const ListText = styled.p`
  font-family: "Montserrat", Sans-serif;
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
`;

export const MarketingTitle = styled.p`
  color: #000000;
  font-family: "Montserrat", Sans-serif;
  font-size: 58px;
  font-weight: 300;
  line-height: 47px;
  letter-spacing: 0px;
  text-align: center;
  margin: 10px auto;
  max-width: 900px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 40px;
    padding: 5%;
  }
`;

export const MarketingSubtitle = styled.p`
  color: #000000;
  font-family: "Montserrat", Sans-serif;
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: center;
  margin: 10px auto;
  max-width: 900px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 0 5% 5% 5%;
    margin: 0;
  }
`;

export const StyledCard = styled(Card)`
  width: 400px;
  padding: 20px;

  .ant-card-meta-title {
    text-align: center;
  }

  .ant-card-meta-description {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 180px;
  background: #393939;
  display: flex;
  align-items: center;
  margin-top: 40px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const FooterItem = styled.div`
  color: #ffffff;
  font-family: "Montserrat", Sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: center;
`;

export const FooterImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;
