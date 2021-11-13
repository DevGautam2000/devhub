import React from "react";
import Post from "../Post";
function CyberSecurity() {
  const csList = [
    {
      link: "https://threatpost.com/massive-zero-day-hole-found-in-palo-alto-security-appliances/176170/?web_view=true",
      heading: "Massive Zero-Day Hole Found in Palo Alto Security Appliances",
      time: "Nov 11, 2021",
      content:
        "Researchers have developed an exploit to gain remote code execution via a massive vulnerability in a security appliance from Palo Alto Networks, potentially exposing 10,000 vulnerable firewalls.",
    },
    {
      link: "https://securityaffairs.co/wordpress/124444/intelligence/taiwan-cyber-attack-from-china.html?web_view=true",
      heading: "Taiwan Government faces 5 Million hacking attempts daily",
      time: "Nov 11, 2021",
      content:
        "Cyber security department director Chien Hung-wei told parliament representatives that the Taiwanese government infrastructure faces 'five million attacks and scans a day'.",
    },
    {
      link: "https://www.theregister.com/2021/11/10/stor_a_file_ransomware_attack_solarwinds_serv_u/?&web_view=true",
      heading: "Stor-a-File hit by ransomware through SolarWinds Serv-U",
      time: "Nov 10, 2021",
      content:
        "Stor-a-File, a U.K-based data capture and storage company, suffered a ransomware attack in August that exploited an unpatched instance of SolarWinds' Serv-U FTP software.",
    },
    {
      link: "https://www.bleepingcomputer.com/news/security/phonespy-android-spyware-campaign-targeting-south-korean-users/?&web_view=true",
      heading:
        "New Android Spyware Campaign Targets South Korean Users to Steal Sensitive Information ",
      time: "Nov 8, 2021",
      content:
        "Researchers at Zimperium who discovered the campaign reported their findings to the US and South Korean authorities, but the host that supports the C2 server is yet to be taken down.",
    },
  ];
  return (
    <div>
      {csList.map((post, index) => (
        <Post
          key={index}
          {...post}
          tag={"Cyber Security"}
          color={"linear-gradient(50deg,#80ea80,#66cb66)"}
        />
      ))}
    </div>
  );
}

export default CyberSecurity;
