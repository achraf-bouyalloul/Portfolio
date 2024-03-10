const ParascolaireCard = ({ imagePath, altText, title, link, live }) => {
    return (
      <div className="border-2 border-gray-400 p-4 mt-4 md:m-4 rounded-3xl">
        <img className="rounded-3xl my-2" src={imagePath} alt={altText} />
        <h1 className="text-2xl my-2">{title}</h1>
        <div className="flex my-2">
          <button
            className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3"
            onClick={() => window.open(link, "_blank")}
          >
            view more 
          </button>
          <button
            className="border-2 shadow-lg w-1/2 border-gray-400 py-3 px-5 rounded-full m-3"
            onClick={() => window.open(live, "_blank")}
          >
            Facebook
          </button>
        </div>
      </div>
    );
  };
  
  export default ParascolaireCard;