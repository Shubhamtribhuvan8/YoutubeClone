 //side menu
 function openNav() {
    document.getElementById("mySidenav").style.width = "254px";  
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
    let main = async () => {
      document.getElementById("video-container").innerText = "";
      let query = document.getElementById("search-query");
      let data = await GetData(query.value)
      appendData(data.items);
    }
  
    let GetData = async (query) => {
      let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&q=${query}&key=AIzaSyBimND75_08CcrbzR2SMkLcgdpoK9tNwh0`)
      let jsondata = await data.json();
      return jsondata;
    }
  
    let appendData = (dataarr) => {
      let container = document.getElementById("video-container");
      dataarr.forEach((ele) => {
        let h3 = document.createElement("h3");
        h3.innerText = ele.snippet.title;
  
        let img = document.createElement("img");
        img.src = ele.snippet.thumbnails.medium.url;
  
  
        let div = document.createElement("div");
  
        div.onclick = () => {
          saveToLocalStorage(ele);
        }
  
        div.append(img, h3);
        container.append(div);
      });
    }
  
    let saveToLocalStorage = (ele) => {
      localStorage.setItem("video", JSON.stringify(ele));
      window.location.href = "video.html";
    }
    function getdata1() {
      var data1 = document.getElementById("search-query").value;
      Searchcall(data1);
      document.getElementById("suggestionlist").style.display = "block";
      console.log(data1);
    }
    async function Searchcall(query) {
      let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&q=${query}&key=AIzaSyBimND75_08CcrbzR2SMkLcgdpoK9tNwh0`)
      let jsondata = await data.json();
      appendcall(jsondata);
    }
  
    function appendcall(datacenter) {
      var arr1 = datacenter.items;
      document.getElementById("suggestionlist").textContent = "";
      arr1.map(function (el) {
        console.log(arr1);
        let title = document.createElement("p");
        title.innerText = el.snippet.title;
        document.getElementById("suggestionlist").append(title);
      });
      // console.log(arr1);
    }
    document.querySelector("#video-container").addEventListener("click", function () {
      document.getElementById("suggestionlist").textContent = "";
      document.getElementById("suggestionlist").style.display = "none";
    })
  
  
    // var items = [
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "_sByOWMxF518ALQ91kfc9omH3_g",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "gljQOWdIHhw"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-06-30T05:37:23Z",
    //       "channelId": "UCTFz3noLGUS4vsuJvObRtuw",
    //       "title": "Heaven on Earth : Pahalgam, Kashmir | Traveling Mondays : Driving Renault Kiger in Kashmir vlog",
    //       "description": "instagram : https://www.instagram.com/traveling_mondays/ In this video, we are taking a day trip to heaven on earth: Pahalgam in ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/gljQOWdIHhw/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/gljQOWdIHhw/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/gljQOWdIHhw/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Traveling Mondays",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-06-30T05:37:23Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "uYLZaEsKrfSBE4LX12aG_vKgSIo",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "xzoPcdz-Qrg"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-08-21T10:51:09Z",
    //       "channelId": "UCtpHpO4DSllK1-iu2b5ac6w",
    //       "title": "THE REALITY OF Travel Vloggers (Brutal TRUTH!)- KNOW THIS Before You Start Travel Vlogging in 2022????",
    //       "description": "If you are planning to start Travel vlogging in 2022, here are some realities about travel vloggers you must know before you start ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/xzoPcdz-Qrg/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/xzoPcdz-Qrg/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/xzoPcdz-Qrg/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Visha Khandelwal",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-08-21T10:51:09Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "gBOiYgtlYJFN6kLpSewTaEJG-Ic",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "QMr1LqW6730"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-20T14:30:08Z",
    //       "channelId": "UChoyAdkZQVa4V7AbZshiLDg",
    //       "title": "Aisa Bhi Desh Ka Hulia Kya Badalna Jo...",
    //       "description": "All ORGANISED USA ROAD TRIP EPISODES: http://bit.ly/TDUSATrip Bhai Bhabi's YouTube Channel: https://bit.ly/2U6s3jS Join ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/QMr1LqW6730/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/QMr1LqW6730/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/QMr1LqW6730/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Traveling Desi",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-20T14:30:08Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "6NS793VcBgt5igU9tG7j1ZXnCks",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "mQS9qJj58dg"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-05-15T04:30:06Z",
    //       "channelId": "UC9S4dwNL3ZCdtSXjiBQT58Q",
    //       "title": "Kedarnath Yatra 2022 | Kedarnath Trip Vlog | Kedarnath Travel Cost | Kedarnath Yatra Information",
    //       "description": "Kedarnath yatra is a spiritual yatra of India and every year lacs of pilgrims come here for darshan. This year kedarnath temple ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/mQS9qJj58dg/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/mQS9qJj58dg/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/mQS9qJj58dg/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Distance between",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-05-15T04:30:06Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "1jD5Nsk6sM3Bakoxddry6x4DiuM",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "sLdm8ejXoJ4"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-12-23T14:01:40Z",
    //       "channelId": "UCD8CFS_nj2_dBdSZu53wCcQ",
    //       "title": "PARIS TRAVEL VLOG | Indian Girl Traveling Solo in Paris! ???????? #KikiInParis Ep 1",
    //       "description": "Bonjour from Paris! I'm on a one month long solo trip in Europe, and I'm starting my solo trip with Paris in France! Here's how I ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/sLdm8ejXoJ4/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/sLdm8ejXoJ4/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/sLdm8ejXoJ4/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kritika Goel",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-12-23T14:01:40Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "CgLxsTCezw0r8qbLdp5YRD6-rZQ",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "fxz5vzN4y3c"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-07-14T04:30:15Z",
    //       "channelId": "UC9S4dwNL3ZCdtSXjiBQT58Q",
    //       "title": "Amarnath Yatra 2022 | Amarrnath Trip Vlog | Amarnath Travel Cost | Kedarnath Yatra Information",
    //       "description": "Amarnath yatra is a spiritual yatra of India and every year lacs of pilgrims come here for darshan. This year amarnath cave open ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/fxz5vzN4y3c/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/fxz5vzN4y3c/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/fxz5vzN4y3c/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Distance between",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-07-14T04:30:15Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "eQIPS-AbPSszpy9e5IjNyg-avQ4",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "vaW5T8L7ZDY"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-03-03T12:30:05Z",
    //       "channelId": "UCpunRuCSHQSKpyDRspHLEZQ",
    //       "title": "I spent Rs 5 Lakhs in 24 hours in Dubai | Dubai Vlog Hindi |",
    //       "description": "Hey guys, This is another vlog From my Dubai series in Hindi. However, its totally different than my other Dubai vlogs as In this ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/vaW5T8L7ZDY/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/vaW5T8L7ZDY/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/vaW5T8L7ZDY/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Ishan Goyal",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-03-03T12:30:05Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "QXMF7OzocOFKyQwcsnq9IV6LM9Q",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "Qmi-Xwq-MEc"
    //     },
    //     "snippet": {
    //       "publishedAt": "2019-12-01T18:05:21Z",
    //       "channelId": "UCvK4bOhULCpmLabd2pDMtnA",
    //       "title": "Traveling to the Happiest Country in the World!!",
    //       "description": "BLACK FRIDAY DROP Out Now*: http://seek-discomfort.com/yes-theory This week only, with every purchase about $35, you'll get ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/Qmi-Xwq-MEc/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/Qmi-Xwq-MEc/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/Qmi-Xwq-MEc/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Yes Theory",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2019-12-01T18:05:21Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "J3qAKwm0--ifzzXjxtr7fdt5AaA",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "PpXMYCLXQ5s"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-07-07T13:06:24Z",
    //       "channelId": "UCjNgqJ_FMLntYVzq7daw1TQ",
    //       "title": "Travelling to Worlds Most Famous City!",
    //       "description": "We begin our new trip to the famous New York City in USA. Join us as we explore the streets here, the Central Park and the Times ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/PpXMYCLXQ5s/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/PpXMYCLXQ5s/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/PpXMYCLXQ5s/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Dhruv Rathee Vlogs",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-07-07T13:06:24Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "xdE1NDH5F6lq-aXuF7X35fbouR4",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "rxw2Kc-uRjk"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-08T13:01:57Z",
    //       "channelId": "UC9S4dwNL3ZCdtSXjiBQT58Q",
    //       "title": "Andaman Tourist Places | Andaman Tour Budget | Andaman Travel Guide | Andaman Tour Information",
    //       "description": "Andaman & Nicobar Islands is very beautiful and big islands of India. I was traveled andaman in 2019 but now this place is ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/rxw2Kc-uRjk/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/rxw2Kc-uRjk/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/rxw2Kc-uRjk/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Distance between",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-08T13:01:57Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "oQX5ZShDupYfZ4cw0VelF9Xwj6M",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "WjZbgpnocZY"
    //     },
    //     "snippet": {
    //       "publishedAt": "2020-08-08T05:12:08Z",
    //       "channelId": "UCuLftLIRZ2hHsDcLjwDo4Iw",
    //       "title": "How to Vlog in 4 Simple Stages - A Beginner&#39;s Guide to Vlogging (ft. Mohnish Doultani)",
    //       "description": "It is all about PRACTICE. This video is split into - Equipment, Planning, Shooting & Editing. You will find everything (A to Z) that ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/WjZbgpnocZY/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/WjZbgpnocZY/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/WjZbgpnocZY/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Radhika Nomllers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2020-08-08T05:12:08Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "2Zu8BYrwE51CR6MY11MizIaRFd8",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "i9E_Blai8vk"
    //     },
    //     "snippet": {
    //       "publishedAt": "2016-12-13T03:27:13Z",
    //       "channelId": "UCUF__Kckbc3SZoBE1pGZvSw",
    //       "title": "Welcome to Bali | Travel Vlog | Priscilla Lee",
    //       "description": "DISCLAIMER* Please do not ride elephants when visiting any country. At the time I didn't know (yes, I was dumb) so it is shown in ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/i9E_Blai8vk/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/i9E_Blai8vk/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/i9E_Blai8vk/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Priscilla Lee",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2016-12-13T03:27:13Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "Lbrhmtz_WyyQvaqYaoaK9fj0lMk",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "wkVmSdzPLoQ"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-07-05T13:07:30Z",
    //       "channelId": "UCz8y1ABvo6PI1EB8mgyI8cg",
    //       "title": "Greece Travel Vlog 2022 || affordable travel! cliff jumping, yacht trip",
    //       "description": "my FIRST trip to GREECE! My boyfriend and I stayed in Athens, Milos and Mykonos but the highlight of the trip was the time we ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/wkVmSdzPLoQ/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/wkVmSdzPLoQ/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/wkVmSdzPLoQ/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Morgan Venn",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-07-05T13:07:30Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "qwUFYGkQBGxzPzPPw6m7QJqkDGQ",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "sjs7Ky-8q9w"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-11-03T07:30:10Z",
    //       "channelId": "UCTPt4jOKJ-TOP_5wNbMhEDw",
    //       "title": "Travelling to the most beautiful place of INDIA I Travel Vlog I Bhavika Sharma ??????",
    //       "description": "Hi Guys, Me finally ja rahi hu Shoot se chutti lekar KASHMIR ghumne ke liyeh Iss din ka mujeh kabse intezaar tha, jo finally ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/sjs7Ky-8q9w/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/sjs7Ky-8q9w/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/sjs7Ky-8q9w/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "BHAVIKA SHARMA",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-11-03T07:30:10Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "ME_321PP8jT0_80ygQc-YGYqKYM",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "Uu37vUmm1tk"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-16T07:01:37Z",
    //       "channelId": "UCD8CFS_nj2_dBdSZu53wCcQ",
    //       "title": "MALDIVES TRAVEL VLOG: Snorkeling, Dolphin Cruise, Water Villa Tour &amp; More! ????????????? | Ep 1",
    //       "description": "I spent a week in the Maldives exploring 5 different Sun Siyam resorts and having some of the most incredible and luxurious ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/Uu37vUmm1tk/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/Uu37vUmm1tk/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/Uu37vUmm1tk/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kritika Goel",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-16T07:01:37Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "D8zSgy8H_7PPpMhFQjo_GxKSZm0",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "XW033ZYbi7k"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-12T16:01:48Z",
    //       "channelId": "UC3cQWF3e0qcIDEBzCzqp_SQ",
    //       "title": "Exploring the most Modern area in Bangalore India | TRAVEL VLOG IV",
    //       "description": "Exploring the most Modern area in Bangalore India | TRAVEL VLOG IV Make sure to subscribe by clicking http://bit.ly/1KKCs8V ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/XW033ZYbi7k/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/XW033ZYbi7k/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/XW033ZYbi7k/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "TRAVEL VLOG IV",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-12T16:01:48Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "Whh1r8NEN2xoZiGqRb2ko89o8mg",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "jlD7qO7goKE"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-23T13:33:55Z",
    //       "channelId": "UCD8CFS_nj2_dBdSZu53wCcQ",
    //       "title": "MALDIVES TRAVEL VLOG ???????: Seaplane, Water Villa Tour, Snorkeling, &amp; Floating Breakfast! | Ep 2",
    //       "description": "I spent a week in the Maldives exploring 5 different Sun Siyam resorts and having some of the most incredible and luxurious ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/jlD7qO7goKE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/jlD7qO7goKE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/jlD7qO7goKE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kritika Goel",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-23T13:33:55Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "KRKtooja3mJEpJPO1OBlii9PLpA",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "v6cLeZRlwLE"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-04T04:11:12Z",
    //       "channelId": "UCCZrWLq1BlpxvIF9wwhv5Lg",
    //       "title": "THE MOST BUDGET FRIENDLY Country in EUROPE. Sofia Bulgaria Travel Vlog",
    //       "description": "We land in Sofia, Bolivia and see how expensive this country is for tourists and what all is there to see. We talk about the VISA ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/v6cLeZRlwLE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/v6cLeZRlwLE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/v6cLeZRlwLE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "The Punjabi Wanderer",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-04T04:11:12Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "mPzOrkyKPhUsYHeNpMSQsqd_PPI",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "uYFtWVv5F3E"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-09-12T12:00:38Z",
    //       "channelId": "UCz8y1ABvo6PI1EB8mgyI8cg",
    //       "title": "Italy Travel Vlog: exploring Florence, Tuscany and Venice (2022)",
    //       "description": "my first time visiting Venice and Tuscany! sharing all my the restaurants and places I loved 0:00 - 0:23 intro 0:23 - 7:08 venice ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/uYFtWVv5F3E/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/uYFtWVv5F3E/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/uYFtWVv5F3E/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Morgan Venn",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-09-12T12:00:38Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "c1l-cNSmibAhxoBXDXItXu-FjIA",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "hROKtPqktO8"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-26T17:03:43Z",
    //       "channelId": "UCiciOsypkXcqSFqSPd-NRVA",
    //       "title": "My ICELAND Experience | Ultimate Travel Vlog",
    //       "description": "I really hope you enjoyed this vlog. I know it was a lot different from my regular content but I hope you got a little escape from it and ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/hROKtPqktO8/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/hROKtPqktO8/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/hROKtPqktO8/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kallmekris",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-26T17:03:43Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "l9yCTKoIdOT1KbHoz_4m4jP0Exo",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "qmGYnJgCW1o"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-07-07T15:14:55Z",
    //       "channelId": "UCP0GR0mjnwR6XPCI7vaW-vA",
    //       "title": "Kashmir Tour Complete Guide | All Information About Kashmir Trip",
    //       "description": "I hope you enjoyed the Kashmir series which contains videos of following popular places, - Gulmarg - Pahalgam - Sonmarg ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/qmGYnJgCW1o/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/qmGYnJgCW1o/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/qmGYnJgCW1o/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Traveling Eyesight",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-07-07T15:14:55Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "78H7_OJqJzJmlM89PqDnYDnOsK0",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "dodDteh-m3Q"
    //     },
    //     "snippet": {
    //       "publishedAt": "2013-10-09T09:16:01Z",
    //       "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
    //       "title": "&quot;Kashmir Main Tu Kanyakumari&quot; Chennai Express Full Video Song | Shahrukh Khan, Deepika Padukone",
    //       "description": "CHENNAI EXPRESS FULL VIDEO SONGS 1. Titli - http://youtu.be/V8zXLMIjlcw 2. One Two Three Four ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/dodDteh-m3Q/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/dodDteh-m3Q/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/dodDteh-m3Q/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "T-Series",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2013-10-09T09:16:01Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "k5nfP31-BgcmH2lb5dBOFGksDck",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "ljsZz_dwKd8"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-09-19T05:24:04Z",
    //       "channelId": "UC6GwjNhGjcTQCkG-e4-h-fA",
    //       "title": "??????????????? ?????????????????? ?????? ?????? Tourist Places ?????? ?????????????????? || Jammu Kashmir tourist places in hindi",
    //       "description": "Travel Guru ??????????????? ?????????????????? ?????? ?????? Tourist Places ?????? ?????????????????? || Jammu Kashmir tourist places in hindi ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/ljsZz_dwKd8/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/ljsZz_dwKd8/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/ljsZz_dwKd8/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Travel Guru",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-09-19T05:24:04Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "UP8y8PiVTIN01L9cGVETG2gIODo",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "gY4z2MDvmIc"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-02-11T07:25:01Z",
    //       "channelId": "UCY_asLJcbq2M2MqIKqAg2cg",
    //       "title": "Kashmir Tour Budget | Itinerary | Srinagar Gulmarg Sonmarg Pahalgam Tour Information By MS Vlogger",
    //       "description": "Kashmir Tour Budget 2022 | Srinagar Gulmarg Sonmarg Pahalgam Tour Information By MS Vlogger #KashmirTour2022 ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/gY4z2MDvmIc/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/gY4z2MDvmIc/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/gY4z2MDvmIc/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "MS Vlogger",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-02-11T07:25:01Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "va3B9FIw7DoZEb1vHV6CVubvLqY",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "1TAwBr26J7U"
    //     },
    //     "snippet": {
    //       "publishedAt": "2018-10-31T14:06:36Z",
    //       "channelId": "UCc60h24hhjZIpf-mRjFEO2Q",
    //       "title": "Top 10 must-visit places in Kashmir | Travel Video",
    //       "description": "KASHMIR - Heaven on earth!!! I've been to Kashmir many times and every time it was an amazing and different experience.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/1TAwBr26J7U/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/1TAwBr26J7U/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/1TAwBr26J7U/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Travel Therapy",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2018-10-31T14:06:36Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "WjH3E9OvjHkuHWZDiDsh5bg3NEI",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "IoNhJAdeLDc"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-09-17T07:30:03Z",
    //       "channelId": "UCZYbdpG4VSnXwaxfa5gKW1w",
    //       "title": "SONMARG - the most beautiful place in India | Kashmir in Winters | EP5 | Ankit Bhatia",
    //       "description": "SONMARG - Kashmir!! I can say that this is the most beautiful place I have ever been to in India! If you want to travel to kashmir in ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/IoNhJAdeLDc/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/IoNhJAdeLDc/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/IoNhJAdeLDc/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Ankit Bhatia",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-09-17T07:30:03Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "x_G5yXDkH09yyVG3-71W6lJysSs",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "8tzokWbTo4A"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-01-15T07:00:11Z",
    //       "channelId": "UCZXhZeAbY4LYynmzVe-IQ4w",
    //       "title": "Gulmarg(Kashmir) Tour Guide | Itinerary, Budget &amp; Stay (With English Subtitles)",
    //       "description": "Hi Friends I recently went to Gulmarg, Kashmir for a weekend. It's a must visit place. I took a direct Spicejet flight from Mumbai to ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/8tzokWbTo4A/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/8tzokWbTo4A/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/8tzokWbTo4A/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Garima's Good Life",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-01-15T07:00:11Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "CIHvTRBuCbUL1gpNuIJE_4q1WfE",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "5fG1I8cE_Hg"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-12-01T05:30:01Z",
    //       "channelId": "UC9S4dwNL3ZCdtSXjiBQT58Q",
    //       "title": "Kashmir Tourist Places | Kashmir Tour Budget | Kashmir Tour Guide | Kashmir Trip video in Hindi",
    //       "description": "In this video you will know about Kashmir tour. Srinagar is the main place where you can start your kashmir trip and Kashmir is ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/5fG1I8cE_Hg/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/5fG1I8cE_Hg/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/5fG1I8cE_Hg/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Distance between",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-12-01T05:30:01Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "tpGuBmhZPuJEDP2j4bzZccwnC90",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "-dpXw5brgwI"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-20T14:36:58Z",
    //       "channelId": "UCLwbrCRNRVk7TXdedoHzKnw",
    //       "title": "Jammu Challo Part 2 Kashmiri Funny Drama",
    //       "description": "kR PRESENTS NEW VIDEO ON YOUR DEMAND Hope you all like this video hit like comment share also subscribe our channel ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/-dpXw5brgwI/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/-dpXw5brgwI/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/-dpXw5brgwI/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "kashmiri rounders",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-20T14:36:58Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "wPNZ4qXJB2Vv1TouxpIAgUqrZZA",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "HB3d0crWqdo"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-07T13:15:20Z",
    //       "channelId": "UCKsMi--2Qmayd_5lxN4xXVw",
    //       "title": "Kashmir Tour Plan. ????????????????????? ??????????????? ???????????????",
    //       "description": "Kashmir Tour Plan. ????????????????????? ??????????????? ??????????????? #kashmir #kashmir_tour_plan #kashmir_tour #kashmir_tour_guide ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/HB3d0crWqdo/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/HB3d0crWqdo/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/HB3d0crWqdo/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Travel Blogger Sudipta",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-07T13:15:20Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "oE_FqrNbFWbqa3dsCjJl5RCP2_0",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "gAtG_eYMWjA"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-11T08:15:02Z",
    //       "channelId": "UCzFRfjs5aM2nqwRDpeKzCQw",
    //       "title": "TRUTH OF KASHMIR AND KASHMIRI&#39;S AFTER 370 | POK | SHARDA | KERAN | Ep-14",
    //       "description": "Interesting stories from Direct LOC Near POK | Keran village I am sure you will get goosebumps. All India 29 states Nepal Bhutan ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/gAtG_eYMWjA/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/gAtG_eYMWjA/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/gAtG_eYMWjA/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "XTREME MOTO ADVENTURE",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-11T08:15:02Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "X1CsSA20iC4FcYNcTDjzz5Vrzns",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "3qgEidQgFpc"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-02T04:30:01Z",
    //       "channelId": "UCzFRfjs5aM2nqwRDpeKzCQw",
    //       "title": "How INDIAN ARMY Treat In KASHMIR | SRINAGAR | GOGALDARA | EP- 11",
    //       "description": "This is how the Indian Army treats In Kashmir | Now I am exploring Kashmir. In this vlog explored outskirts of Srinagar. You will see ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/3qgEidQgFpc/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/3qgEidQgFpc/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/3qgEidQgFpc/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "XTREME MOTO ADVENTURE",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-02T04:30:01Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "loDqII2DMv4Pl_QATg4MXsRHms4",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "98Dh9o1vN_Y"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-02-20T07:55:56Z",
    //       "channelId": "UCtpHpO4DSllK1-iu2b5ac6w",
    //       "title": "PAHALGAM- Kashmir In Winters 2022 | You CAN&#39;T MISS THESE PLACES! Best 2-Day Itinerary for 2022 ????",
    //       "description": "If you are planning to visit Pahalgam, Kashmir in winters in 2022, this video's for you! Here, you'll find the best places to visit ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/98Dh9o1vN_Y/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/98Dh9o1vN_Y/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/98Dh9o1vN_Y/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Visha Khandelwal",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-02-20T07:55:56Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "gA1d-u-sKTGqUD93fx4yVsAutNQ",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "vOM2TjbJT9g"
    //     },
    //     "snippet": {
    //       "publishedAt": "2020-09-27T07:09:50Z",
    //       "channelId": "UCnCZbUC4WV1Xd7SR2mw3x4g",
    //       "title": "Jammu And Kashmir full view Kashmir Tourism Top Videos",
    //       "description": "Kashmir full view Jammu And Kashmir tourism Kashmir valley Jammu And Kashmir union territory Jammu And Kashmir state ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/vOM2TjbJT9g/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/vOM2TjbJT9g/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/vOM2TjbJT9g/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Top Videos",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2020-09-27T07:09:50Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "sm3uilPiv-eaNyrfPTTHNZZwiTM",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "YyaenMmjTyw"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-20T13:30:15Z",
    //       "channelId": "UCOoIoSfZ18MAzzMuz2Dxguw",
    //       "title": "??????????????????????????? ????????? ??????????????? ???????????? ????????????????????? ???????????? ???????????? ????????? ????????????????????? | Dal Lake ( Kashmir ) |",
    //       "description": "??????????????????????????? ????????? ??????????????? ???????????? ????????????????????? ???????????? ???????????? ????????? ????????????????????? | Dal Lake ( Kashmir ) |",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/YyaenMmjTyw/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/YyaenMmjTyw/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/YyaenMmjTyw/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "TradiSwad Vlog",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-20T13:30:15Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "_sByOWMxF518ALQ91kfc9omH3_g",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "gljQOWdIHhw"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-06-30T05:37:23Z",
    //       "channelId": "UCTFz3noLGUS4vsuJvObRtuw",
    //       "title": "Heaven on Earth : Pahalgam, Kashmir | Traveling Mondays : Driving Renault Kiger in Kashmir vlog",
    //       "description": "instagram : https://www.instagram.com/traveling_mondays/ In this video, we are taking a day trip to heaven on earth: Pahalgam in ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/gljQOWdIHhw/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/gljQOWdIHhw/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/gljQOWdIHhw/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Traveling Mondays",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-06-30T05:37:23Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "vf8tVY4xwxhYS2hXxOQAXdja74k",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "XDahhGNJ7GE"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-01-18T12:44:04Z",
    //       "channelId": "UCZXhZeAbY4LYynmzVe-IQ4w",
    //       "title": "Krazy In Kashmir | YouTube Shorts | Making Fresh Snow Gola",
    //       "description": "youtubeshorts #kashmir #snowgola.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/XDahhGNJ7GE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/XDahhGNJ7GE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/XDahhGNJ7GE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Garima's Good Life",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-01-18T12:44:04Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "INA57VKHdfcfBgoqczBQLYtgfsg",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "aKuNqm71PPc"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-06-06T15:26:14Z",
    //       "channelId": "UCiSsEUdLO7eW8Df0lbqHWEQ",
    //       "title": "Pakistan Last Village of India Pakistan Border on Kashmir Side | Pakistan India Border Last Village",
    //       "description": "Pakistan Last Village of India Pakistan Border on Kashmir Side | Pakistan India Border Last Village.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/aKuNqm71PPc/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/aKuNqm71PPc/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/aKuNqm71PPc/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Sabir Ahmad Vlogs",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-06-06T15:26:14Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "6vH44OEdmaLJbaZxrEQnJAMgMME",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "Ol4MPirq2YI"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-02-10T13:00:11Z",
    //       "channelId": "UCxiBEi8RF-l6ib4SMDTd35w",
    //       "title": "Floating Kesar Kahwa, Fried Kashmiri Fish And Breakfast On Shikara | Kashmir Episode 4",
    //       "description": "You Can Follow Us On Instagram https://instagram.com/dilsefoodie.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/Ol4MPirq2YI/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/Ol4MPirq2YI/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/Ol4MPirq2YI/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Dilsefoodie Official",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-02-10T13:00:11Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "8vQnDDlNYmpienUl-oVQtN5BA-A",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "2bmTzckTS7M"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-18T09:14:17Z",
    //       "channelId": "UCqeLVpwqvtMer_s09a7OXGw",
    //       "title": "cxeni karen Wael | PART 4 | Kashmiri drama",
    //       "description": "cxeni karen Wael | PART 4 | Kashmiri drama kashmiri drama kashmiri jokes kashmiri kal khrab kashmiri backbenchers.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/2bmTzckTS7M/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/2bmTzckTS7M/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/2bmTzckTS7M/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Back Benchers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-18T09:14:17Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "RHzUixiZVzQVKG3WUTi3p-rQrS0",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "sNzESO1JOxI"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-18T13:30:13Z",
    //       "channelId": "UC_M9YMwERO6byJ-86OFaDUA",
    //       "title": "Gar Gar Ki Kahani - Episode 95 - Saju Darling - Kashmiri Cartoon Drama",
    //       "description": "In this amazing episode of Gar Gar Ki Kahani, Saju Darling plays a pivotal role as the village scribe. In this cartoon drama, Saju ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/sNzESO1JOxI/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/sNzESO1JOxI/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/sNzESO1JOxI/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kmr Cartoons",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-18T13:30:13Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "nz5aOM7fUeJFt1gr9ZZzUQCzCLA",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "NxDuruCpBQU"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-01-10T14:46:41Z",
    //       "channelId": "UCwt5R_3BDh1oMNCnVhFyblA",
    //       "title": "Kashmir Tourist Places | Srinagar Budget Trip | ?????????????????? ????????? ??????????????? ?????? ????????? | Gulmarg, Sonmarg, Pahalgam",
    //       "description": "Hello Dosto, If you are Planning to Visit Kashmir, We've provided all the info you need like Kashmir Tour | ?????????????????? ????????? ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/NxDuruCpBQU/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/NxDuruCpBQU/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/NxDuruCpBQU/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Yatri Central",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-01-10T14:46:41Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "CgAfMHAfhHw0EmzNYin96x-c0yw",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "A9xE71tWkjQ"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-18T13:30:03Z",
    //       "channelId": "UCvP6cno2or7kfDG3tE1eVgw",
    //       "title": "Top 30 news of Jammu Kashmir Khabar Dinbhar 18 Dec 2022",
    //       "description": "Top 30 news of Jammu Kashmir Khabar Dinbhar 18 Dec 2022 Like us on Facebook: https://www.facebook.com/jkupdatesnews/ ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/A9xE71tWkjQ/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/A9xE71tWkjQ/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/A9xE71tWkjQ/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Jkupdate",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-18T13:30:03Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "LcHqRP3p-MPX85KVSiH2xCFdhUg",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "cyayif_nla8"
    //     },
    //     "snippet": {
    //       "publishedAt": "2019-03-21T12:00:08Z",
    //       "channelId": "UCLXo7UDZvByw2ixzpQCufnA",
    //       "title": "The conflict in Kashmir, explained",
    //       "description": "Why Kashmir remains one of the most militarized regions in the world. Become a Video Lab member! http://bit.ly/video-lab The ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/cyayif_nla8/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/cyayif_nla8/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/cyayif_nla8/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Vox",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2019-03-21T12:00:08Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "rMjAcn4fXdvPgonb_ko0x_-ONrM",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "PD-MdiUm1_Y"
    //     },
    //     "snippet": {
    //       "publishedAt": "2012-11-02T17:58:59Z",
    //       "channelId": "UCaKZA66vM_TUpetUNohmR0A",
    //       "title": "Led Zeppelin - Kashmir (Live from Celebration Day) (Official Video)",
    //       "description": "Led Zeppelin perform 'Kashmir' live at the Ahmet Ertegun tribute concert at London's O2 Arena from the concert film 'Celebration ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/PD-MdiUm1_Y/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/PD-MdiUm1_Y/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/PD-MdiUm1_Y/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Led Zeppelin",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2012-11-02T17:58:59Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "Ctjcf7QQxvye8BwtUz0CkGP_AuQ",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "rHUbOh225JM"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-08-30T07:54:04Z",
    //       "channelId": "UCqeLVpwqvtMer_s09a7OXGw",
    //       "title": "Masaal Woel | Kashmiri Funny Drama",
    //       "description": "Masaal Woel | Kashmiri Funny Drama Kashmiri Drama Kashmiri Backbenchers Kashmiri kal kharab Kashmiri jokes kashmiri ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/rHUbOh225JM/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/rHUbOh225JM/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/rHUbOh225JM/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Back Benchers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-08-30T07:54:04Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "IeVq7P3asyZqgBjM88fqOhaN4yE",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "A179apttY58"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-02-21T05:30:56Z",
    //       "channelId": "UC3jMepkLKF8y4iiwWmAB3RA",
    //       "title": "The Kashmir Files | Official Trailer I Anupam I Mithun I Darshan I Pallavi I Vivek I 11 March 2022",
    //       "description": "32 years later, the emotions & the pain remain the same. Witness the brutally honest story of the Kashmir Genocide.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/A179apttY58/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/A179apttY58/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/A179apttY58/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Zee Studios",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-02-21T05:30:56Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "RhQEbMTZ5cK8_ciu_8KF0ZxO9R0",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "_96gScBw93M"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-07-28T07:33:13Z",
    //       "channelId": "UCyU0fDl_PGizoRO9lAzuEDw",
    //       "title": "Kashmiri Drama Wafa || Part 1",
    //       "description": "Kashmiri Drama Wafa || Part 1 To watch Part 2nd Click on Link https://www.youtube.com/watch?v=LR5Cvkgy0uk.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/_96gScBw93M/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/_96gScBw93M/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/_96gScBw93M/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashur Culture",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-07-28T07:33:13Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "8y6F8q6ilUuO7Y6j2OmDOfqwwOQ",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "QovPIpthvSE"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-07-08T08:45:52Z",
    //       "channelId": "UCqeLVpwqvtMer_s09a7OXGw",
    //       "title": "Types of Qurbaani | Eid Special | Kashmiri Drama",
    //       "description": "Types of Qurbaani | Eid Special | Kashmiri Drama kashmiri drama kashmiri backbenchers kashmiri jokes kashmiri kalkhrab ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/QovPIpthvSE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/QovPIpthvSE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/QovPIpthvSE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Back Benchers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-07-08T08:45:52Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "BgzXPn1r4HZCm67lFHHW2qnN60k",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "vZmImAI8HPA"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-01-14T13:00:12Z",
    //       "channelId": "UCSKw3OWIHcE1aXbipv2JKVQ",
    //       "title": "Kashmir Valley Train Journey Switzerland of India | Train Journey in Snowfall -5??C",
    //       "description": "Kashmir Valley Train Journey Switzerland of India | Train Journey in Snowfall -5??C Train Lovers HY Instagram id ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/vZmImAI8HPA/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/vZmImAI8HPA/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/vZmImAI8HPA/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Train Lovers HY",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-01-14T13:00:12Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "3aJsdIzjQudzlVH-I9kAgFYeKig",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "Em-SxP-GjXM"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-07-08T08:16:06Z",
    //       "channelId": "UCqeLVpwqvtMer_s09a7OXGw",
    //       "title": "Pahalgam Craze In Kashmir | Funny Drama",
    //       "description": "Pahalgam Craze In Kashmiri | Funny Drama Pahalgam Drama Kashmiri Drama Kashmiri Funny Drama kashmiri Jokes kashmiri ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/Em-SxP-GjXM/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/Em-SxP-GjXM/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/Em-SxP-GjXM/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Back Benchers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-07-08T08:16:06Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "Lv0tawUbGF_p3PmzGK9mu6y4kPc",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "IrU0ZgUhWOw"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-01-09T14:08:01Z",
    //       "channelId": "UCf9aEHz2qK1cjCfP5BzbM3Q",
    //       "title": "Fake Rantas In Kashmir - Kashmiri Kalkharabs",
    //       "description": "Kameen Hash Part 1. https://youtu.be/KEuke0_fMU8 kameen hash 2. https://youtu.be/OcKz9PeF3rY Dosto umeed hai apko ajka ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/IrU0ZgUhWOw/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/IrU0ZgUhWOw/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/IrU0ZgUhWOw/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "KASHMIRI KALKHARABS",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-01-09T14:08:01Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "FNIDSgbJ_fhozls9_VmlKVXtOTU",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "s3cCIbg4MGM"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-18T12:30:26Z",
    //       "channelId": "UCkF57lxAoEXN3WZS0aTF5Sg",
    //       "title": "#viral #funny #kashmiri #video #by #kashirbaradari #2022 #watchtillend mama nai JCB laayi",
    //       "description": "viral #funny #kashmiri #video #by kashir baradari 2022.",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/s3cCIbg4MGM/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/s3cCIbg4MGM/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/s3cCIbg4MGM/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "kashir baradari",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-18T12:30:26Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "EoDkBkNOPstQUnzrfsipd1Okufw",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "VE_B7ZpepQY"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-08-30T09:30:14Z",
    //       "channelId": "UCkFZNhDgHW1XX9tCj-NPR-Q",
    //       "title": "Kashmir Ki Shadi Ka Khana | Kashmiri Wedding Food Day 2 | Kashmiri Wazwan Feast | Dawat In Kashmir",
    //       "description": "It was day 2 in Kashmiri Wedding a dawat in Kashmir. Kashir ki Shadi ka khana as a huge Kashmiri Wazwan Feast is like Jannat ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/VE_B7ZpepQY/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/VE_B7ZpepQY/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/VE_B7ZpepQY/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Globalecentre",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-08-30T09:30:14Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "uoORhRUfZ30-sEwT1QdKXRiQTDw",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "GcGC7kEJlR0"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-08-16T07:58:19Z",
    //       "channelId": "UCqeLVpwqvtMer_s09a7OXGw",
    //       "title": "Gasse Pareshani | Kashmiri Drama",
    //       "description": "Gasse Pareshani | Kashmiri Drama kashmiri drama kashmiri backbenchers kashmiri jokes kashmiri kalkhrab kashmiri funny ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/GcGC7kEJlR0/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/GcGC7kEJlR0/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/GcGC7kEJlR0/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Back Benchers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-08-16T07:58:19Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "68YaT7INAS3k_ZBS7Q7visORX_U",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "cqF3S3dL_1o"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-12-17T13:30:08Z",
    //       "channelId": "UCMi9xvkPHY2Y37Fdwdk0OLA",
    //       "title": "Janjaal Part 1 || Gulzar Fighter, Badshah Khan, Tanvir || Kashmiri Drama",
    //       "description": "Artists:- Qayoom Badshah Khan, Gulzar Fighter, Malik Mushtaq, Farooq Adil, Gulfam Barji, Qaisar, Tanvir Tingu, Shakeela, Sonu ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/cqF3S3dL_1o/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/cqF3S3dL_1o/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/cqF3S3dL_1o/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Entertainment",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-12-17T13:30:08Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "dvsk4Ri4FRrRI9H1zOZBvzIxTEk",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "6HPfvb3838U"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-11-01T02:28:51Z",
    //       "channelId": "UCPOjt2u1E3F26Fjcdwlc6iA",
    //       "title": "Apple Garden In Kashmir || ??????????????????????????? ????????????????????? ???????????? ??????????????? ???????????????????????? ???????????? ?????????????????????...",
    //       "description": "srinagar Hy,i\"m Fizz From Bangladesh I\"m 21 years old. . Welcome to \"MD FIZZ \" Youtube Channel. Guyss i will vlog about India ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/6HPfvb3838U/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/6HPfvb3838U/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/6HPfvb3838U/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Md Fizz",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-11-01T02:28:51Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "nofuazm-bBgx_IXjW1gGAfK2oAs",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "abZiBJDYDnE"
    //     },
    //     "snippet": {
    //       "publishedAt": "2021-03-28T11:05:29Z",
    //       "channelId": "UCqeLVpwqvtMer_s09a7OXGw",
    //       "title": "Tulip Garden Teh Corona | Kashmiri Funny Drama",
    //       "description": "Tulip Garden Teh Corona | Kashmiri Funny Drama Kashmiri Drama Kashmiri Funny Drama Kashmiri Jokes Kashmiri ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/abZiBJDYDnE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/abZiBJDYDnE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/abZiBJDYDnE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Kashmiri Back Benchers",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2021-03-28T11:05:29Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "Zn0IHZ7vqEYemDLFEXdVwZjzUUY",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "fdYzr5LmUlw"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-03-29T09:20:34Z",
    //       "channelId": "UCRyu0q6TPe8XZ8z5ixcXtcQ",
    //       "title": "The Kashmiri Pandit | Full Hindi Suprehit Movie | Bhawani Bashir, Muzammil | Bollywood Movie",
    //       "description": "TheKashmiriPanditonKashmirIssue #trending The Kashmiri Pandit is usually associated with Islam and Muslims, but in fact, the ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/fdYzr5LmUlw/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/fdYzr5LmUlw/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/fdYzr5LmUlw/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Lot Pot Comedy",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-03-29T09:20:34Z"
    //     }
    //   },
    //   {
    //     "kind": "youtube#searchResult",
    //     "etag": "hpJJj9A0E_2V8Ygei3fngQ_Tge4",
    //     "id": {
    //       "kind": "youtube#video",
    //       "videoId": "jtoG_t65PFE"
    //     },
    //     "snippet": {
    //       "publishedAt": "2022-10-21T13:30:21Z",
    //       "channelId": "UCYCEj-PEDJdmQFKG4DCeycw",
    //       "title": "KASHMIR in WINTERS | Itinerary, Stay &amp; Expenses | Srinagar, Gulmarg, Pahalgam",
    //       "description": "In this video, I talk about my winter trip to kashmir that includes Srinagar, Gulmarg and Pahalgam. I share my detail itinerary, stay, ...",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/jtoG_t65PFE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/jtoG_t65PFE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/jtoG_t65PFE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         }
    //       },
    //       "channelTitle": "Sunny Gala",
    //       "liveBroadcastContent": "none",
    //       "publishTime": "2022-10-21T13:30:21Z"
    //     }
    //   }
    // ]
    // let container1 = document.getElementById("video-container");
  
    // function appenddatacenter() {
    //   container1.textContent = "";
    //   items.map(function (el) {
    //     let card = document.createElement("div");
  
    //     let thumbnails = document.createElement("img");
    //     thumbnails.src = el.snippet.thumbnails.high.url;
  
  
    //     let title = document.createElement("p");
    //     title.innerText = el.snippet.title;
  
    //     card.append(thumbnails, title);
    //     container1.append(card);
    //   });
    // }
    // appenddatacenter();
    const API_KEY = 'AIzaSyBimND75_08CcrbzR2SMkLcgdpoK9tNwh0';
    const countryCode = 'IN';

    async function getPopularVideos() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=${API_KEY}`);
        const data = await response.json();                       
        return data;
        console.log(data);
    }

    async function displayPopularVideos() {
        const popularVideos = await getPopularVideos();
        let container = document.getElementById("video-container");
        popularVideos.items.forEach((video) => {
            let title = document.createElement("h3");
            title.innerText = video.snippet.title;

            let thumbnail = document.createElement("img");
            thumbnail.src = video.snippet.thumbnails.medium.url;

            let div = document.createElement("div");

            div.onclick = () => {
                saveToLocalStorage(ele);
            }

            div.append( thumbnail,title);
            container.append(div);
            // Display the title and thumbnail of each video in the DOM
        });
    }
            displayPopularVideos();