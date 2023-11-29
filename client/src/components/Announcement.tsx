interface AnnouncementProps {
  first_name: string;
  family_name: string;
  Gender: string;
  position: string;
  content: string;
  photoUrl: string;
}

const Announcement = (props: AnnouncementProps) => {
  return (
    <div className="grid grid-col-1 xl:grid-cols-4 gap-2">
      <div className="flex gap-4 items-center col-span-1">
        <div>
          <img
            src={`http://localhost:8000${props.photoUrl}`}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p>
            {props.Gender === 'male' ? 'Mr. ' : 'Ms. '}
            {props.first_name} {props.family_name}
          </p>
          <p className="text-gray-400">{props.position}</p>
        </div>
      </div>
      <div className="xl:col-span-3">{props.content}</div>
    </div>
  );
};

export default Announcement;
