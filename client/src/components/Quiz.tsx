import EventAvailableIcon from '@mui/icons-material/EventAvailable';
interface QuizProps {
  title: string;
  course: string;
  topic: string;
  due_to_day: Date;
  due_to_hour: number;
}

const Quiz = (props: QuizProps) => {
  const handleDate = () => {
    const date = new Date(props.due_to_day);
    const day = date.getDate() - 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className=" flex flex-col pb-4">
      <div className="flex items-center gap-3">
        <EventAvailableIcon />
        <p className="text-lg">{props.title}</p>
      </div>

      <p className="text-gray-400">Course : {props.course}</p>
      <p className="text-gray-400">Topic : {props.topic}</p>
      <p className="text-gray-400">Due to : {handleDate()}</p>
      <button className="w-40 border-2 mt-4 border-blue-800 px-9 py-1 rounded-lg hover:bg-blue-700 hover:text-white self-center">
        Start quiz
      </button>
    </div>
  );
};

export default Quiz;
