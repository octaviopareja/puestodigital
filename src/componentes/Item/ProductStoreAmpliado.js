  const productsAmpliado =    
    {id:14,
     categoria:'vga', 
     titulo:"MSI GEFORCE GTX 1660TI VENTUS XS 6GB OC GDDR6", 
     imagen:"https://infoservice-cba.com.ar/wp-content/uploads/2020/07/Placa-Video-Nvidia-Geforce-Gtx-1660ti-6gb-Msi-Ventus-Xs-Oc-3.jpg",     
     video:"https://www.youtube.com/embed/VVoPU-59sdU",
     descripcion:"NVIDIA GDDR6 192bit 12000 MHz 1500 MHz HDMI + DVI 12nm 1536 las unidades GTX1660Ti tarjeta de video",
     precio:"31.524",
     stock:4
    }
   ;

export default function ProductAmpliado() {
   return new Promise((res, rej) => {
     setTimeout(() => {
       res(productsAmpliado);
     }, 2000);
   });
 };