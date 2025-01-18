import { Check } from "lucide-react";

const LearningAndAchievement = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-2">What I Know</p>
          <h2 className="text-3xl font-semibold">Learning and Achievement</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Learning Path Column */}
          <div className="bg-opacity-20 bg-gray-700 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Information Assurance Learning Path
            </h3>
            <ul className="space-y-4">
              {[
                "Security fundamentals (CIA Triad, Risk Management, Security Policies)",
                "Open Source Platform and Network Administration",
                "Cryptography (AES, RSA, Hashing, Digital Signatures)",
                "Web Security",
                "Network security (Firewalls, IDS/IPS, VPNs, TLS/SSL)",
                "Ethical Hacking and Offensive Security",
                "Secure coding (OWASP Top 10, SAST & DAST, DevSecOps)",
                "Cybersecurity research & innovation "
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements Column */}
          <div className="bg-opacity-20 bg-gray-700 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Achieve
            </h3>
            <ul className="space-y-4">
              {[
                "Pre Security Course Certificate on TryHackMe",
                "Networking Essentials Course Certificate on Cisco",
                "Web Design for Everybody Course Certificate on Coursera",
                "Python For Everybody Course Certificate on Coursera",
                "Ethical Hacking for Beginners Course Certificate on SimpliLearn",
                "Cybersecurity Foundations Course Certificate on LinkedIn"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Platform Column */}
          <div className="bg-opacity-20 bg-gray-700 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Research Platform
            </h3>
            <ul className="space-y-4">
              {[
                "Windows 7, 8 and 10",
                "Windows Server 2012 r2",
                "Kali Linux",
                "Ubuntu",
                "BackTrack"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningAndAchievement;
