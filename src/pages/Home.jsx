function Home() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        <h1 className="text-5xl font-bold">Get ahead, stay ahead</h1>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            className="bg-orange-600 hover:bg-orange-500 px-8 py-6 rounded text-lg font-semibold shadow"
          >
            I'm a shipper
          </a>
          <a
            href="#"
            className="bg-orange-600 hover:bg-orange-500 px-8 py-6 rounded text-lg font-semibold shadow"
          >
            I'm a carrier
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
