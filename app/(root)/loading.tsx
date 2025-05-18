export default function Loading(){
    return (
        <section className="home">
            <div className="home-content w-full">
                {/* Header and TotalBalanceBox */}
                <header className="home-header mb-6 space-y-6">
                    {/* HeaderBox skeleton */}
                    <div className="space-y-2">
                        <div className="h-8 w-60 bg-gray-300 rounded animate-pulse" />
                        <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* TotalBalanceBox skeleton */}
                    <div className="flex gap-4 flex-wrap">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-64 h-24 bg-gray-100 rounded-lg animate-pulse"
                            />
                        ))}
                    </div>
                </header>

                {/* RecentTransactions skeleton */}
                <section className="space-y-4">
                    <div className="h-6 w-48 bg-gray-300 rounded animate-pulse" />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded animate-pulse"
                        >
                            <div className="h-4 w-40 bg-gray-300 rounded" />
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                            <div className="h-4 w-16 bg-gray-300 rounded" />
                        </div>
                    ))}
                </section>
            </div>

            {/* RightSidebar skeleton */}
            <aside className="right-sidebar space-y-6 pl-4 mt-10">
                {/* User info */}
                <div className="h-6 w-48 bg-gray-300 rounded animate-pulse" />
                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />

                {/* Recent banks/cards */}
                <div className="space-y-4">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-full h-20 bg-gray-100 rounded-lg animate-pulse"
                        />
                    ))}
                </div>
            </aside>
        </section>
    );
}