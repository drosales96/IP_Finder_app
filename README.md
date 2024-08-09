# IPFinder

**IPFinder** es una aplicación web diseñada para geolocalizar direcciones IP, tanto en formato IPv4 como IPv6. Utilizando una API avanzada, IPFinder ofrece información detallada sobre la ubicación geográfica y la red asociada con cualquier IP que introduzcas. Esta aplicación es ideal para desarrolladores, administradores de redes y cualquier persona interesada en obtener datos precisos sobre direcciones IP.

## Índice

- [Características](#características)
- [Conceptos Clave](#conceptos-clave)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplo de Respuesta](#ejemplo-de-respuesta)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)
- [Enlace a la Aplicación](#enlace-a-la-aplicación)

## Características

- **Compatibilidad con IPv4 e IPv6**: La aplicación maneja direcciones IP en ambos formatos.
- **Información Geográfica y de Red**: Obtén detalles como ciudad, país, latitud, longitud, ASN (Número de Sistema Autónomo) y nombre del sistema autónomo.
- **Interfaz de Usuario Intuitiva**: Una sencilla interfaz de usuario que facilita la introducción de IPs y la visualización de los resultados.
- **JSON Formateado**: Los resultados se presentan en formato JSON, ideal para su integración en otras aplicaciones o sistemas.

## Conceptos Clave

### Geolocalización de IP

La geolocalización de IP es el proceso de determinar la ubicación geográfica aproximada de un dispositivo basándose en su dirección IP. Este proceso se realiza consultando bases de datos que asocian direcciones IP con ubicaciones físicas.

### IPv4 vs. IPv6

- **IPv4 (Protocolo de Internet versión 4)**: Es el formato más común para direcciones IP, representado en 32 bits y normalmente escrito en notación decimal con puntos, como `192.168.1.1`.
- **IPv6 (Protocolo de Internet versión 6)**: Es el formato más reciente, diseñado para superar las limitaciones de IPv4, con direcciones representadas en 128 bits y escritas en notación hexadecimal con dos puntos, como `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

### ASN (Número de Sistema Autónomo)

Un ASN es un identificador único para sistemas autónomos en Internet. Los sistemas autónomos son colecciones de direcciones IP y rutas de red bajo el control de una única entidad que presenta una política de enrutamiento común.

## Instalación

1. **Clonar el Repositorio**

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/IPFinder.git
