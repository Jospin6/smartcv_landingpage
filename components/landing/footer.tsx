import Link from "next/link";
import { FileText, GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, HeartIcon } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Resume Builder", href: "#" },
      { name: "Cover Letter Generator", href: "#" },
      // { name: "Templates", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "Reviews", href: "#testimonials" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Career Advice", href: "#" },
  //     { name: "Resume Examples", href: "#" },
  //     { name: "Interview Tips", href: "#" },
  //     { name: "Blog", href: "#" },
  //     { name: "Help Center", href: "#" },
  //   ],
  // },
  // {
  //   title: "Company",
  //   links: [
  //     { name: "About Us", href: "#" },
  //     { name: "Careers", href: "#" },
  //     { name: "Contact", href: "#" },
  //     { name: "Privacy Policy", href: "#" },
  //     { name: "Terms of Service", href: "#" },
  //   ],
  // },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">SmartCV</span>
            </Link>
            <p className="text-gray-600 mb-6 dark:text-gray-300">
              Professional resume and cover letter builder that helps you land your dream job faster with AI-powered tools and expert-designed templates.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-700">
          <p className="text-gray-600 text-sm mb-4 md:mb-0 dark:text-gray-400">
            © {new Date().getFullYear()} SmartCV. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <HeartIcon className="h-4 w-4 text-red-500" />
            <span>by SmartCV Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}