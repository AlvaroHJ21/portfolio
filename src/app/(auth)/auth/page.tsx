export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-[90%] p-8 bg-gray-900 rounded-lg shadow-xl max-w-[400px]">
        <h1 className="mb-4 text-3xl">Login</h1>
        <form action="">
          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input type="text" className="w-full input input-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input type="password" className="w-full input input-sm" />
          </div>
          <button className="w-full btn btn-primary">Login</button>
        </form>
      </div>
    </main>
  );
}
