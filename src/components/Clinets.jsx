const clients = [
  "Client A",
  "Client B",
  "Client C",
  "Client D",
  "Client E",
];

export default function Clients() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">Successful Clients</h2>
      <div className="flex flex-wrap justify-center gap-10 text-gray-300">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg px-6 py-4 shadow-md hover:bg-gray-700 transition cursor-default"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
