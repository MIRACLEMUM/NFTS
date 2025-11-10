import { BookOpen, X } from "lucide-react";

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resources = [
    {
      title: "Blog",
      desc: "Latest news and insights",
    },
    {
      title: "API Documentation",
      desc: "Developer resources",
    },
    {
      title: "Newsletter",
      desc: "Stay updated with news",
    },
    {
      title: "Help Center",
      desc: "Get help and support",
    },
    {
      title: "Community",
      desc: "Join our community",
    },
    {
      title: "Brand Assets",
      desc: "Official brand resources",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#1a1a1a] text-white w-[90%] max-w-3xl rounded-2xl border border-gray-700 shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600/20 p-2 rounded-lg">
              <BookOpen className="text-purple-500 w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold">Resources</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {resources.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-purple-500 mt-2">•</span>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;
