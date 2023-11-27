


document.addEventListener("DOMContentLoaded", function() {
    const toggleImages = document.querySelectorAll(".toggle-image");
    const closeButtons = document.querySelectorAll(".close-button");

    // Função para fechar a imagem
    function closeImage(index) {
        toggleImages[index].style.display = "none";
        closeButtons[index].style.display = "none";
    }

    toggleImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            if (image.style.display === "none") {
                image.style.display = "block";
                closeButtons[index].style.display = "block";
            } else {
                closeImage(index);
            }
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            closeImage(index);
        });
    });

    // Adicionar evento para fechar a imagem ao pressionar "Esc"
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            toggleImages.forEach((image, index) => {
                if (image.style.display === "block") {
                    closeImage(index);
                }
            });
        }
    });
});