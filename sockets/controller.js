const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456789;
    callback(id);

    socket.broadcast.emit("enviar-mensaje", payload);
    console.log(payload);
  });

  socket.on("add-hu", (payload, callback) => {
    const id = 123456789;
    callback(id);

    socket.broadcast.emit("list-hu", payload);
    console.log(payload);
  });
};

module.exports = {
  socketController,
};
