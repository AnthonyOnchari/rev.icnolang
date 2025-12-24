function scrollToPrayer() {
      document.getElementById("prayer").scrollIntoView({ behavior: "smooth" });
      }

      document.getElementById("prayerForm").addEventListener("submit", function (e) {
        e.preventDefault();
          document.getElementById("responseMessage").innerText =
              "Thank you. Your prayer request has been received. We are praying with you.";
                this.reset();
                });
}
