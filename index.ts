const MessageTypes = {
  DATA: "DMX_DATA", 
}

export type DMXMessageTypes = typeof MessageTypes[keyof typeof MessageTypes]

const wss = Deno.serve({
  port: 8080,
  handler: (req) => {
    if (req.headers.get("upgrade") != "websocket") {
      return new Response(null, {status: 501})
    }

    const { socket, response } = Deno.upgradeWebSocket(req);

    socket.addEventListener("open", (e) => {
      console.log("dmx controller connected")
    })

    socket.addEventListener("message", (e) => {
      const message = new DMXMessage(e)
    })

    return response
  }
})


class DMXMessage {
  constructor(event: MessageEvent<unknown>) {
    console.log(event.data)
  }
}
