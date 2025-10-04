import logo from '../../assets/Images/logo.png';
import type { LoaderProps } from '../../types';


export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
      <img
        src={logo}
        alt="loading"
        className="h-52 w-52 animate-float select-none object-contain drop-shadow-2xl"
      />
    </div>
  );
}
