document.getElementById("enter-button").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.value === "FORMULAPOTIONSALVATION") {
        passwordInput.disabled = true; // Lock the input field
        const audio = new Audio("chime.wav");
        audio.play();

        const shardLayer = document.getElementById("shard-layer");
        const veilLayer = document.getElementById("veil-layer");
        const contentLayer = document.getElementById("content-layer");
        const backgroundLayer = document.getElementById("background-layer");

        // T = 0.0s to T = 0.5s (The Cracks Ignite)
        shardLayer.classList.add("shard-ignite");

        setTimeout(() => {
            // T = 0.5s to T = 1.5s (The Veil Shatters)
            shardLayer.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            veilLayer.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            shardLayer.style.opacity = 0;
            veilLayer.style.opacity = 0;
            shardLayer.style.transform = "scale(0.5)";
            veilLayer.style.transform = "scale(0.5)";

            // T = 0.5s to T = 2.0s (The World Revealed)
            backgroundLayer.style.transition = "filter 1.5s cubic-bezier(0.25, 1, 0.5, 1)";
            backgroundLayer.style.filter = "blur(0px)";

            setTimeout(() => {
                // T = 1.0s to T = 2.0s (The Welcome Emerges)
                document.getElementById("password-container").style.display = "none";
                contentLayer.classList.remove("content-layer-hidden");
                contentLayer.style.animation = "fadeIn 1s ease-out forwards";

            }, 500); // 0.5s (shard ignite) + 0.5s (delay for veil shatter start) = 1.0s

        }, 500); // 0.5 seconds for shard ignite

    } else {
        alert("Access Denied!");
    }
});

