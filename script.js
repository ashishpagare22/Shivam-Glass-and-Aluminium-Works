const siteConfig = {
  businessName: "Shivam Glass & Aluminium Works",
  phoneDisplay: "+91 97663 18416",
  phoneDigits: "919766318416",
  whatsappDigits: "919766318416",
  email: "nikhilpagare4410@gmail.com",
  shopAddress: "Yamuna Complex, Belapur Road, Shrirampur - 413709",
  workshopAddress: "MIDC, Shrirampur - 413709",
  shopMapLink: "https://maps.app.goo.gl/UL8N3FxMeTfZ7o876",
  workshopMapLink: "https://maps.app.goo.gl/1dNLpPbeVTpUZUxY8",
  defaultWhatsappMessage: "Hi, I want to enquire about glass/aluminium work.",
};

const services = [
  {
    title: "Aluminium Windows & Doors",
    meta: "Core service",
    description:
      "Strong, practical, and custom-fitted aluminium windows and doors for homes, offices, and interior projects.",
  },
  {
    title: "Sliding Windows",
    meta: "Top request",
    description:
      "Smooth sliding systems with custom sizing, clean fitting, and durable aluminium frame options.",
  },
  {
    title: "Kitchen Trolleys",
    meta: "Popular choice",
    description:
      "Functional kitchen trolley work designed around storage, movement, and daily usability.",
  },
  {
    title: "Glass Work & Fittings",
    meta: "Custom glass",
    description:
      "Glass solutions with practical fittings for homes and interior spaces where finish and safety both matter.",
  },
  {
    title: "Glass Railings",
    meta: "Modern finish",
    description:
      "Stylish railing work for balconies, staircases, and terraces with dependable fitting support.",
  },
  {
    title: "Office Partitions",
    meta: "Interior planning",
    description:
      "Glass and aluminium partition work for offices, shops, and spaces that need clean separation.",
  },
  {
    title: "Fabrication Work",
    meta: "Workshop handled",
    description:
      "Fabrication support from the MIDC workshop for custom aluminium and related project needs.",
  },
  {
    title: "Repair & Replacement",
    meta: "Service support",
    description:
      "Repair and replacement support for suitable glass, fittings, and aluminium work where local response matters.",
  },
];

const galleryItems = [
  {
    title: "Sliding Window Work",
    label: "Residential fitting",
    description: "Replace this tile later with one of your best real sliding window project photos.",
  },
  {
    title: "Kitchen Trolley Project",
    label: "Modular setup",
    description: "Use a strong finished kitchen photo here when you are ready to add images.",
  },
  {
    title: "Glass Railing Installation",
    label: "Stair or balcony",
    description: "Good place for a premium-looking railing image from your completed work.",
  },
  {
    title: "Office Partition Work",
    label: "Interior division",
    description: "This card can later hold a glass or aluminium office partition project image.",
  },
  {
    title: "Aluminium Door & Window Fitting",
    label: "Custom size",
    description: "Useful for showing door and window work together in one clean project shot.",
  },
  {
    title: "Repair / Replacement Example",
    label: "Service support",
    description: "Later you can replace this with a before-and-after repair or replacement photo.",
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
    title: "Rahuri",
    quote:
      "Our trolley work was customized to the kitchen size, and the result felt practical for daily use.",
  },
  {
    name: "Project reference",
    title: "Nearby area",
    quote:
      "Reliable local support for glass partitions and fittings. Communication was simple and the service felt dependable.",
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
          <div class="testimonial-stars">Rated 5/5</div>
          <p>"${testimonial.quote}"</p>
          <h3>${testimonial.name}</h3>
          <span class="service-meta">${testimonial.title}</span>
        </article>
      `,
    )
    .join("");
};

const applyContactLinks = () => {
  const defaultMessage = encodeURIComponent(siteConfig.defaultWhatsappMessage);

  document.querySelectorAll("[data-call-link]").forEach((link) => {
    link.href = `tel:${siteConfig.phoneDigits}`;
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = `https://wa.me/${siteConfig.whatsappDigits}?text=${defaultMessage}`;
    link.target = "_blank";
    link.rel = "noreferrer";
  });

  document.querySelectorAll("[data-shop-map-link]").forEach((link) => {
    link.href = siteConfig.shopMapLink;
  });

  document.querySelectorAll("[data-workshop-map-link]").forEach((link) => {
    link.href = siteConfig.workshopMapLink;
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${siteConfig.email}`;
  });

  document.querySelectorAll("[data-phone-display]").forEach((node) => {
    node.textContent = siteConfig.phoneDisplay;
  });

  document.querySelectorAll("[data-email-display]").forEach((node) => {
    node.textContent = siteConfig.email;
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
      siteConfig.defaultWhatsappMessage,
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
