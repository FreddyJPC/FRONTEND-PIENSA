// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { useAxiosAuth, api } from '../services/api';
import './Dashboard.css';

interface FillEvent {
  id: number;
  fillLevel: number;
  timestamp: string;
}

interface ColorErrorEvent {
  id: number;
  detectedColor: string;
  expectedColor: string;
}

const Dashboard: React.FC = () => {
  const [fillLevel, setFillLevel] = useState(0);
  const [alertMessage, setAlertMessage] = useState('TODO ESTA CORRECTO');
  const [loading, setLoading] = useState(true);

  useAxiosAuth();

  useEffect(() => {
    const fetchFillLevel = async () => {
      try {
        const responseFill = await api.get<FillEvent[]>("/fill-event");
        if (responseFill.data.length > 0) {
          const latestFillEvent = responseFill.data.reduce((latest, current) => {
            return new Date(latest.timestamp) > new Date(current.timestamp) ? latest : current;
          });
          setFillLevel(latestFillEvent.fillLevel);
        }
      } catch (error) {
        console.error("Error fetching fill level data:", error);
      }
    };

    const fetchColorAlert = async () => {
      try {
        const responseColor = await api.get<ColorErrorEvent[]>("/color-error-event");
        const latestColorErrorEvent = responseColor.data[responseColor.data.length - 1];
        if (latestColorErrorEvent.detectedColor !== 'rojo') {
          setAlertMessage('REVISA EL BASURERO SE BOTO UNA FUNDA INCORRECTA');
        }
      } catch (error) {
        console.error("Error fetching color error data:", error);
      }
    };

    const fetchData = async () => {
      await fetchFillLevel();
      await fetchColorAlert();
      setLoading(false);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h2>NIVEL DE LLENADO</h2>
          <p>{fillLevel}%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${fillLevel}%` }}></div>
          </div>
        </div>
        <div className="card">
          <h2>ALERTA DE EQUIVOCACIONES</h2>
          <p>{alertMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
