export default function Loading() {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <div className="auth-form w-full max-w-xl space-y-8 animate-pulse">
                {/* Logo & Title */}
                <div className="space-y-4">
                    <div className="h-10 w-32 bg-gray-300 rounded" />
                    <div className="h-6 w-48 bg-gray-200 rounded" />
                    <div className="h-4 w-64 bg-gray-100 rounded" />
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    {/* First & Last Name */}
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded" />
                            <div className="h-10 w-full bg-gray-200 rounded" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-24 bg-gray-300 rounded" />
                            <div className="h-10 w-full bg-gray-200 rounded" />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded" />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                        <div className="h-4 w-16 bg-gray-300 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded" />
                    </div>

                    {/* State & Postal Code */}
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-16 bg-gray-300 rounded" />
                            <div className="h-10 w-full bg-gray-200 rounded" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-28 bg-gray-300 rounded" />
                            <div className="h-10 w-full bg-gray-200 rounded" />
                        </div>
                    </div>

                    {/* DOB & SSN */}
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-28 bg-gray-300 rounded" />
                            <div className="h-10 w-full bg-gray-200 rounded" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 w-16 bg-gray-300 rounded" />
                            <div className="h-10 w-full bg-gray-200 rounded" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded" />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="h-10 w-full bg-gray-300 rounded" />

                {/* Footer */}
                <div className="flex justify-center gap-2 pt-2">
                    <div className="h-4 w-48 bg-gray-200 rounded" />
                    <div className="h-4 w-20 bg-gray-300 rounded" />
                </div>
            </div>
        </section>
    );
}