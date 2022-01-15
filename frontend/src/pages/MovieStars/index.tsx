import { ReactComponent as StarEmpty } from "../../assets/images/star-empty.svg";
import { ReactComponent as StarFull } from "../../assets/images/star-full.svg";
import { ReactComponent as StarHalf } from "../../assets/images/star-half.svg";
import getFills from "../../utils/getFills";
import "./styles.css";

type StarProps = {
  fill: number;
};

type Props = {
  score: number;
};

function Star({ fill }: StarProps) {
  return fill === 0 ? <StarEmpty /> : fill === 1 ? <StarFull /> : <StarHalf />;
}

export default function MovieStars({ score }: Props) {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
}
