import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch with your customers to provide them with better service. You can modify
          the form fields to gather more precise information.
        </p>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input placeholder="Your Name *" required />
            </div>
            <div>
              <Input type="tel" placeholder="Phone Number" defaultValue="+91" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email *" required />
            </div>
            <div>
              <Input placeholder="Your Company" />
            </div>
            <div>
              <Input placeholder="Subject *" required />
            </div>
            <div>
              <Textarea placeholder="Your Question *" required className="min-h-[100px]" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
