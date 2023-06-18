'use client';
type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const LoginButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className='group relative inline-flex items-center justify-start overflow-hidden rounded bg-white px-6 py-3 font-medium transition-all hover:bg-white'
      // このボタンを押すと GitHub による認証が行われます
      // また、認証後のリダイレクト先をルートパスに設定しています
      // リダイレクト先については後ほど変更します
      onClick={onClick}
    >
      <span
        className='absolute bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg]
      rounded bg-slate-800 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'
      ></span>
      <span className='relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
        {/* Sign in with {provider.name} */}
        {children}
      </span>
    </button>
  );
};
