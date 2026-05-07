<div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">

    <div className="w-full max-w-sm bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl p-6">

        {/* heading */}
        <div className="text-center mb-6">

            <h1 className="text-3xl font-bold text-white">
                Login
            </h1>

            <p className="text-gray-400 mt-2 text-sm">
                Welcome back to your account
            </p>

        </div>

        {/* form */}
        <form onSubmit={handleLoginUser} className="space-y-4">

            {/* email */}
            <div>

                <label className="text-sm text-gray-300 font-medium">
                    Email
                </label>

                <input
                    type="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full mt-2 px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                />

            </div>

            {/* password */}
            <div>

                <label className="text-sm text-gray-300 font-medium">
                    Password
                </label>

                <div className="relative mt-2">

                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={passwordValue}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 duration-300"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-3 text-sm text-orange-400 font-medium"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>

                </div>

            </div>

            {/* remember + forgot */}
            <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2 text-gray-400">

                    <input
                        type="checkbox"
                        className="checkbox checkbox-warning checkbox-xs"
                    />

                    Remember

                </label>

                <p
                    onClick={handlePasswordUpdate}
                    className="text-orange-400 cursor-pointer hover:underline"
                >
                    Forgot?
                </p>

            </div>

            {/* login button */}
            <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold hover:scale-[1.02] duration-300 shadow-lg"
            >
                Login
            </button>

            {/* divider */}
            <div className="flex items-center gap-3">

                <div className="flex-1 h-[1px] bg-gray-700"></div>

                <p className="text-gray-400 text-sm">
                    OR
                </p>

                <div className="flex-1 h-[1px] bg-gray-700"></div>

            </div>

            {/* google login */}
            <button
                onClick={handeGoogleLogin}
                type="button"
                className="w-full py-3 rounded-xl bg-[#1f2937] hover:bg-[#273548] duration-300 border border-gray-700 text-white font-medium flex items-center justify-center gap-3"
            >

                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="google"
                    className="w-5 h-5"
                />

                Continue with Google

            </button>

        </form>

        {/* register */}
        <p className="text-center text-gray-400 text-sm mt-6">

            Don’t have an account?

            <Link
                to={'/auth/registation'}
                className="text-orange-400 font-semibold ml-2 hover:underline"
            >
                Register
            </Link>

        </p>

    </div>

</div>
