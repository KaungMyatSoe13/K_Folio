const contactInfo = [
  {
    label: "EMAIL:",
    value: "your.email@example.com",
    breakAll: true,
  },
  {
    label: "GITHUB:",
    value: "@yourusername",
  },
  {
    label: "LINKEDIN:",
    value: "/in/yourprofile",
  },
];

export default function ContactSection() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 text-center">
      <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4 font-bold">
        CONTACT ME
      </h3>
      <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="border border-gray-600 p-2 sm:p-3 hover:bg-gray-800 transition-colors"
          >
            <div className="text-cyan-400 font-bold text-xs sm:text-sm">
              {contact.label}
            </div>
            <div
              className={`text-xs sm:text-sm ${
                contact.breakAll ? "break-all" : ""
              }`}
            >
              {contact.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
