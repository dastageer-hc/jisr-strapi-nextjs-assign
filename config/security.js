module.exports = {
  ssl: {
    enabled: true,
    minVersion: "TLSv1.2",
    ciphers: [
      "ECDHE-ECDSA-AES128-GCM-SHA256",
      "ECDHE-RSA-AES128-GCM-SHA256",
      "ECDHE-ECDSA-AES256-GCM-SHA384",
      "ECDHE-RSA-AES256-GCM-SHA384",
      "ECDHE-ECDSA-CHACHA20-POLY1305",
      "ECDHE-RSA-CHACHA20-POLY1305",
      "DHE-RSA-AES128-GCM-SHA256",
      "DHE-RSA-AES256-GCM-SHA384",
    ],
  },
};
