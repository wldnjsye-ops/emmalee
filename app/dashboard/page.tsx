'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/auth-context';
import DashboardNavbar from '@/components/dashboard/navbar';
import PromptArea from '@/components/dashboard/prompt-area';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/auth');
    }
  }, [isLoading, user, router]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut();
    setIsSigningOut(false);
    router.replace('/auth');
  };

  if (isLoading) {
    return <div style={{ minHeight: '100vh', background: '#181818' }} />;
  }

  if (!user) {
    return null;
  }

  return (
    <main className="dashboard-page">
      <DashboardNavbar user={user} isSigningOut={isSigningOut} onSignOut={handleSignOut} />

      <div className="center-stage">
        <PromptArea />
      </div>

      <style jsx>{`
        .dashboard-page {
          min-height: 100vh;
          background-color: #181818;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        .center-stage {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 96px 20px 20px;
        }
      `}</style>
    </main>
  );
}
