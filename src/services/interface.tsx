export interface ICourseCard {
  brandName: string;
  smallLogo: string;
  avatar: string;
  courseTitle: string;
  duration: number;
  isArticle?: boolean;
  summary?: string;
  isEducationCourse?: boolean;
}
export interface IMemberCard {
  backgroundPanel?: string;
  profilePic?: string;
  memberName?: string;
  companyName?: string;
  industry?: string;
}
export interface ICommunityCard {
  logo?: string;
  communityName?: string;
}
export interface IEventCard {
  avatar?: string;
  smallLogo?: string;
  brandName?: string;
  courseTitle?: string;
  date?: Date;
  from?: string;
  to?: string;
}
