const FeatureCard = ({
  step,
  title,
  subtitle,
  description,
  items,
  backgroundPattern,
  index,
}) => {
  // Function to get the background image based on the index since we can't use tailwindcss dynamic classes
  const getStepBackground = (i) => {
    switch (i) {
      case 0:
        return "url('/images/3 Reason/Step 1 Customize/Icons/Step 1.svg')";
      case 1:
        return "url('/images/3 Reason/Step 2 Collaborate/Icons/Step 2.svg')";
      case 2:
        return "url('/images/3 Reason/Step 3 Study Smarter/Icons/Step 3.svg')";
      default:
        return "none";
    }
  };
  return (
    <div
      className={`flex flex-col md:flex-row justify-between p-10 rounded-3xl bg-no-repeat bg-[#f2f9ff] h-[600px] gap-20 overflow-hidden outline-9 outline-[#e2eff9] outline-solid`}
      style={{
        backgroundImage: getStepBackground(index),
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content */}
      <div className="max-w-lg space-y-4 flex justify-center flex-col">
        <div className="flex items-center gap-2">
          <img src={step} alt={`Step ${title}`} className="w-15 h-15" />
          <span className="text-6xl font-bold bg-gradient-to-r from-[#2C9CE2] to-[#BFADF2] bg-clip-text text-transparent">
            {title}
          </span>
        </div>
        <p className="text-4xl font-bold text-[#0B0F19]">{subtitle}</p>
        <p className="text-gray-600 font-normal text-2xl">{description}</p>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {items.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-sm text-center space-y-2"
            >
              <img src={icon} alt={title} className="mx-auto h-6 mb-2" />
              <p className="font-bold text-lg">{title}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content (empty preview box) */}
      <div className="hidden md:block w-[60%] bg-white rounded-2xl shadow-inner outline-2 outline-[#e2eff9] outline-solid translate-x-20"></div>
    </div>
  );
};

export default FeatureCard;
