import Image from "next/image";
import {Header, Slider, Prediction, Results, Motto} from "@/components/exports/for-home"

export default function Home() {
  return (
   <>
        <Slider/>
        <Prediction/>
        <Motto/>
        <Results/>
   </>
  );
}
