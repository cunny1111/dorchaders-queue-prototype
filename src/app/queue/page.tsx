export default function QueuePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Modding Queue</h1>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
        <p className="text-yellow-800 dark:text-yellow-300">
          This page is under development. Soon you'll be able to see all requested maps here.
        </p>
      </div>
      
      {/* Placeholder for queue listing */}
      <div className="grid gap-6">
        <div className="h-32 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
        <div className="h-32 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
        <div className="h-32 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
} 