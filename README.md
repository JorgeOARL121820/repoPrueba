## Ejecutar Servidor en modo local

```
 `node app.js`
```

Por defecto se ejecuta en localhost:3000

## Versión de React que se utilizo

```
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-redux": "^7.2.6",

```

## Para ejecutar la aplicación en el entorno local

```
    npm install
```

```
    npm start
```

## Data utilizada en el servidor [Destinos]

```

{
    "cities": [
        {
            "id": 1,
            "name": "Tampate",
            "asciiname": "Tampate"
        },
        {
            "id": 2,
            "name": "Zumpango",
            "asciiname": "Zumpango"
        },
        {
            "id": 3,
            "name": "Zumpango del Río",
            "asciiname": "Zumpango del Rio"
        },
        {
            "id": 4,
            "name": "Zumpahuacán",
            "asciiname": "Zumpahuacan"
        },
        {
            "id": 5,
            "name": "Zozocolco de Hidalgo",
            "asciiname": "Zozocolco de Hidalgo"
        },
        {
            "id": 6,
            "name": "Zoquiopan",
            "asciiname": "Zoquiopan"
        },
        {
            "id": 7,
            "name": "Zongozotla"
        },
        {
            "id": 8,
            "name": "Zongolica"
        },
        {
            "id": 9,
            "name": "Santa María Zolotepec",
            "asciiname": "Santa Maria Zolotepec"
        },
        {
            "id": 10,
            "name": "Zitlala"
        },
        {
            "id": 11,
            "name": "Zinacantán",
            "asciiname": "Zinacantan"
        },
        {
            "id": 12,
            "name": "Zimatlán de Álvarez",
            "asciiname": "Zimatlan de Alvarez"
        },
        {
            "id": 13,
            "name": "Zimapan",
            "asciiname": "Zimapan"
        },
        {
            "id": 14,
            "name": "Zempoala"
        },
        {
            "id": 15,
            "name": "Zempoala"
        },
        {
            "id": 16,
            "name": "Zaragoza"
        },
        {
            "id": 17,
            "name": "Zaragoza",
            "asciiname": "Zaragoza"
        },
        {
            "id": 18,
            "name": "Zaragoza de Guadalupe",
            "asciiname": "Zaragoza de Guadalupe"
        },
        {
            "id": 19,
            "name": "Zapotlán de Juárez",
            "asciiname": "Zapotlan de Juarez"
        },
        {
            "id": 20,
            "name": "Zapotitlán Palmas",
            "asciiname": "Zapotitlan Palmas"
        },
        {
            "id": 21,
            "name": "Zacualtipán",
            "asciiname": "Zacualtipan"
        }
    ]
}

```

## Data utilizada para los vuelos

