const Announcement = () => {
  return (
    <div className="flex items-center">
      <div className="flex border-r-2 pr-4">
        <div></div>
        <div className="flex flex-col">
          <p>[Instructor Name]</p>
          <p>Instructor Position</p>
        </div>
      </div>
      <div className="pl-3">[Announcement Text]</div>
    </div>
  );
};

export default Announcement;
