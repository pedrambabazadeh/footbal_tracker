import Image from "next/image";
import {Header, Slider, Prediction, Results, Motto, BestPlayers } from "@/components/exports/for-home"

export default function Home() {
  return (
   <>
        <Slider/>
        <Prediction/>
        <Motto/>
        <Results/>
        <BestPlayers/>
   </>
  );
}
