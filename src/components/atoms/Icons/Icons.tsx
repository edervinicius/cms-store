import {
  BsTrash,
  BsCaretRight,
  BsCaretLeft,
  BsChevronRight,
  BsChevronLeft,
  BsTags,
  BsArrowRight,
  BsArrowLeft,
  BsCart,
  BsStarHalf,
  BsFillStarFill,
} from "react-icons/bs";
import { BiStore, BiHome, BiUser, BiDollar } from "react-icons/bi";

export const IconRemove = ({ ...props }) => <BsTrash {...props} />;
export const IconArrowRight = ({ ...props }) => <BsArrowRight {...props} />;
export const IconArrowLeft = ({ ...props }) => <BsArrowLeft {...props} />;
export const IconCaretRight = ({ ...props }) => <BsCaretRight {...props} />;
export const IconCaretLeft = ({ ...props }) => <BsCaretLeft {...props} />;
export const IconChevronRight = ({ ...props }) => <BsChevronRight {...props} />;
export const IconChevronLeft = ({ ...props }) => <BsChevronLeft {...props} />;
export const IconTags = ({ ...props }) => <BsTags {...props} />;
export const IconStore = ({ ...props }) => <BiStore {...props} />;
export const IconHome = ({ ...props }) => <BiHome {...props} />;
export const IconUser = ({ ...props }) => <BiUser {...props} />;
export const IconCart = ({ ...props }) => <BsCart {...props} />;
export const IconMoney = ({ ...props }) => <BiDollar {...props} />;
export const IconStar = ({ ...props }) => <BsFillStarFill {...props} />;
export const IconStarHalf = ({ ...props }) => <BsStarHalf {...props} />;
