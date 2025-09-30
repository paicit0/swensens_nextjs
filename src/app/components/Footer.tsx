// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 lg:flex-row lg:justify-between lg:px-8">
        {/* Logo and Links Container */}
        <div className="flex w-full flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          {/* Logo */}
          <div className="self-start text-2xl font-bold mb-6 lg:mb-0">
            SWENSEN'S
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-start justify-start gap-x-6 gap-y-3 mb-6 lg:mb-0 lg:flex-row lg:justify-end">
            {[
              "เกี่ยวกับเรา",
              "สินค้าของเรา",
              "บัตรของขวัญ",
              "คำถามที่พบบ่อย",
              "ข้อกำหนดในการใช้งาน",
              "นโยบายความเป็นส่วนตัว",
            ].map((link) => (
              <a key={link} href="#" className="text-sm hover:text-gray-300">
                {link}
              </a>
            ))}
          </div>

          {/* Social & App Store Links */}
          <div className="flex flex-row gap-3 items-center lg:items-end lg:flex-row lg:gap-x-4">
            <div className="flex space-x-2">
              {/* Placeholder for social icons (e.g., Font Awesome) */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-white"></div>
              ))}
            </div>
            <div className="flex space-x-2">
              {/* Placeholder for app store badges */}
              <div className="h-8 w-28 rounded bg-white"></div>
              <div className="h-8 w-28 rounded bg-white"></div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="self-start text-sm text-white">
          Copyright © Swensen1112.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
