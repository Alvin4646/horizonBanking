export default function Loading(){
    return (
        <section className="payment-transfer">
            {/* HeaderBox skeleton */}
            <div className="mb-6">
                <div className="h-8 w-60 bg-gray-300 rounded animate-pulse mb-2" />
                <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* PaymentTransferForm skeleton */}
            <section className="size-full pt-5 space-y-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                        <div className="h-4 w-40 bg-gray-300 rounded animate-pulse" />
                        <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                    </div>
                ))}

                <div className="h-12 w-40 bg-gray-300 rounded animate-pulse mt-4" />
            </section>
        </section>
    );
}