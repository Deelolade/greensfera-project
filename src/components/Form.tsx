import axios from 'axios';
import { HandHeart, Handshake, DollarSign, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';



const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Join our team of passionate individuals making a difference on the ground.',
    action: 'Become a Volunteer',
  },
  {
    icon: Handshake,
    title: 'Partner',
    description: 'Collaborate with us to scale impact and create sustainable solutions together.',
    action: 'Partner With Us',
  },
  {
    icon: DollarSign,
    title: 'Donate',
    description: 'Support our restoration projects, waste-reduction campaigns, and youth programs.',
    action: 'Make a Donation',
  },
];


const donationOptions = [
  { label: 'One-time', amount: '$50' },
  { label: 'Monthly', amount: '$25/mo' },
  { label: 'Sponsor a Project', amount: 'Custom' },
  { label: 'Corporate Partnership', amount: 'Custom' },
];
const form_access_key = import.meta.env.VITE_FORM_ACCESS_KEY;

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData();
    data.append('access_key', form_access_key);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("interest", formData.interest);
    data.append("message", formData.message)

    try {
      const res = await axios.post('https://api.web3forms.com/submit', data);

      console.log(res.data)
      if (res.data.success) {
        alert("Form submitted successfully!");
      } else {
        alert(`Failed:, ${res.data.message}`);
      }
    } catch (error) {
      alert("Submission error");
    }

  };
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-[#F2F0EA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0A3B2E] mb-6">Get Involved</h2>
          <div className="w-24 h-1 bg-[#009B4C] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in creating a sustainable future. Every action counts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#009B4C]/30 group text-center"
              >
                <div className="bg-[#C2F0D5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-[#009B4C]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A3B2E] mb-4">{way.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{way.description}</p>
                <button className="w-full bg-[#009B4C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#007A3D] transition-all">
                  {way.action}
                </button>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-[#0A3B2E] mb-8">Contact Us</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#0A3B2E] mb-2">Name</label>
                <input
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#009B4C] focus:ring-2 focus:ring-[#009B4C]/20 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A3B2E] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#009B4C] focus:ring-2 focus:ring-[#009B4C]/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A3B2E] mb-2">Phone</label>
                <input
                  type="tel"
                  name="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#009B4C] focus:ring-2 focus:ring-[#009B4C]/20 outline-none transition-all"
                  placeholder="+234"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A3B2E] mb-2">I'm interested in</label>
                <select
                  name='interest'
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#009B4C] focus:ring-2 focus:ring-[#009B4C]/20 outline-none transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partner">Partnership</option>
                  <option value="donate">Donation</option>
                  <option value="youth">Youth Programs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A3B2E] mb-2">Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#009B4C] focus:ring-2 focus:ring-[#009B4C]/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about your interest..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#009B4C] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#007A3D] transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Why Donate?</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Support restoration projects, waste-reduction campaigns, and youth innovation programs
                that create lasting environmental impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {donationOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className="text-sm font-medium mb-1">{option.label}</div>
                    <div className="text-2xl font-bold">{option.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6">
              <h3 className="text-2xl font-bold text-[#0A3B2E] mb-6">Contact Information</h3>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C2F0D5] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#009B4C]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A3B2E] mb-1">Email</div>
                  <a href="mailto:info@greensfera.com" className="text-gray-600 hover:text-[#009B4C] transition-colors">
                    info@greensfera.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C2F0D5] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#009B4C]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A3B2E] mb-1">Phone</div>
                  <p className="text-gray-600">+234 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C2F0D5] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#009B4C]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A3B2E] mb-1">Address</div>
                  <p className="text-gray-600">Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Form
