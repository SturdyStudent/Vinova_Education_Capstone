export interface ICourseCard {
  brandName: string;
  smallLogo: string;
  avatar: string;
  courseTitle: string;
  duration: number;
  industry?: string;
  isArticle?: boolean;
  summary?: string;
  isEducationCourse?: boolean;
}

export enum LoadType {
  Pagination = "Pagination",
  Load_More = "Load_More",
  Infinity_Load = "Infinity_Load",
}
export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTrybe: boolean;
  acceptFintech: boolean;
  acceptSubscribe: boolean;
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

export interface IEventItem {
  isGroup?: boolean;
  memberAmount?: number;
  eventDate?: Date;
  organizationName: string;
  eventTitle?: string;
  smallLogo?: string;
  avatar: string;
}

export interface IArticleCard {
  avatar?: string;
  smallLogo?: string;
  brandName?: string;
  courseTitle?: string;
  duration?: number;
  isCourse?: boolean;
  industry?: string;
}
export interface ITabHandler {
  label: string;
  propsIndex: number;
}

type transacAction = "Send" | "Receive";
type currency = "EUR" | "USD";
type orderStatus = "Success" | "Failed";
export interface ITransactionInfo {
  orderDate: string;
  action: transacAction;
  amount: number;
  currency: currency;
  remarks?: string;
  orderStatus: orderStatus;
}

export interface IDrawerItem {
  label: string;
  icon: string;
}

export interface IInput {
  label?: string;
  type?: string;
  placeHolder?: string;
  haveDivider?: boolean;
  isSelect?: boolean;
  selectOptions?: Array<string>;
  value?: string | number | Date;
  onChange?: React.SetStateAction<any>;
}

export interface IUserInfo {
  username?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IProducts {
  id?: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  images: Array<string>;
  isDeleted?: boolean;
}

export interface ILimitProductResponse {
  limit: number;
  products: IProducts[];
  skip: number;
  total: number;
}

export const URL_PATH = {
  Login: "/login",
  Signup: "/signup",
  Dashboard: "/dashboard",
  Group: "/group",
  Member: "/member",
  Event: "/event",
  Education: "/education",
  Community: "/community",
};

export interface IPriceOption {
  from: number;
  to: number;
}
