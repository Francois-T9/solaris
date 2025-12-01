import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function ContactInformation() {
  const { t } = useTranslation();
  const [copiedId, setCopiedId] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      setCopiedId("");
    }, 3000);
  }, [copiedId]);
  return (
    <div className="card bg-base-200 border-base-300 rounded-box  border p-4 h-1/2 w-">
      <h2 className="card-title text-2xl mb-4">{t("contact.info.title")}</h2>
      {/* 
      <div className="flex items-start gap-4 mb-4">
        <FaMapMarkerAlt className="text-primary text-xl mt-1" />
        <div>
          <h3 className="font-semibold">Global Headquarters</h3>
          <p>123 Innovation Boulevard</p>
          <p>San Francisco, CA 94107</p>
        </div>
      </div> */}
      <div className="flex items-start gap-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <div>
          <h3 className="font-semibold">Email</h3>

          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-xl">
              solarisenergysolutions.mx@gmail.com
            </p>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(
                  "solarisenergysolutions.mx@gmail.com"
                );
                setCopiedId("write-text");
              }}
              className="btn btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <div>
          <h3 className="font-semibold">{t("contact.info.phone")}</h3>
          <p className="text-xs sm:text-xl">+52 7778311043 / 9381190203</p>
        </div>
      </div>

      {/* <div className="flex items-start gap-4">
        <FaClock className="text-primary text-xl mt-1" />
        <div>
          <h3 className="font-semibold">Office Hours</h3>
          <p>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: By Appointment</p>
        </div>
      </div> */}
    </div>
  );
}

export default ContactInformation;
