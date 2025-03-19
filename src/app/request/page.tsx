export default function RequestPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Submit a Map Request</h1>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
        <p className="text-yellow-800 dark:text-yellow-300">
          This page is under development. Soon you'll be able to submit your maps for modding here.
        </p>
      </div>
      
      {/* Placeholder for request form */}
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div className="h-10 w-full bg-neutral-100 dark:bg-neutral-700 rounded animate-pulse"></div>
          <div className="h-10 w-full bg-neutral-100 dark:bg-neutral-700 rounded animate-pulse"></div>
          <div className="h-32 w-full bg-neutral-100 dark:bg-neutral-700 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-purple-100 dark:bg-purple-900/30 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 