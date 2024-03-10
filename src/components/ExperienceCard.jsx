import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ExperienceCard = ({ tech, expr }) => {
  return (
    <div className="flex p-2 m-2 items-center">
      <CheckCircleIcon fontSize="small" />
      <div className="mx-4 flex flex-col items-start">
        <h1 className="md:text-xl">{tech}</h1>
        <p className="text-gray-600 text-sm dark:text-gray-300">{expr}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
