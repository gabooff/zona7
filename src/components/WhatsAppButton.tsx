import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "56986306425"; // Número de ejemplo
  const message = "Hola, me gustaría más información sobre Zona 7";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
