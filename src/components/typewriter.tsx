"use client"
// Dependencies
import { useTypewriter } from "react-simple-typewriter";

export default function Typewriter({ className }: { className?: string }) {
    const [text] = useTypewriter({
        words: ["jugadores", "compañeros", "amigos", "familia"],
        loop: 0,
    })

    return (
        <div className={className}>{
            text ? <span className="bg-[#034256] pt-2 px-1 text-white">{text}</span> : null
        }</div >
    )
}