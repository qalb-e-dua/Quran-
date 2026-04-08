{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww34000\viewh18220\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const cacheName = 'quran-cache-v1';\
const assets = [\
  './',\
  './index.html',\
  './manifest.json'\
];\
\
self.addEventListener('install', e => \{\
  e.waitUntil(\
    caches.open(cacheName).then(cache => \{\
      return cache.addAll(assets);\
    \})\
  );\
\});\
\
self.addEventListener('fetch', e => \{\
  e.respondWith(\
    caches.match(e.request).then(res => \{\
      return res || fetch(e.request);\
    \})\
  );\
\});}