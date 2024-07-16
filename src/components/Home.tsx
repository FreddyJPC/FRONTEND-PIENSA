import React from 'react';
import { Layout, Menu, Card, Typography, Divider } from 'antd';
import './Home.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 0px' }}>
        <div className="site-layout-content">
          <Title level={2} className="title">Bienvenido al Sistema de Monitoreo </Title>
          <Paragraph className="description">
            Este proyecto se basa en un circuito con un ESP32, un sensor de proximidad y un sensor de detección de color
            para monitorear y gestionar los basureros del área médica. El sistema ofrece dos soluciones principales:
          </Paragraph>
          <Divider />


          <Card className="card3" title="Registro de Eventos">
            <Paragraph>
              Todos los eventos se registran con la fecha y hora, permitiendo un seguimiento detallado y la generación de
              informes.
            </Paragraph>
          </Card>





          <Divider />

          <Card className="card1" title="Nivel de Llenado">
            <Paragraph>
              El sensor de proximidad detecta cuándo un basurero está lleno. Cuando se detecta un objeto a 10 cm,
              se envía una notificación indicando que el basurero debe ser vaciado.
            </Paragraph>
            <Paragraph>
              Esta funcionalidad ayuda a mantener la limpieza y el orden, asegurando que los basureros se vacíen a tiempo.
            </Paragraph>
          </Card>


          <Divider />

          <Card className="card2" title="Alertas de Equivocaciones">
            <Paragraph>
              El sensor de detección de color evita equivocaciones al botar los desechos. Si se detecta una funda de
              basura del color incorrecto, se envía una alerta.
            </Paragraph>
            <Paragraph>
              Esta función es crucial para asegurar que los desechos se separen correctamente, mejorando la gestión de
              residuos y cumpliendo con las normas de seguridad y salud.
            </Paragraph>
          </Card>




        </div>
      </Content>
    </Layout>
  );
};

export default Home;
