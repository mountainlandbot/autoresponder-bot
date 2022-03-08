const sdk = require("matrix-bot-sdk");
const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;

const homeserverUrl = process.env.HOMESERVER_URL; // make sure to update this with your url
const accessToken = process.env.ACCESS_TOKEN;
const userId = process.env.USER_ID;
const botJsonPath = process.env.BOT_JSON_PATH || "bot.json"

const storage = new SimpleFsStorageProvider(botJsonPath);

const client = new MatrixClient(homeserverUrl, accessToken, storage);
AutojoinRoomsMixin.setupOnClient(client);

client.start().then(() => console.log("Client started!"));

client.on("room.message", async (roomId, event) => {
  if (!event["content"]) return;
  const sender = event["sender"];
    if (sender === userId) return;
  const body = event["content"]["body"];
  console.log(`${roomId}: ${sender} says '${body}`);
  await client.sendMessage(roomId, { msgtype: "m.notice", body: "Hello 👋", });
  await client.sendMessage(roomId, { msgtype: "m.notice", body: "how can I help you?", });
});
