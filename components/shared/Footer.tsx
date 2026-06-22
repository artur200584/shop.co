import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const footerLinks = [
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Features", href: "/features" },
      { label: "Works", href: "/works" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Customer Support", href: "/support" },
      { label: "Delivery Details", href: "/delivery" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { label: "Account", href: "/account" },
      { label: "Manage Deliveries", href: "/deliveries" },
      { label: "Orders", href: "/orders" },
      { label: "Payments", href: "/payments" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Free eBooks", href: "/ebooks" },
      { label: "Development Tutorial", href: "/tutorials" },
      { label: "How to - Blog", href: "/blog" },
      { label: "YouTube Playlist", href: "/youtube" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">SHOP.CO</h2>
        <p>
          We have clothes that suits your style and <br /> which you’re proud to
          wear. From women to men.
        </p>
        <div className="flex gap-5">
          <FontAwesomeIcon icon={faTwitter} className="size-5 text-black" />
          <FontAwesomeIcon icon={faFacebook} className="size-5 text-black" />
          <FontAwesomeIcon icon={faInstagram} className="size-5 text-black" />
          <FontAwesomeIcon icon={faGithub} className="size-5 text-black" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>

            <div className="flex flex-col gap-3">
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex
                  flex-col
                   text-gray-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
