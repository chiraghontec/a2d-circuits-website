import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={products} />
    </div>
  );
}
const products = [
  {
    id: "ic123",
    name: "Integrated Circuit - IC123",
    code: "IC123",
    price: "$5.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbOMVU_UZ_VWY4-M8GGBYGHwjmBMLZEpCP2eZ7HrdSLpJQQONFQc4LhBtqXWTaLSi2-_O2iKVW8aSkhglSObKPWA2rbITCb_wB-ctacRZD4fgiWyTt4gyWLLodFzuYI8ffhcdLytq_c-45zTUZx6g_M4O2nejrOKjHdXQ1KcF1Kzbdf4-sZw13pWiYGQvGmLNJU_-MZYp-Y9GpTdpXUryEZ5tasaMg-WoJJWpwGqqEzVngtZVW1Puzn4paP3PaxcSKEBoJQButDAQ",
    alt: "Integrated Circuit",
  },
  {
    id: "tr456",
    name: "Transistor - TR456",
    code: "TR456",
    price: "$2.49",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6OPfetVPU0lEF9mIN79lZMHHpPJ_b3XM8x0EQaDbVO1kcMIgARUeWd984RlqPuN_bZiMIAY-tkLkq07qui_AZtnSSoDnay-O2om06bAK3og0MgVgwUwK6it9v74S386muVJQHVHxTliojgo3G5namV2Tt3bx8OTVPZ_HRSDu7JN7D8tmGLaIRAutAjcZk9i-Xw3zh-3viWupKchqIqrn76dHvYmm54LuyGqQ-xrPYEnKZm8L-EF5KGZv_kyIhAdF9TcMEWbf1sbc",
    alt: "Transistor",
  },
  {
    id: "cp789",
    name: "Capacitor - CP789",
    code: "CP789",
    price: "$0.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-A6rt1IMcYzf42UVqEbIkfW46yS67X5Y-jjxscs_AJMP3n5DiMVocsF1QKp-8FVWDiD93RAF53X9qMzovf7DhcjmGvKcXZU_wpCAUNwU_N6Zk_eyeNAUBaPa1sTrAOG76tkjTQN1HvC2xwId_zqt59XD83pUwqpRLInR5GN2dPPkxmAvUma3sW_YrUJFKXIoljsCX_RAhiOSAyPxGC6bbmGIIYGDxFhClkohyUBcQrjWab11ix8saZnLAWxGwNDW-YGNH8hyvpkU",
    alt: "Capacitor",
  },
  {
    id: "rs012",
    name: "Resistor - RS012",
    code: "RS012",
    price: "$0.49",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcm3y7RGHmJDtDsUQuQobpQ3K3kcfDUCCfgn_pSYQyVx9N01aoIzBbDQHLFBFORZmvo3z51koN6cAdlOZlEd2MgfsJ6MzvrZfJF0yRFazuCvQXsq_kgQVchMuHjeRGfI6GUSbjSgaVRkQ7R9_iqsuEuYhDjaNA_0VYoU2GIQXLgGadF3n2XTTPdcKJFril_NE6TTtjTbimzcqCHxnLAjWbT7Ezj8MngAUWy4Ds4zae3eurGNOctyCp1bHdcgrYjX9e6LADaA02Gc4",
    alt: "Resistor",
  },
  {
    id: "dd345",
    name: "Diode - DD345",
    code: "DD345",
    price: "$1.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-BfJ99pOeazZMiJCnKR8SI53P-A6owNxPtY0CsY3zYWOxuQQTWvMOpf5DO671WFeWqjEDeZ5v3OZyDktLm7I-c8Cl9lXqd7SalFGtLVYlrgxP-dIXyWu0rKt8_pyGtYU4jVNFtc18YLG8wfNAts7LWZcWwi6UNxspzqB1bfjyVB-gNTsuk-VTDdP4rM6RJHcMr6urYV0G9t99B8a4DPK4Rw1TmWYv1T3xlilGeN2KFsSekAduuGh1ZgpmIYb8Y4ntXPLDP68Qb2Y",
    alt: "Diode",
  },
  {
    id: "in678",
    name: "Inductor - IN678",
    code: "IN678",
    price: "$3.79",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAAihZ6RwdszGqZK9sSpMQuUGEkTEGG38qidTnrxzV-sOd1KuBpnj-7fc6-qwEUjp_aG8oHrzWdhVb07Ld3wiREkw4WaPgNessVezrDuRgFxmijl3732qgsLbhZurHqkZcGnD3awp33jfBvAeQeTBefnhgfo_WERZAI-Vgn0uL-DOMk8TB_w1OIiuWohUyX5_GrUzF61vSVUzm5IKD4jOJRm4wldA7IFZ2oEoiO4ncagzSSKAu5uN01zSHZu-pul7W7CUbwBmQZTA",
    alt: "Inductor",
  },
];
