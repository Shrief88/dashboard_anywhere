const Home = () => {
  const storeToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="flex flex-col gap-5 items-center">
        <p className="font-bold text-4xl tracking-tighter">Coligo Profile</p>
        <a href="/dashboard">
          <button
            onClick={() => storeToken('admin')}
            className="px-8 py-3 rounded-full bg-blue-700 text-white text-xl tracking-widest"
          >
            Login to Coligo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
