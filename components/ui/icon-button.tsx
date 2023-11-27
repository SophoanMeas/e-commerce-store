import { cn } from "@/app/lib/utils";
import { MouseEventHandler } from "react"

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
  }
  
  const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className
  }) => {
    return ( 
      <button 
        onClick={onClick} 
        className={cn(
          'rounded-full flex items-center justify-center bg-green-100 opacity-80 shadow-md p-2 hover:scale-110 transition',
          className
        )}
      >
        {icon}
      </button>
     );
  }
  
  export default IconButton;