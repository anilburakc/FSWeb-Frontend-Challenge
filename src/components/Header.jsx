
import denemeResmi from '../assets/deneme-resmi.png';

export default function Header(){
    return(
        <div className="relative w-full h-64" >
            <div className="absolute inset-0  w-3/4 bg-blue-500"></div>
            <div className="absolute inset-0 left-3/4 w-1/4 bg-green-500"></div>
            <header>
                <nav className="relative z-10 flex left-196 top-2">
                    <button className=" text-red-600 text-xl border-2 border-red-600 rounded-md bg-white">Turkceye gec</button>
                    <button className="ml-3 pl-10 text-red-600 text-xl border-2 border-red-600 rounded-md bg-white">Dark Mode</button>
                </nav>
                
                <h4 className="relative z-10 flex left-10 top-10 text-red-600 text-xl ">isim soyisim</h4>
            </header>
            <main >
                <h1 className="relative z-10 flex left-10 top-12 text-black-600 text-4xl font-bold">ben frontend developer</h1>
                <p className="relative z-10 flex left-10 top-15 text-black-600 text-sm font-bold">kendim geliştirmeye çalışıyorum</p>
                <img src={denemeResmi} alt="deneme-resmi" className="relative z-10 flex left-190 bottom-20 top-15 w-1/4 h-1/4" />
                <nav className="relative z-10 flex left-10 top-20">
                    <a className=" py-2 px-1 top-20 text-yellow-600 text-m font-bold rounded-md bg-white">github</a>
                    <a className="ml-5 pl-5 py-2 top-20 text-yellow-500 text-m font-bold rounded-md bg-white">linkedin</a>
                </nav>
                
            </main>
        </div>
    )
}
