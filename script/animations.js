function animateContent(element) {
    gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        }
    );
}

gsap.utils.toArray("section").forEach((section) => {
    if (!section.id.includes("works")) {
        gsap.to(section, {
            opacity: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 98%",
                onEnter: () =>
                    animateContent(
                        section.querySelectorAll(
                            "*:not(.blurredBG)"
                        )
                    ),
            },
        });
    }
});

gsap.to("#socials", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#socials",
        start: "top 98%",
        onEnter: () => animateContent("#socials"),
    },
});

gsap.utils.toArray("section").forEach((section) => {
    if (window.scrollY + window.innerHeight > section.offsetTop) {
        animateContent(section.querySelectorAll("*:not(.blurredBG)"));
    }
});
