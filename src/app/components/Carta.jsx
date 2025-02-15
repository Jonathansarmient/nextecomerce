"use client";
import Image from "next/image";
import { useState } from "react";

export default function Carta({ imagen, title, price }) {

    const [like, setLikes] = useState(false);
    return (
        <div className="w [30%] p-4 bg-gray-200 m-4 rounded-lg shadow-md text-center">
            <Image className="w [40%] " src={imagen} width={200} height={200} alt="product" />
            <h2>{title}</h2>
            <p className="text bg-green-400 font-bold text-2xl">
                ${price}
            </p>
            <p className="bg-red-500 text-white">Precio con IVA: {price * 1.19}</p>
            <button onClick={()=> setLikes(!like)} className="border border-black bg-black">{!like ? 'Me gusta' : 'No me gusta'}</button>

        </div>
    )
}