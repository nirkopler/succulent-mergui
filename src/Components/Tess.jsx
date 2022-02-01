import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Test = ({}) => {
  const [currentTime, seCurrentTime] = useState(0);
  const [songData, setSongData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const song = `Hey mami hey mami ze asur
Ken mami ken mami ze asur
Oy mami oy mami ze asur

halo?

Hey mami hey mami ze asur
Ken mami ken mami ze asur
Oy mami oy mami ze asur

halo?

La'achrona hayinu ktsat asukim
Yatsa shelo aniti
Chashavti gam lichtov lach lif'amim
Aval lo yadati kama sheze kriti
Po yoshev im kama chaverim
Ani kvar lo leyad harechev
Lo yodea baby od le'an holchim
Ma ihiye ech yitpateach po ha'erev
Az yalla woo
Achshav lishbor yemina
Kulam rokdim halaila
Vehi holechet smola
Kama hee krova elai

Hey mami hey mami ze asur
Ken mami ken mami ze asur
Oy mami oy mami ze asur
Im yitfesu otanu ani gamur

Yesh kan ra'ash vekulam tso'akim
Po kulam ktsat beseret
Nir'ah li shehalaila mevatrim
Me'uchar telchi lishon ma att omeret

Lama att yora alai et kol hachetsim
Baby yesh a- yesh alai maspik lechatsim
Ech ani shuv ashem, baby boi nitkadem
Nedaber al ze kvar machar

Az yalla woo
Holech lishbor yemina
Kulam rokdim halaila
Naziz ta'hege smola

Hee od yoter krova elai
Hey mami hey mami ze asur
Ken mami ken mami ze asur
Oy mami oy mami ze asur
Im yitfesu otanu ani gamur

Hey mami hey mami ze asur
Ken mami ken mami ze asur
Oy mami oy mami ze asur
Im yitfesu otanu ani gamur

Holech lishbor yemina
Kulam rokdim halaila
Naziz ta'hege smola
Hee od yoter krova elai

(Mami mami)
Ze asur
(Mami mami)
Ze asur
Ze asur
Im yitfesu otanu ani gamur

Ze asur
Ken mami ken mami ze asur
Oy mami oy mami ze asur
Im yitfesu otanu ani gamur`;

  useEffect(() => {
    // const songMap = song.split(/\r?\n/).map((e, i) =>  {return {text: e, time: 0 }});
    const songMap = [
      {
        text: "Hey mami hey mami ze asur",
        time: 9,
      },
      {
        text: "Ken mami ken mami ze asur",
        time: 13,
      },
      {
        text: "Oy mami oy mami ze asur",
        time: 16,
      },
      {
        text: "",
        time: 18,
      },
      {
        text: "halo?",
        time: 21,
      },
      {
        text: "",
        time: 22,
      },
      {
        text: "Hey mami hey mami ze asur",
        time: 22,
      },
      {
        text: "Ken mami ken mami ze asur",
        time: 25,
      },
      {
        text: "Oy mami oy mami ze asur",
        time: 28,
      },
      {
        text: "",
        time: 33,
      },
      {
        text: "halo?",
        time: 34,
      },
      {
        text: "",
        time: 34,
      },
      {
        text: "La'achrona hayinu ktsat asukim",
        time: 35,
      },
      {
        text: "Yatsa shelo aniti",
        time: 38,
      },
      {
        text: "Chashavti gam lichtov lach lif'amim",
        time: 41,
      },
      {
        text: "Aval lo yadati kama sheze kriti",
        time: 44,
      },
      {
        text: "Po yoshev im kama chaverim",
        time: 47,
      },
      {
        text: "Ani kvar lo leyad harechev",
        time: 50,
      },
      {
        text: "Lo yodea baby od le'an holchim",
        time: 53,
      },
      {
        text: "Ma ihiye ech yitpateach po ha'erev",
        time: 56,
      },
      {
        text: "Az yalla woo",
        time: 59,
      },
      {
        text: "Achshav lishbor yemina",
        time: 61,
      },
      {
        text: "Kulam rokdim halaila",
        time: 64,
      },
      {
        text: "Vehi holechet smola",
        time: 69,
      },
      {
        text: "Kama hee krova elai",
        time: 71,
      },
      {
        text: "",
        time: 72,
      },
      {
        text: "Hey mami hey mami ze asur",
        time: 73,
      },
      {
        text: "Ken mami ken mami ze asur",
        time: 76,
      },
      {
        text: "Oy mami oy mami ze asur",
        time: 79,
      },
      {
        text: "Im yitfesu otanu ani gamur",
        time: 82,
      },
      {
        text: "",
        time: 92,
      },
      {
        text: "Yesh kan ra'ash vekulam tso'akim",
        time: 93,
      },
      {
        text: "Po kulam ktsat beseret",
        time: 93,
      },
      {
        text: "Nir'ah li shehalaila mevatrim",
        time: 98,
      },
      {
        text: "Me'uchar telchi lishon ma att omeret",
        time: 101,
      },
      {
        text: "",
        time: 102,
      },
      {
        text: "Lama att yora alai et kol hachetsim",
        time: 104,
      },
      {
        text: "Baby yesh a- yesh alai maspik lechatsim",
        time: 107,
      },
      {
        text: "Ech ani shuv ashem, baby boi nitkadem",
        time: 110,
      },
      {
        text: "Nedaber al ze kvar machar",
        time: 113,
      },
      {
        text: "",
        time: 114,
      },
      {
        text: "Az yalla woo",
        time: 116,
      },
      {
        text: "Holech lishbor yemina",
        time: 119,
      },
      {
        text: "Kulam rokdim halaila",
        time: 122,
      },
      {
        text: "Naziz ta'hege smola",
        time: 125,
      },
      {
        text: "",
        time: 126,
      },
      {
        text: "Hee od yoter krova elai",
        time: 127,
      },
      {
        text: "Hey mami hey mami ze asur",
        time: 129,
      },
      {
        text: "Ken mami ken mami ze asur",
        time: 131,
      },
      {
        text: "Oy mami oy mami ze asur",
        time: 136,
      },
      {
        text: "Im yitfesu otanu ani gamur",
        time: 140,
      },
      {
        text: "",
        time: 142,
      },
      {
        text: "Hey mami hey mami ze asur",
        time: 142,
      },
      {
        text: "Ken mami ken mami ze asur",
        time: 145,
      },
      {
        text: "Oy mami oy mami ze asur",
        time: 148,
      },
      {
        text: "Im yitfesu otanu ani gamur",
        time: 153,
      },
      {
        text: "",
        time: 154,
      },
      {
        text: "Holech lishbor yemina",
        time: 156,
      },
      {
        text: "Kulam rokdim halaila",
        time: 0,
      },
      {
        text: "Naziz ta'hege smola",
        time: 0,
      },
      {
        text: "Hee od yoter krova elai",
        time: 0,
      },
      {
        text: "",
        time: 0,
      },
      {
        text: "(Mami mami)",
        time: 0,
      },
      {
        text: "Ze asur",
        time: 0,
      },
      {
        text: "(Mami mami)",
        time: 0,
      },
      {
        text: "Ze asur",
        time: 0,
      },
      {
        text: "Ze asur",
        time: 0,
      },
      {
        text: "Im yitfesu otanu ani gamur",
        time: 0,
      },
      {
        text: "",
        time: 0,
      },
      {
        text: "Ze asur",
        time: 0,
      },
      {
        text: "Ken mami ken mami ze asur",
        time: 0,
      },
      {
        text: "Oy mami oy mami ze asur",
        time: 0,
      },
      {
        text: "Im yitfesu otanu ani gamur",
        time: 0,
      },
    ];

    setSongData(songMap);
  }, []);

  useEffect(() => {
    const d = songData.findIndex((e) => e.time == currentTime);
    if (d != -1) {
      setCurrentIndex(d + 1);
    }
  }, [currentTime]);

  const handleLineTime = () => {
    const items = [...songData];
    items[count].time = currentTime;
    setSongData(items);
    const n = count + 1;
    setCount(n);
    console.log(songData);
  };

  return (
    <div
      tabIndex="0"
      onKeyPress={() => {
        handleLineTime();
      }}
    >
      <span>React Player Test</span>
      <span>{currentTime}</span>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=php8rANiCfU"
        onProgress={(e) => {
          seCurrentTime(Math.floor(e.playedSeconds));
        }}
        controls={true}
      />
      {songData.map((e, i) => {
        return (
          <div style={{ backgroundColor:(currentIndex-2) < i && i < currentIndex ? "yellow" : "" }}>
            <span>{e.text}</span>
            <span> {e.time}</span>
          </div>
        );
      })}
      {/* <div style={{whiteSpace: 'pre-wrap'}}>{songData}</div> */}
    </div>
  );
};

export default Test;
