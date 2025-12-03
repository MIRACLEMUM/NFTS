import { BookOpen, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; // ✅ added theme support

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  const { darkMode } = useTheme(); // ✅ get darkMode from context

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
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 ${
        darkMode ? "bg-black/60" : "bg-white/60"
      }`}
    >
      <div
        className={`w-[90%] max-w-3xl rounded-2xl border shadow-2xl animate-fadeIn ${
          darkMode ? "bg-[#1a1a1a] text-white border-gray-700" : "bg-white text-black border-gray-300"
        }`}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center p-5 border-b ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-purple-600/20 p-2 rounded-lg">
              <BookOpen className="text-purple-500 w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold">Resources</h2>
          </div>
          <button
            onClick={onClose}
            className={`transition ${
              darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
            }`}
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
                <h3 className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>
                  {item.title}
                </h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;
