'use client';
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface SkillGraphProps {
  skills: { name:string; level: number }[];
}

export const SkillGraph: React.FC<SkillGraphProps> = ({ skills }) => {
  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Leval',
        data: skills.map(skill => skill.level),
        backgroundColer: 'rgba(34, 202, 236, 0.2)',
        borderColer: 'rgba(34, 202, 236, 1)',
        borderWidth: 2,
      }
    ]
  }
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return <Radar data={data} options={options} />;
}

