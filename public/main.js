document.addEventListener("DOMContentLoaded", function () {
    //animation
    const signupPage_div = document.querySelector("#signup-wrapper > div");
            const observer = new IntersectionObserver((entities) => {
              entities.forEach((ent) => {
                if (ent.isIntersecting) {
                  ent.target.classList.add("show");
                } else {
                  ent.target.classList.remove("show");
                }
              });
            });
            observer.observe(signupPage_div);

});
