import CardMaker from "./components/cardMaker/page";
// function Home(){
//   return(<div className="relative border-4 border-sky-400 rounded-lg h-screen">
//     <h1 className="text-5xl text-center mt-5 underline decoration-double decoration-red-600 
//     decoration-8">Students ID Cards</h1>
//     <div className="border-4 border-sky-400 rounded-lg h-44 w-80 ml-8 leading-7 text-xl bg-red-100
//     fixed bottom-96 left-96">
//       <CardMaker name="Haris Khan" fatherName="Jamal Khan" rollNo={5357555111} phone={44223319216}/>
//     </div>
//     <div className="border-4 border-sky-400 rounded-lg h-44 w-80 ml-8 leading-7 text-xl bg-red-100
//     fixed bottom-96 right-96">
//       <CardMaker name="Yasir Shahid" fatherName="Shaihid Danish" rollNo={3786543985} phone={42373154731}/>
//     </div>
//     <div className="bottom-48">
//     <div className="border-4 border-sky-400 rounded-lg h-44 w-80  leading-7 text-xl bg-red-100">
//       <CardMaker name="Ubaid Rahman" fatherName="Owais Rahman" rollNo={55221177551} phone={11552213151}/>
//     </div>
//     </div>
//   </div>)
// };
function Home(){
  return(
    <body>
    <div>
    <h1 className="text-5xl text-center  underline decoration-double decoration-red-600 
    decoration-8 mt-28">Students ID Cards</h1>
    <div className="flex flex-col  justify-evenly mt-24 sm:flex-row">
      <div className="border-4 border-sky-400 rounded-lg h-44 w-80 leading-7 text-xl bg-red-100">
      <CardMaker name="Haris Khan" fatherName="Jamal Khan" rollNo={5357555111} phone={44223319216}/>
      </div>
      <div className="border-4 border-sky-400 rounded-lg h-44 w-80  leading-7 text-xl bg-red-100">
      <CardMaker name="Yasir Shahid" fatherName="Shahid Danish" rollNo={3786543985} phone={42373154731}/>
      </div>
      <div className="border-4 border-sky-400 rounded-lg h-44 w-80  leading-7 text-xl bg-red-100">
      <CardMaker name="Ubaid Rahman" fatherName="Owais Rahman" rollNo={55221177551} phone={11552213151}/>
      </div>
    </div>
  </div>
</body>
  )
};
export default Home;