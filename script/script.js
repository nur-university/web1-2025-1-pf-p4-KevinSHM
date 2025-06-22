document.addEventListener("DOMContentLoaded", () => {
  const mensajesContainer = document.getElementById("chat-mensajes");
  const chats = document.querySelectorAll(".chat-opcion");

  const conversaciones = {
    1: [
      { rol: "vendedor", texto: "Hola, ¿en qué puedo ayudarte?" },
      { rol: "comprador", texto: "Estoy interesado en la laptop." },
      { rol: "vendedor", texto: "Perfecto, tenemos disponibles en stock." },
      { rol: "comprador", texto: "¿Cuál es el precio final con envío?" },
    ],
    2: [
      { rol: "vendedor", texto: "Provisional" },
      { rol: "comprador", texto: "Provisional" },
    ],
    3: [
      { rol: "vendedor", texto: "Provisional" },
      { rol: "comprador", texto: "Provisional" },
    ],
    4: [
      { rol: "vendedor", texto: "Provisional" },
      { rol: "comprador", texto: "Provisional" },
    ],
  };

  function renderConversacion(id) {
    mensajesContainer.innerHTML = "";
    const mensajes = conversaciones[id] || [];

    mensajes.forEach(mensaje => {
      const div = document.createElement("div");
      div.classList.add("mensaje", mensaje.rol);
      div.textContent = mensaje.texto;
      mensajesContainer.appendChild(div);
    });

    mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
  }

  //aun no probada, puede necesitar ajustes
  function loadMessage(rol, texto) {
    const div = document.createElement("div");
    div.classList.add("mensaje", rol);
    div.textContent = texto;
    mensajesContainer.appendChild(div);
    mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
  }

  renderConversacion(1);

  chats.forEach(chat => {
    chat.addEventListener("click", () => {
      const id = chat.dataset.id;
      renderConversacion(id);
    });
  });

});
