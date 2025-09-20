// components/PortfolioItem.tsx
import type { PortfolioItem } from "../app/lib/types";

interface PortfolioItemProps {
  item: PortfolioItem;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div className="bg-[#444] border border-[#666] h-20 w-20 flex items-center justify-center text-center">
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.name}
      </a>
    </div>
  );
};

export default PortfolioItem;
