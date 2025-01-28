import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";
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
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Deep',
      };

      const result = await emailjs.send(
        'service_d4i0r2u',
        '__ejs-test-mail-service__',
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

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch with your customers to provide them with better service.
          You can modify the form fields to gather more precise information.
        </p>
        <div className="max-w-xl mx-auto">
          {notification.type && (
            <Alert
              className={`mb-6 ${
                notification.type === "success" ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <AlertTitle className="flex justify-between items-center">
                <span>
                  {notification.type === "success" ? "Success" : "Error"}
                </span>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
              />
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
              />
            </div>
            <div>
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
                placeholder="Your Question *"
                required
                className="min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;