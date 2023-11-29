const Quiz = () => {
  return (
    <div className="flex flex-col">
      <p>[Quiz Title]</p>
      <p>Course : [Quiz Course]</p>
      <p>Topic : [Quiz Topic]</p>
      <p>Due to [Quiz Time]</p>
      <button className="border-2 border-blue-800 px-9 py-1 rounded-lg hover:bg-blue-800 hover:text-white">
        Start quiz
      </button>
    </div>
  );
};

export default Quiz;
