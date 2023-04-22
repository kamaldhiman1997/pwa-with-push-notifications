export default function swDev() {
  function encodeVapid() {
    const keys = {
      subject: "mailto: <kamaldhacker@gmail.com>",
      publicKey:
        "BEfMMUXmPqCAbV-lHU5faNZSgBGWjDNm2k_L5aJ3SeZScl_O4f54NjrcHqpMHUFG_R-flH9s7bmMYYTSG-zqqLM",
      privateKey: "p2dN6-rKCC-Roue62v-8M5PoSHnxl7QiJATZoPqOhYI",
    };

    return urlBase64ToUint8Array(keys.publicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/sw.js`)
      .then((resp) => {
        console.log("Reponse", resp);
        return resp.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: encodeVapid(),
        });
      });
  }
}