```

[
    {
        "origen": 1,
        "destino": 2,
        "fecha": "2022-03-01",
        "hora": "17:00",
        "horallegada": "20:00",
        "duracion": "3 hrs",
        "precio": "750",
        "id": "1"
    },
    {
        "origen": 1,
        "destino": 2,
        "fecha": "2022-03-01",
        "hora": "15:00",
        "horallegada": "20:00",
        "duracion": "5 hrs",
        "precio": "950",
        "id": "2"
    },
    {
        "origen": 1,
        "destino": 2,
        "fecha": "2022-02-28",
        "hora": "17:00",
        "horallegada": "23:30",
        "duracion": "6.5 hrs",
        "precio": "1750",
        "id": "3"
    },
    {
        "origen": 2,
        "destino": 4,
        "fecha": "2022-03-01",
        "hora": "17:00",
        "horallegada": "19:00",
        "duracion": "2 hrs",
        "precio": "2750",
        "id": "4"
    },
    {
        "origen": 2,
        "destino": 4,
        "fecha": "2022-03-01",
        "hora": "11:00",
        "horallegada": "16:00",
        "duracion": "5 hrs",
        "precio": "1950",
        "id": "5"
    },
    {
        "origen": 3,
        "destino": 7,
        "fecha": "2022-02-21",
        "hora": "17:00",
        "horallegada": "21:00",
        "duracion": "4 hrs",
        "precio": "15500",
        "id": "7"
    },
    {
        "origen": 5,
        "destino": 12,
        "fecha": "2022-02-23",
        "hora": "10:00",
        "horallegada": "22:00",
        "duracion": "12 hrs",
        "precio": "2500",
        "id": "8"
    },
    {
        "origen": 8,
        "destino": 7,
        "fecha": "2022-03-01",
        "hora": "17:00",
        "horallegada": "18:30",
        "duracion": "1.5 hrs",
        "precio": "975",
        "id": "9"
    },
    {
        "origen": 19,
        "destino": 1,
        "fecha": "2022-03-15",
        "hora": "17:00",
        "horallegada": "19:00",
        "duracion": "2 hrs",
        "precio": "23000",
        "id": "10"
    },
    {
        "origen": 21,
        "destino": 7,
        "fecha": "2022-02-15",
        "hora": "12:00",
        "horallegada": "20:00",
        "duracion": "8 hrs",
        "precio": "1265",
        "id": "11"
    },
    {
        "origen": 9,
        "destino": 4,
        "fecha": "2022-03-01",
        "hora": "17:00",
        "horallegada": "19:30",
        "duracion": "2.5 hrs",
        "precio": "1489",
        "id": "12"
    },
    {
        "origen": 21,
        "destino": 6,
        "fecha": "2022-02-09",
        "hora": "09:00",
        "horallegada": "18:00",
        "duracion": "9 hrs",
        "precio": "2700",
        "id": "13"
    },
    {
        "origen": 21,
        "destino": 20,
        "fecha": "2022-03-07",
        "hora": "17:00",
        "horallegada": "18:00",
        "duracion": "1 hr",
        "precio": "15500",
        "id": "14"
    },
    {
        "origen": 3,
        "destino": 7,
        "fecha": "2022-03-08",
        "hora": "13:00",
        "horallegada": "15:00",
        "duracion": "2 hrs",
        "precio": "1250",
        "id": "15"
    },
    {
        "origen": 3,
        "destino": 7,
        "fecha": "2022-03-01",
        "hora": "22:00",
        "horallegada": "23:30",
        "duracion": "1.5 hrs",
        "precio": "1650",
        "id": "16"
    },
    {
        "origen": 18,
        "destino": 15,
        "fecha": "2022-03-16",
        "hora": "14:00",
        "horallegada": "20:00",
        "duracion": "6 hrs",
        "precio": "7500",
        "id": "17"
    },
    {
        "origen": 13,
        "destino": 18,
        "fecha": "2022-03-19",
        "hora": "11:00",
        "horallegada": "22:00",
        "duracion": "11 hrs",
        "precio": "6954",
        "id": "18"
    },
    {
        "origen": 1,
        "destino": 17,
        "fecha": "2022-03-16",
        "hora": "16:00",
        "horallegada": "22:00",
        "duracion": "6 hrs",
        "precio": "9860",
        "id": "19"
    },
    {
        "origen": 3,
        "destino": 7,
        "fecha": "2022-03-01",
        "hora": "03:30",
        "horallegada": "15:00",
        "duracion": "13.5 hrs",
        "precio": "1250",
        "id": "20"
    },
    {
        "origen": 14,
        "destino": 5,
        "fecha": "2022-03-03",
        "hora": "15:00",
        "horallegada": "18:00",
        "duracion": "3 hrs",
        "precio": "6900",
        "id": "21"
    },
    {
        "origen": 1,
        "destino": 16,
        "fecha": "2022-03-01",
        "hora": "12:00",
        "horallegada": "18:00",
        "duracion": "6 hrs",
        "precio": "7650",
        "id": "22"
    },
    {
        "origen": 6,
        "destino": 21,
        "fecha": "2022-03-22",
        "hora": "16:00",
        "horallegada": "20:00",
        "duracion": "4 hrs",
        "precio": "2670",
        "id": "23"
    },
    {
        "origen": 9,
        "destino": 7,
        "fecha": "2022-03-01",
        "hora": "11:00",
        "horallegada": "15:00",
        "duracion": "4 hrs",
        "precio": "12500",
        "id": "24"
    },
    {
        "origen": 1,
        "destino": 21,
        "fecha": "2022-03-01",
        "hora": "17:00",
        "horallegada": "20:00",
        "duracion": "3 hrs",
        "precio": "27000",
        "id": "25"
    }
]

```
