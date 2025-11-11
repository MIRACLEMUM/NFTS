import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#2E2E2E] text-white p-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="/newsletter.png"
          alt="Astronaut reading newspaper"
          className="w-full object-cover"
        />
      </div>

      {/* Text + Input Section */}
      <div className="flex flex-col items-start md:w-1/2 space-y-5 px-4">
        <h2 className="text-4xl font-extrabold">Join our weekly digest</h2>
        <p className="text-gray-300 text-lg">
          Get exclusive promotions & updates straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full bg-white rounded-full overflow-hidden mt-2 shadow-sm px-2 py-1"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#A855F7] hover:bg-[#9333EA] text-white font-semibold px-6 py-3 rounded-full transition-all"
          >
            <Mail className="w-5 h-5" />
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
