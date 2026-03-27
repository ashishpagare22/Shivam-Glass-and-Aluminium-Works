const siteConfig = {
  businessName: "Shivam Glass & Aluminium Works",
  phoneDisplay: "+91 00000 00000",
  phoneDigits: "910000000000",
  whatsappDigits: "910000000000",
  mapLink: "https://maps.google.com/",
  address:
    "Punjabi Colony, Near Oza Petrol Pump, Shrirampur, Maharashtra - 413709",
};

const services = [
  {
    title: "Aluminium Sliding Windows",
    meta: "Top homepage priority",
    description:
      "Custom-size sliding windows with clean frame work, practical ventilation, and durable aluminium fitting for homes and small projects.",
  },
  {
    title: "Kitchen Trolley & Modular Work",
    meta: "Best-selling service",
    description:
      "Functional kitchen trolley layouts that improve storage, movement, and usability without wasting space.",
  },
  {
    title: "Glass Railings & Partitions",
    meta: "Modern finish",
    description:
      "Toughened glass railings and partitions for homes, offices, staircases, and interiors that need a neat, open look.",
  },
  {
    title: "Glass Doors & Interior Glass Work",
    meta: "Custom design",
    description:
      "Door solutions and interior glass installations designed around your space, finishing style, and daily use.",
  },
  {
    title: "Fabrication Services",
    meta: "Made to requirement",
    description:
      "Custom fabrication work for home improvements, utility structures, and interior support elements with local service support.",
  },
  {
    title: "Repair & Replacement Work",
    meta: "Service support",
    description:
      "Replacement of damaged glass, worn fittings, alignment issues, and other repair jobs where timely local response matters.",
  },
];

const galleryItems = [
  {
    title: "Sliding Window Installation",
    label: "Home exterior",
    description: "Replace with a real project image of your aluminium window work.",
  },
  {
    title: "Kitchen Trolley Setup",
    label: "Modular storage",
    description: "Use one of your strongest finished kitchen photos here.",
  },
  {
    title: "Glass Railing Project",
    label: "Stair / balcony",
    description: "Good place for a premium-looking railing installation shot.",
  },
  {
    title: "Partition & Door Work",
    label: "Interior division",
    description: "Show office, shop, or home partition work in this tile.",
  },
  {
    title: "Fabrication Detail",
    label: "Custom fitting",
    description: "Use a close-up with strong finishing and hardware visibility.",
  },
  {
    title: "Repair / Replacement",
    label: "Before and after",
    description: "Later you can replace this with a repair transformation example.",
  },
];

const testimonials = [
  {
    name: "Local homeowner",
    title: "Shrirampur",
    quote:
      "The team explained the work clearly, measured properly, and completed our aluminium window setup with a neat finish.",
  },
  {
    name: "Kitchen project customer",
    title: "Belapur",
    quote:
      "Our trolley work was customized exactly to the kitchen size, and the result felt practical for daily use.",
  },
  {
    name: "Builder reference",
    title: "Nearby project",
    quote:
      "Reliable local support for glass partitions and fittings. Easy communication and good response during work execution.",
  },
];

const serviceGrid = document.querySelector("#service-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const testimonialGrid = document.querySelector("#testimonial-grid");
const inquiryForm = document.querySelector("#inquiry-form");
const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNavLinks = document.querySelectorAll(".site-nav a");

const renderCards = () => {
  serviceGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card reveal">
          <span class="service-meta">${service.meta}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `,
    )
    .join("");

  galleryGrid.innerHTML = galleryItems
    .map(
      (item) => `
        <article class="gallery-card reveal">
          <span class="service-meta">${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");

  testimonialGrid.innerHTML = testimonials
    .map(
      (testimonial) => `
        <article class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p>"${testimonial.quote}"</p>
          <h3>${testimonial.name}</h3>
          <span class="service-meta">${testimonial.title}</span>
        </article>
      `,
    )
    .join("");
};

const applyContactLinks = () => {
  document.querySelectorAll("[data-call-link]").forEach((link) => {
    link.href = `tel:${siteConfig.phoneDigits}`;
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = `https://wa.me/${siteConfig.whatsappDigits}`;
    link.target = "_blank";
    link.rel = "noreferrer";
  });

  document.querySelectorAll("[data-map-link]").forEach((link) => {
    link.href = siteConfig.mapLink;
  });

  document.querySelectorAll("[data-phone-display]").forEach((node) => {
    node.textContent = siteConfig.phoneDisplay;
  });
};

const closeMenu = () => {
  siteHeader.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

const setupMenu = () => {
  menuToggle?.addEventListener("click", () => {
    siteHeader.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  siteNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
};

const setupInquiryForm = () => {
  inquiryForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const message = [
      `Hello ${siteConfig.businessName},`,
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Project Type: ${formData.get("projectType")}`,
      `Location: ${formData.get("location")}`,
      `Message: ${formData.get("message")}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
};

renderCards();
applyContactLinks();
setupMenu();
setupReveal();
setupInquiryForm();
