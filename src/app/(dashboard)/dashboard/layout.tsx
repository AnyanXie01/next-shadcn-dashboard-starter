import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import { ScrollArea } from '@/components/ui/scroll-area';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        {/* <Sidebar /> */}
        <main className="flex-1 overflow-hidden pt-16">
          <ScrollArea className="h-full">{children}</ScrollArea>
        </main>
      </div>
    </>
  );
}
