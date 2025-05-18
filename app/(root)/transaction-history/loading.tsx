export default function Loading(){
    return (
        <div className="transactions">
            <div className="transactions-header mb-6">
                <div className="h-8 w-60 bg-gray-300 rounded animate-pulse mb-2" />
                <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="space-y-6">
                {/* Account Info */}
                <div className="transactions-account flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <div className="h-6 w-48 bg-gray-300 rounded animate-pulse" />
                        <div className="h-4 w-56 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="transactions-account-balance text-right">
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                        <div className="h-6 w-24 bg-gray-300 rounded animate-pulse" />
                    </div>
                </div>

                {/* Transactions Table Placeholder */}
                <section className="flex w-full flex-col gap-6">
                    <div className="space-y-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded animate-pulse">
                                <div className="h-4 w-48 bg-gray-300 rounded" />
                                <div className="h-4 w-24 bg-gray-200 rounded" />
                                <div className="h-4 w-16 bg-gray-300 rounded" />
                            </div>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="my-4 flex justify-center gap-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="h-8 w-8 bg-gray-300 rounded-full animate-pulse" />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}