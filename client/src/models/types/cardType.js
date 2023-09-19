import { shape, string, arrayOf, oneOfType } from "prop-types";
import imageType from "./imageType";

const cardType = shape({
  _id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  review: string.isRequired,
  directedBy: string.isRequired,
  createdAt: string.isRequired,
  image: imageType.isRequired,
  user_id: string.isRequired,
  likes: arrayOf(string).isRequired,
  web: oneOfType([string]).isRequired,
});

export default cardType;