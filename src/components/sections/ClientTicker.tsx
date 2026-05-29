import { motion } from 'framer-motion'

const getImageUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

const allClients = [
  // Major clients
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
  // Discrete manufacturing
  getImageUrl("/media/images/clients/Discrete manufacturing/renault-nissan-logo.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/L_and_T_Infotech.png"),
  getImageUrl("/media/images/clients/Discrete manufacturing/Saint-Gobain-Logo.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/praxair.png"),
  getImageUrl("/media/images/clients/Discrete manufacturing/pernod-ricard.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/lucas.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/SL_lumax.jpg"),
  getImageUrl("/media/images/clients/Discrete manufacturing/kanishk_group.png"),
  // Logistics
  getImageUrl("/media/images/clients/logistics logo/Nippon_Express.jpg"),
  getImageUrl("/media/images/clients/logistics logo/Balmer-Lawrie-Logistics.png"),
  getImageUrl("/media/images/clients/logistics logo/concor.png"),
  getImageUrl("/media/images/clients/logistics logo/Hyundai_Glovis.png"),
  getImageUrl("/media/images/clients/logistics logo/ilfs.png"),
  getImageUrl("/media/images/clients/logistics logo/transportation.png"),
  getImageUrl("/media/images/clients/logistics logo/APM-TERMINALS.jpg"),
  getImageUrl("/media/images/clients/logistics logo/yusen.png"),
  getImageUrl("/media/images/clients/logistics logo/sgl_logo.png"),
  getImageUrl("/media/images/clients/logistics logo/iriway.png"),
  getImageUrl("/media/images/clients/logistics logo/eastern_and_central_community_trust.png"),
];

// Partition client logos
const row1 = allClients.slice(0, 19);
const row2 = allClients.slice(19);

// Duplicate arrays for seamless looping scroll
const row1Items = [...row1, ...row1];
const row2Items = [...row2, ...row2];

export function ClientTicker() {
  return (
    <section className="relative bg-white border-b border-deepsea/6 py-20 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#060B3403_1px,transparent_1px),linear-gradient(to_bottom,#060B3403_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-10 bg-deepsea/15" />
          <span className="font-mono text-[10px] tracking-[0.15em] text-blue font-semibold uppercase">
            Trusted By Industry Leaders
          </span>
          <div className="h-px w-10 bg-deepsea/15" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-[28px] md:text-[36px] font-light tracking-tight text-deepsea leading-[1.1]"
        >
          Clients Served{" "}
          <span className="font-bold text-blue">Till Now</span>
        </motion.h2>
      </div>

      <div className="relative flex flex-col gap-6 w-full overflow-x-hidden select-none z-10">
        {/* Left/Right fading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 (moving left) */}
        <div className="flex w-full overflow-hidden py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: 'linear',
              duration: 50,
              repeat: Infinity,
            }}
            className="flex gap-6 whitespace-nowrap px-3 py-2"
            style={{ width: 'max-content' }}
          >
            {row1Items.map((logo, i) => (
              <div
                key={`row1-${i}`}
                className="flex items-center justify-center bg-white border border-deepsea/8 rounded-xl px-8 py-5 h-24 w-44 shadow-[0_2px_8px_rgba(6,11,52,0.02)] hover:shadow-[0_12px_24px_rgba(6,11,52,0.06)] hover:border-blue/20 hover:-translate-y-0.5 transition-all duration-300 shrink-0"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-14 max-w-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (moving right) */}
        <div className="flex w-full overflow-hidden py-3">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: 'linear',
              duration: 50,
              repeat: Infinity,
            }}
            className="flex gap-6 whitespace-nowrap px-3 py-2"
            style={{ width: 'max-content' }}
          >
            {row2Items.map((logo, i) => (
              <div
                key={`row2-${i}`}
                className="flex items-center justify-center bg-white border border-deepsea/8 rounded-xl px-8 py-5 h-24 w-44 shadow-[0_2px_8px_rgba(6,11,52,0.02)] hover:shadow-[0_12px_24px_rgba(6,11,52,0.06)] hover:border-blue/20 hover:-translate-y-0.5 transition-all duration-300 shrink-0"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-14 max-w-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
