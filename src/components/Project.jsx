

export default function Project({ data }) {
    return (

        <a
            href={data.url}
            target='_blank'
            rel="noreferrer"
            key={data.image}
            className='sm:w-1/2 w-100 p-4' 
        >
            <div className="flex relative">
                <img
                    alt="gallery"
                    className="absolute" id="proj-img"
                    src={data.image}
                />
                <div className="relative">
                    <h1 className='title'>
                        {data.title}
                    </h1>
                    <p className='descr'>{data.descr}</p>
                </div>
            </div>
        </a>
    );
}