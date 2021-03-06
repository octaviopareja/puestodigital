const productos = [
    {id:1,
     categoria:'procesadores',
     titulo:"Procesador i9 9900k", 
     imagen:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i9-9900k-36-ghz-0.jpg",
     video:"https://www.youtube.com/embed/_1Cb_dYx_Lo",
     descripcion:"Procesador Intel Core i9-9900K de 8 núcleos de hasta 5.0 GHz Turbo desbloqueado LGA1151 300 Series 95W",
     precio:'45.999',
     stock:3
    },
    {id:2, 
      categoria:'procesadores',
      titulo:"Procesador i7 7700k", 
      imagen:"https://www.theworldgadget.com/wp-content/uploads/2017/11/Intel-Core-i7-7700K-4final.jpg", 
      video:"https://www.youtube.com/embed/uLqVxyRPK80",
      descripcion:"Procesador Intel Core i7-7700K de 8 núcleos de hasta 5.0 GHz Turbo desbloqueado LGA1151 300 Series 95W",
      precio:"25.648",
      stock:7
     },
     {id:3,
      categoria:'procesadores', 
      titulo:"Procesador i5 8400", 
      video:"https://www.youtube.com/embed/DRfE3vFt1Gk",
      imagen:"https://images-na.ssl-images-amazon.com/images/I/51hEWfqmLaL._SX500_SY500_CR,0,0,500,500_.jpg", 
      descripcion:"Procesador Intel Core i9-8400 de 4 núcleos de hasta 4.0 GHz",
      precio:"35.425",
      stock:5
     },
     {id:4, 
      categoria:'procesadores',
      titulo:"Procesador i3 9100f", 
      video:"https://www.youtube.com/embed/SWURKvEk1AY",
      imagen:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i3-9100f-0.jpg", 
      descripcion:"Procesador Intel Core i3-9100f de 2 núcleos de hasta 3.0 GHz Turbo desbloqueado LGA1151 300 Series 95W",
      precio:"15.785",
      stock:7
     },
     {id:5,
      categoria:'procesadores', 
      titulo:"Procesador Ryzen 3", 
      video:"https://www.youtube.com/embed/P7P53PKMc7Y",
      imagen:"https://bigpoint.com.ar/wp-content/uploads/2019/07/Microprocesador-AMD-Ryzen-3.jpg", 
      descripcion:"Procesador AMD Ryzen 3 3200G 4.00Ghz + Vega 8",
      precio:"39.200",
      stock:4
     },
     {id:6,
      categoria:'procesadores', 
      titulo:"Procesador Ryzen 5", 
      video:"https://www.youtube.com/embed/P7P53PKMc7Y",
      imagen:"https://bigpoint.com.ar/wp-content/uploads/2019/07/Microprocesador-AMD-Ryzen-2600-1.jpg", 
      descripcion:"Procesador AMD Ryzen 5 3200G 4.00Ghz + Vega 8",
      precio:"47.213",
      stock:2
     },
     {id:7,
      categoria:'motherboards', 
      titulo:"Motherboard Asus Prime H310M-R 1151", 
      video: "https://www.youtube.com/embed/kH_4uwNRuOE",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QxAKMLEz118Rzl5uM54-bKfJet0nqV4kzJ6KRFkKY43EAEU&s", 
      descripcion:"Chipset Intel H310 RAM 2x DDR4 DIMM, PC4-21300U dual / DDR4-2666, máx. 32 GB (UDIMM) Ranuras de extensión 1x PCIe 3.0 x 16, 1 x PCIe 2.0 x1 Conectores ...",
      precio:"15.551",
      stock:4
     },
     {id:8,
      categoria:'motherboards', 
      titulo:"Motherboard GiGABYTE A320M-S2H Socket AM4", 
      video: "https://www.youtube.com/embed/kH_4uwNRuOE",
      imagen:"https://axa.com.ar/webaxa/18478-medium_default/motherboard-gigabyte-a320m-s2h-socket-am4.jpg", 
      descripcion:"Chipset Intel H310 RAM 2x DDR4 DIMM, PC4-21300U dual / DDR4-2666, máx. 32 GB (UDIMM) Ranuras de extensión 1x PCIe 3.0 x 16, 1 x PCIe 2.0 x1 Conectores ...",
      precio:"17.524",
      stock:5
     },
     {id:9,
      categoria:'motherboards', 
      titulo:"Motherboard Gigabyte GA-H310M-H S1151", 
      video: "https://www.youtube.com/embed/kH_4uwNRuOE",
      imagen:"https://www.venex.com.ar/products_images/1585335519_gigabyte_h310mh_1151.png", 
      descripcion:"Soporta 8 ª generación de procesadores Intel® ® Core ™ Dual Channel Non-ECC Unbuffered DDR4 Audio HD de 8 canales con condensadores de audio de alta ...",
      precio:"21.252",
      stock:3
     },
     {id:9,
      categoria:'motherboards', 
      titulo:"Motherboard Gigabyte H310m Ds2 Puerto Serie/Paralelo", 
      video: "https://www.youtube.com/embed/kH_4uwNRuOE",
      imagen:"https://milleniumcomputacion.com/wp-content/uploads/2018/12/2018030810542010_m.jpg", 
      descripcion:"Socket 1151 7th/8th Gen. con Puerto Paralelo y Serie",
      precio:"6.987",
      stock:3
     },
     {id:10,
      categoria:'ssd', 
      titulo:"Disco duro sólido de 250 GB BLUE",
      video:"https://www.youtube.com/embed/xhvvVtHWTBw",
      imagen:"https://images-eu.ssl-images-amazon.com/images/I/41RKPlZ-cUL.jpg", 
      descripcion:"WD Blue SSD - Disco duro sólido de 250 GB (SATA III a 6 Gb/s, carcasas de  2,5” / 7 mm, lectura secuencial de hasta 540 MB/s)",
      precio:"7.879",
      stock:4
     },
     {id:11,
      categoria:'ssd', 
      titulo:"Disco duro sólido de 250 GB GREEN",
      video:"https://www.youtube.com/embed/xhvvVtHWTBw",
      imagen:"https://http2.mlstatic.com/disco-duro-solido-ssd-240gb-green-envio-gratis-D_NQ_NP_804237-MPE32065620446_092019-F.jpg", 
      descripcion:"WD GREEB SSD - Disco duro sólido de 250 GB (SATA III a 6 Gb/s, carcasas de  2,5” / 7 mm, lectura secuencial de hasta 540 MB/s)",
      precio:"5.879",
      stock:4
     },
     {id:12,
      categoria:'ssd', 
      titulo:"Disco duro sólido de 250 GB Crucial", 
      video:"https://www.youtube.com/embed/xhvvVtHWTBw",
      imagen:"https://d26lpennugtm8s.cloudfront.net/stores/001/216/078/products/a400_21-6dd96684f67f73016a15922807871663-640-0.jpg", 
      descripcion:"CRUCIAL SSD - Disco duro sólido de 250 GB",
      precio:"9.129",
      stock:4
     },
     {id:13,
      categoria:'vga', 
      titulo:"MSI RTX 2060 SUPER Gaming X",
      video: "https://www.youtube.com/embed/D3BbdOHO5lw",
      imagen:"https://asset.msi.com/resize/image/global/product/product_5_20190709152313_5d2440e125ae0.png62405b38c58fe0f07fcef2367d8a9ba1/600.png", 
      descripcion:"GeForce RTX 2060 Super es un chip de la generación Turing de Nvidia, sin diferencias arquitectónicas con respecto a los de la gama que no son de Super. ",
      precio:"35.789",
      stock:4
     },
     {id:14,
      categoria:'vga', 
      titulo:"MSI GEFORCE GTX 1660TI VENTUS XS 6GB OC GDDR6", 
      imagen:"https://infoservice-cba.com.ar/wp-content/uploads/2020/07/Placa-Video-Nvidia-Geforce-Gtx-1660ti-6gb-Msi-Ventus-Xs-Oc-3.jpg",
      video:"https://www.youtube.com/embed/VVoPU-59sdU", 
      descripcion:"NVIDIA GDDR6 192bit 12000 MHz 1500 MHz HDMI + DVI 12nm 1536 las unidades GTX1660Ti tarjeta de video",
      precio:"31.524",
      stock:4
     },
     {id:15,
      categoria:'vga', 
      titulo:"ZOTAC Gaming GeForce RTX 2080 Ti", 
      video: "https://www.youtube.com/embed/PVVuZm72eTI",
      imagen:"https://images-na.ssl-images-amazon.com/images/I/71Ggrjq8EpL._AC_SX466_.jpg", 
      descripcion:"AMP Extreme 11GB GDDR6 352-bit Gaming Graphics Card, IceStorm 2.0, Extreme Overclock, Freeze Fan Stop, Active Fan",
      precio:"59.999",
      stock:4
     },
    ];

export default function ProductStore() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 1000);
    });
  };

