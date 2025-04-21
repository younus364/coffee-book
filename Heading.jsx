function Heading({tittle,subtittle}) {
    return (
        <div className=" flex flex-col w-full justify-center items-center my-12">
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-semibold  mb-4">{tittle}</h1>
            <p className=" text-xs md:text-base text-gray-600 text-center font-thin">{subtittle}</p>
        </div>
    );
}

export default Heading;