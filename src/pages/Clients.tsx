import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CTASection } from "../components/sections/CTASection";

const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  // Ensure we don't have double slashes
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

const discreteClients = [
  getImageUrl(
    "/media/images/clients/Discrete manufacturing/renault-nissan-logo.jpg",
  ),
  getImageUrl(
    "/media/images/clients/Discrete manufacturing/L_and_T_Infotech.png",
  ),
  getImageUrl(
    "/media/images/clients/Discrete manufacturing/Saint-Gobain-Logo.jpg",
  ),
  getImageUrl("/media/images/clients/Discrete manufacturing/praxair.png"),
  getImageUrl("/media/images/clients/Discrete manufacturing/pernod-ricard.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/lucas.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/SL_lumax.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/kanishk_group.png"),
];

const logisticsClients = [
  getImageUrl("/media/images/clients/logistics logo/Nippon_Express.jpg"),
  getImageUrl(
    "/media/images/clients/logistics logo/Balmer-Lawrie-Logistics.png",
  ),
  getImageUrl("/media/images/clients/logistics logo/concor.png"),
  getImageUrl("/media/images/clients/logistics logo/Hyundai_Glovis.png"),
  getImageUrl("/media/images/clients/logistics logo/ilfs.png"),
  getImageUrl("/media/images/clients/logistics logo/transportation.png"),
  getImageUrl("/media/images/clients/logistics logo/APM-TERMINALS.jpg"),
  getImageUrl("/media/images/clients/logistics logo/yusen.png"),
  getImageUrl("/media/images/clients/logistics logo/sgl_logo.png"),
  getImageUrl("/media/images/clients/logistics logo/iriway.png"),
  getImageUrl(
    "/media/images/clients/logistics logo/eastern_and_central_community_trust.png",
  ),
];

const majorClients = [
  getImageUrl("/media/images/clients/major/Zeven_Logo-602897687.jpg"),
  getImageUrl("/media/images/clients/major/raymond-logo.png"),
  getImageUrl("/media/images/clients/major/Landmark-Group1.png"),
  getImageUrl("/media/images/clients/major/thelogisticshub.png"),
  getImageUrl("/media/images/clients/major/sttva.png"),
  getImageUrl("/media/images/clients/major/stp.png"),
  getImageUrl("/media/images/clients/major/allcargo.png"),
  getImageUrl("/media/images/clients/major/vishrutha.png"),
  getImageUrl("/media/images/clients/major/lalaji.png"),
  getImageUrl("/media/images/clients/major/afcons.png"),
  getImageUrl("/media/images/clients/major/punj.png"),
  getImageUrl("/media/images/clients/major/nectarsys.png"),
  getImageUrl("/media/images/clients/major/healthium.png"),
  getImageUrl("/media/images/clients/major/sanco.png"),
  getImageUrl("/media/images/clients/major/sical.png"),
  getImageUrl("/media/images/clients/major/indoarya.png"),
  getImageUrl("/media/images/clients/major/DRL.png"),
  getImageUrl("/media/images/clients/major/is.png"),
];

const categories = [
  { title: "Major Clients", clients: majorClients },
  { title: "Discrete Manufacturing", clients: discreteClients },
  { title: "Logistics Services", clients: logisticsClients },
];

export function ClientsPage() {
  useDocumentMeta(
    "Our Clients | Audex",
    "Trusted by industry leaders in logistics and discrete manufacturing.",
  );

  return (
    <div className="bg-white text-deepsea">
      {/* ── Hero ── */}
      <section className="bg-[#F7F8FC] border-b border-deepsea/5 pt-32 pb-24 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-deepsea/10 bg-white px-4 py-1.5 shadow-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-blue)]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue">
              Partners in Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-8 max-w-4xl mx-auto font-display text-[42px] font-light leading-tight tracking-[-0.04em] text-deepsea sm:text-[56px] lg:text-[72px]"
          >
            Our{" "}
            <span className="font-bold text-[var(--color-blue)]">Clients</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl mx-auto text-[17px] leading-8 text-deepsea/80"
          >
            We empower global industry leaders with robust, intelligent
            logistics solutions, driving operational excellence across multiple
            sectors.
          </motion.p>
        </Container>
      </section>

      {/* ── Client Categories ── */}
      <section className="py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-3">
            {categories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                {/* Category Header (styled to match the premium dark look requested) */}
                <div className="bg-deepsea text-white py-4 px-6 rounded-t-[2px] shadow-sm text-center">
                  <h3 className="font-display text-[18px] font-bold tracking-[0.02em]">
                    {category.title}
                  </h3>
                </div>

                {/* Clients Grid (styled beautifully with a subtle minty/light-blue background to echo the provided design but keeping it premium) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 bg-[#f0f9f6] border border-deepsea/5 rounded-b-[2px] shadow-inner">
                  {category.clients.map((logo, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="flex items-center justify-center p-6 bg-white rounded shadow-sm border border-deepsea/5 transition-all duration-300 hover:shadow-md h-32"
                    >
                      <img
                        src={logo}
                        alt="Client logo"
                        className="max-h-20 w-auto object-contain mix-blend-multiply opacity-90 transition-opacity hover:opacity-100"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Join Our Network"
        title="Transform Your Logistics Operations."
        description="Partner with Audex and elevate your supply chain to the next level."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </div>
  );
}
