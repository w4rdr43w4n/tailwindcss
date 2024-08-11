import { creatomate } from "@/config/keys";
import {
  Client,
  Source,
  Audio,
  Image,
  PanCenter,
  PanLeftWithZoom,
  Fade,
  PanRightWithZoom,
} from "creatomate";

const client = new Client(creatomate.api_key);
/*
const images = {
   new Image({
      track: 1,
      duration: 5,
      source: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg',
      animations: [
        new PanCenter({
          startScale: '100%',
          endScale: '120%',
          easing: 'linear',
        }),
      ],
    }),
    new Image({
      track: 1,
      duration: 5,
      source: 'https://images.pexels.com/photos/33239/halloween-candy-chocolates-nuts-sweet.jpg',
      animations: [
        new PanLeftWithZoom({
          startScale: '100%',
          endScale: '120%',
          easing: 'linear',
        }),
      ],
      transition: new Fade(),
    }),
   
    {
      type: "text",
      track: 2,
      duration:6,
      y: "84%",
      width: "88%",
      height: "20%",
      x_alignment: "50%",
      y_alignment: "50%",
      fill_color: "#ffffff",
      text: "Luxorious sweets only from Galaxy",
      font_family: "Arial",
      font_weight: "800",
      background_color: "transparent",
      background_x_padding: "73%",
      background_y_padding: "35%",
      background_border_radius: "37%",
      animations: [
        {
          type: "text-slide",
          duration: "0.8 s",
          scope: "split-clip",
          split: "line",
          direction: "up",
          background_effect: "scaling-clip",
        },
      ],
    },
    {
      type: "text",
      track: 2,
      y: "84%",
      width: "88%",
      height: "20%",
      x_alignment: "50%",
      y_alignment: "50%",
      fill_color: "#ffffff",
      text: "Order: www.galaxyChocolte.com",
      font_family: "Montserrat",
      font_weight: "800",
      background_color: "brown",
      background_x_padding: "73%",
      background_y_padding: "35%",
      background_border_radius: "37%",
      animations: [
        {
          type: "text-slide",
          duration: "0.8 s",
          scope: "split-clip",
          split: "line",
          direction: "up",
          background_effect: "scaling-clip",
        },
      ],
    },
    }),
}
*/

/*
{
      type: "video",
      track: 1,
      source: "https://videos.pexels.com/video-files/3205404/3205404-hd_1280_720_25fps.mp4",
      animations: [
        {
          type: "fade",
          duration: 1,
          transition: true,
        },
      ],
    },
*/
const source = new Source({
  outputFormat: "mp4",
  width: 290,
  height: 480,
  duration: 10,
  elements: [
    new Audio({
      source: "https://creatomate-static.s3.amazonaws.com/demo/music1.mp3",
      duration: 5,
      audioFadeOut: 2,
    }),
    {
      type: "shape",
      track: 1,
      dynamic: true,
      y: "7.312%",
      width: "100%",
      height: "14.6239%",
      x_anchor: "50%",
      y_anchor: "50%",
      fill_color: "rgba(255,255,255,1)",
      opacity: "75%",
      path: "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z",
    },
    {
      type: "text",
      track: 2,
      time: 0,
      x: "31.5603%",
      y: "5.0814%",
      width: "24.3095%",
      height: "4.4614%",
      fill_color: "#333333",
      text: "Galaxy Sweets",
      font_weight: "700",
    },
    {
      type: "image",
      track: 3,
      x: "10.0975%",
      y: "7.312%",
      width: "13.2312%",
      height: "10.7938%",
      border_radius: "2.5 vmin",
      opacity: "85%",
      source: "037abbe0-d07e-47ee-8204-1a4f2a360d72",
    },
    {
      type: "text",
      track: 4,
      time: 0,
      x: "30.3482%",
      y: "10.0105%",
      width: "21.8853%",
      height: "5.3968%",
      fill_color: "#333333",
      text: "Luxurious Cuisine",
      font_weight: "700",
    },
    {
      type: "text",
      track: 5,
      x: "81.6104%",
      y: "7.3121%",
      width: "20.4699%",
      height: "7.6275%",
      x_alignment: "50%",
      y_alignment: "50%",
      fill_color: "#047bff",
      text: "Learn More",
      font_weight: "700",
    },
    {
      type: "image",
      track: 6,
      duration: 4.58,
      y: "57.1375%",
      height: "85.7249%",
      animations: [
        {
          time: 0,
          duration: 0.63,
          easing: "quadratic-out",
          type: "slide",
          direction: "90°",
        },
        {
          time: "end",
          duration: 0.88,
          easing: "quadratic-out",
          reversed: true,
          type: "rotate-slide",
          direction: "left",
          clockwise: true,
        },
      ],
      source:
        "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg",
    },
    {
      type: "image",
      track: 6,
      time: 4.58,
      y: "57.235%",
      height: "85.92%",
      animations: [
        {
          time: 0,
          duration: 0.83,
          easing: "quadratic-out",
          type: "rotate-slide",
          direction: "right",
          clockwise: true,
        },
      ],
      source:
        "https://images.pexels.com/photos/33239/halloween-candy-chocolates-nuts-sweet.jpg",
    },
    {
      type: "text",
      track: 7,
      duration: 4.58,
      y: "82.2838%",
      width: "88.3634%",
      height: "8.8883%",
      x_alignment: "50%",
      y_alignment: "50%",
      fill_color: "#633610",
      animations: [
        {
          time: 0,
          duration: 0.57,
          easing: "quadratic-out",
          type: "text-slide",
          direction: "down",
          split: "letter",
          scope: "element",
          distance: "200%",
          background_effect: "disabled",
        },
        {
          time: 3.7,
          duration: 0.81,
          easing: "quadratic-out",
          reversed: true,
          type: "text-slide",
          direction: "up",
          split: "letter",
          scope: "element",
          distance: "200%",
          background_effect: "disabled",
        },
      ],
      text: "Discover New Sweets in Our Bakeries!",
      font_weight: "800",
      font_size_minimum: "2.6 vmin",
      font_size_maximum: "100.7 vmin",
      background_color: "#dec0a5",
      background_border_radius: "5%",
    },
    {
      id: "60fd5172-3c77-4308-9956-329e5e7acf58",
      type: "audio",
      track: 8,
      time: 0.05,
      source: "Do you like sweets? Try the new sweets and chocolate from Galaxy Cusine",
      provider:
        "elevenlabs model_id=eleven_monolingual_v1 voice_id=ZQe5CZNOzWyzPSCn5a3c",
    },
    {
      type: "text",
      track: 7,
      y: "82.2838%",
      width: "88.3634%",
      height: "8.8883%",
      x_alignment: "50%",
      y_alignment: "50%",
      fill_color: "#f1b37e",
      animations: [
        {
          time: 0,
          duration: 1,
          easing: "quadratic-out",
          type: "text-slide",
          direction: "up",
          split: "word",
          scope: "element",
          distance: "200%",
          background_effect: "disabled",
        },
      ],
      text: "Order Now: GalaxyChoco.com",
      font_weight: "800",
      font_size_minimum: "2.6 vmin",
      font_size_maximum: "100.7 vmin",
      background_color: "rgba(99,54,16,1)",
    },
  ],
});

export const makeVideo = async () => {
  try {
    const r = await client.render({ source });
    console.log(r);
  } catch (err: any) {
    console.log(err.message);
  }
};
