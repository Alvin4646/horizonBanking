export default function Loading(){
    return (
        <section className='flex'>
            <div className="my-banks w-full">
                <div className="mb-6">
                    <div className="h-8 w-48 bg-gray-300 rounded animate-pulse mb-2" />
                    <div className="h-4 w-72 bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="space-y-4">
                    <div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />

                    <div className="flex flex-wrap gap-6">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-72 h-40 bg-gray-200 rounded-lg animate-pulse"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}