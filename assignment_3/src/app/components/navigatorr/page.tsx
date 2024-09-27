'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
export function Navigate1(param:any){
    const router = useRouter();
    return(
    <button onClick={()=>router.push(param.link)}>{param.name}</button>
    );
};

export function Navigate2(param:any){
    return(
        <Link href={param.link}>{param.name}</Link>
    )
}