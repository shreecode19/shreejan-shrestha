import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shresthashreejan20@gmail.com",
    href: "mailto:shresthashreejan20@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9803509224",
    href: "tel:+9803509224",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Samakhusi, Kathmandu",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);

      toast({
        title: "Failed to send message",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
      <section id="contact" className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">
              Contact
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background p-8 rounded-2xl shadow-elegant"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-card border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email
                  </Label>
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-card border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="bg-card border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button
                    variant="hero"
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={isSending}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Get in Touch
              </h3>
              <div className="w-16 h-1 bg-primary rounded-full mb-8" />

              <div className="space-y-6">
                {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 group">
                      <div className="w-1 h-8 bg-primary rounded-full" />
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                    <span className="block text-sm text-muted-foreground font-medium">
                      {item.label}
                    </span>
                        {item.href ? (
                            <a
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                        ) : (
                            <span className="text-foreground font-medium">
                        {item.value}
                      </span>
                        )}
                      </div>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;