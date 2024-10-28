export default function Footer(){
    return(
    <footer className="flex flex-col justify-center items-center
     mt-7">
        <h2 className="font-heading text-white text 
        text-[6.83rem]">Our Social
             Media</h2>
             <div className="flex flex-row gap-36 mt-7">
             <a href="https://www.facebook.com/" target="_blank">
             <i className="fa-brands fa-facebook"></i>
             </a>
             <a href="https://www.youtube.com/" target="_blank">
             <i className="fa-brands fa-instagram"></i>
             </a>
             <a href="https://www.instagram.com/" target="_blank">
             <i className="fa-brands fa-youtube"></i></a>
             </div>
    </footer>
    )
}