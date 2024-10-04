export default function CardMaker(data:{name:string, fatherName:string, rollNo: number, phone:number}){
    return(<div>
            <p className="mt-1">Name: {data.name}</p>
            <p className="mt-1">Father Name: {data.fatherName}</p>
            <p className="mt-1">Roll No: {data.rollNo}</p>
            <p className="mt-1">Phone: +92{data.phone}</p>
            </div>
    )
};