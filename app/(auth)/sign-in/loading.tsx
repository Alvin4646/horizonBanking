export default function Loading() {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <div className="auth-form w-full max-w-md space-y-8 animate-pulse">
                {/* Logo & Title */}
                <div className="space-y-4">
                    <div className="h-10 w-32 bg-gray-300 rounded" />
                    <div className="h-6 w-48 bg-gray-200 rounded" />
                    <div className="h-4 w-64 bg-gray-100 rounded" />
                </div>

                {/* Email & Password Fields */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="h-10 w-full bg-gray-300 rounded" />

                {/* Footer */}
                <div className="flex justify-center gap-2 pt-2">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                    <div className="h-4 w-20 bg-gray-300 rounded" />
                </div>
            </div>
        </section>
    );
}