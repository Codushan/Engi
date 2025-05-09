"use client"
import Image from "next/image";
import React, { useState } from 'react';
import styles from "./page.module.css";
import ARPreviewCard from "../components/ARPreviewCard";
import AIAssistant from "../components/AIAssistant";
import CountdownTimer from "../components/CountdownTimer";
import HolographicCity from "../components/HolographicCity";
import LeaderboardWidget from "../components/LeaderboardWidget";
import NetworkingMap from "../components/NetworkingMap";
import Index from "./Pages/index"

export default function Home() {
  return (
    <>
    <Index/>
    </>
  );
}
