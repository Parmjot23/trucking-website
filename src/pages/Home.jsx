function Home() {
  return (
    <section className="h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="text-center bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl font-bold text-white mb-4">Reliable Trucking Services</h1>
        <a href="/services" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Our Services</a>
      </div>
    </section>
  );
}

export default Home;
