import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <ChatInterface />
      </div>
    </main>
  );
}
