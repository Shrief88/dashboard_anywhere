export interface IInstructor {
  id: number;
  first_name: string;
  family_name: string;
  position: string;
  photoUrl: string;
  Gender: string;
}

export interface IAnnouncement {
  content: string;
  instructor: string;
}

export interface IQuiz {
  title: string;
  course: string;
  topic: string;
  due_to_day: Date;
  due_to_hour: number;
}
