import type { ReactElement, ReactNode, Ref } from "react";

type CardSwapItem = {
  title?: string;
  image?: string;
  alt?: string;
  icon?: ReactNode;
};

type CardSwapProps = {
  items?: CardSwapItem[];
  children?: ReactNode;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  depth?: number;
  skewAmount?: number;
  visibleCards?: number;
  delay?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  speed?: number;
  bounce?: number;
  parallax?: number;
  hoverSpread?: number;
  dim?: number;
  cardRadius?: number;
  intro?: boolean;
  theme?: "dark" | "light";
  onCardClick?: (index: number) => void;
  onChange?: (index: number) => void;
  ariaLabel?: string;
  className?: string;
  ref?: Ref<unknown>;
};

declare function CardSwap(props: CardSwapProps): ReactElement;
export default CardSwap;
