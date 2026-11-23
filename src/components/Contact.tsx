import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import SectionTitle from "./SectionTitle";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const { toast } = useToast();
  
  useEffect(() => {
    emailjs.init("uRre9hqR56qq3VWUr");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "+91",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: 'Deep',
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        company_name: formData.company,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(
        'service_d4i0r2u',
        'template_vi5s5jh',
        templateParams
      );

      if (result.status === 200) {
        setNotification({
          type: "success",
          message: "Message sent! We'll get back to you as soon as possible.",
        });
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          phone: "+91",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setNotification({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const info = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: Linkedin, label: "LinkedIn", value: "deep-ratanpara", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "Teamd3p", href: profile.github },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="py-14 md:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle eyebrow="Open to backend roles & collaborations" title="Let's Connect" />
        <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8">
          <div className="space-y-3">
            <p className="text-gray-600 mb-4">
              Hiring for a backend role, or have an idea you want to build? Drop a message and I'll reply within a day or two.
            </p>
            {info.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-gray-400">{label}</span>
                    <span className="block text-gray-800 truncate">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:border-primary/50 transition-colors"
                >
                  {body}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  {body}
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl border p-5 md:p-6">
          {notification.type && (
            <Alert className={`mb-4 ${notification.type === "success" ? "bg-green-50" : "bg-red-50"}`}>
              <AlertTitle className="flex justify-between items-center">
                <span>{notification.type === "success" ? "Success" : "Error"}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setNotification({ type: null, message: "" })}
                  className="h-4 w-4 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </AlertTitle>
              <AlertDescription>{notification.message}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
              />
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
              />
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>
            <div>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                required
                className="min-h-[150px] md:min-h-[190px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
