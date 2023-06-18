'use client';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ProtectedRoute } from '@/components/features/auth/ProtectedRoute';

// ログイン済みユーザにのみ表示するページ
// 今回は、マイページと記事の詳細ページに関して、ログインを要求します
const authRoutes = ['/mypage', '/articles/[id]'];

// children に型をつけています
const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const pathname = usePathname();

  // 認証情報取得中には、コンポーネントを表示させないようにしています
  if (session.status === 'loading') return null;
  console.log(pathname);
  return (
    <>
      {authRoutes.includes(pathname) ? (
        // もしも、現在のページが、ログインを要求するページだった場合
        // ログイン状況に応じて、ページを表示するか or ログイン画面へリダイレクトさせるかを判定します
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        // 現在のページが、ログインを要求しないページだった場合
        // 認証情報を調べる必要はないので、そのままページを表示させます
        children
      )}
    </>
  );
};

export default AuthWrapper;
