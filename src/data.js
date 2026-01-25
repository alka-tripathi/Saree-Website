const sarees = [
  // RED
  { id: 1, type: "Banarasi Saree", origin: "Varanasi, Uttar Pradesh", price: 3999, fabric: "Silk", color: "red" ,image:"https://i.pinimg.com/736x/68/12/66/6812663b94bc280d931b8ce98eeebe0c.jpg"},
  { id: 2, type: "Baluchari Saree", origin: "Murshidabad, West Bengal", price: 4599, fabric: "Silk", color: "red" ,image:"https://i.pinimg.com/736x/e0/9e/a8/e09ea88eacffa6a4fec94f25ded53d69.jpg"},
  { id: 3, type: "Patola Saree", origin: "Patan, Gujarat", price: 8999, fabric: "Silk", color: "red",image:"https://i.pinimg.com/1200x/09/f0/ed/09f0ed9f1ed02934ada91fdd74f5a670.jpg" },
  { id: 4, type: "Chanderi Saree", origin: "Madhya Pradesh", price: 2899, fabric: "Silk Cotton", color: "red",image:"https://i.pinimg.com/1200x/3d/34/d1/3d34d15b97782283990b1eafd712111b.jpg" },
  { id: 5, type: "Kanjivaram Saree", origin: "Kanchipuram, Tamil Nadu", price: 6499, fabric: "Silk", color: "red",image:"https://i.pinimg.com/1200x/cd/37/7d/cd377d7d927b4fbf48bcf18a5ef1ff76.jpg" },

  // WHITE
  { id: 6, type: "Cotton Handloom Saree", origin: "West Bengal", price: 1899, fabric: "Cotton", color: "white",image:"https://i.pinimg.com/736x/fd/83/d8/fd83d8ae70f710cae0bbd138e8f62c3f.jpg" },
  { id: 7, type: "Linen Saree", origin: "Kerala", price: 2599, fabric: "Linen", color: "white",image:"https://i.pinimg.com/736x/18/6f/c0/186fc0c6a9eebeab537049b185bc3d14.jpg" },
  { id: 8, type: "Kota Doria Saree", origin: "Rajasthan", price: 2199, fabric: "Cotton Silk", color: "white" ,image:"https://i.pinimg.com/1200x/e9/25/42/e9254228f84c4559191a30cf62643398.jpg"},
  { id: 9, type: "Khadi Saree", origin: "Gujarat", price: 1999, fabric: "Khadi Cotton", color: "white" ,image:"https://i.pinimg.com/1200x/cb/e4/99/cbe49996e717c162b9a28cb794be2958.jpg"},
  { id: 10, type: "Tant Saree", origin: "West Bengal", price: 1699, fabric: "Cotton", color: "white" ,image:"https://i.pinimg.com/736x/fd/ca/8e/fdca8e7bf2f90a9bac20e246725e1824.jpg"},

  // PINK
  { id: 11, type: "Organza Saree", origin: "Uttar Pradesh", price: 3299, fabric: "Organza", color: "pink",image:"https://i.pinimg.com/1200x/b1/74/17/b174175bad91535a27c2eb7684d063cd.jpg" },
  { id: 12, type: "Soft Silk Saree", origin: "Karnataka", price: 4899, fabric: "Silk", color: "pink",image:"https://i.pinimg.com/736x/a3/61/5c/a3615cbdfd8dea8fd562f8a7c2776d0b.jpg" },
  { id: 13, type: "Chiffon Saree", origin: "Mumbai, Maharashtra", price: 2499, fabric: "Chiffon", color: "pink" ,image:"https://i.pinimg.com/1200x/af/1a/a3/af1aa3fb502fab13d2a9ec257b6bf26e.jpg"},
  { id: 14, type: "Georgette Saree", origin: "Surat, Gujarat", price: 2799, fabric: "Georgette", color: "pink",image:"https://i.pinimg.com/1200x/96/83/3b/96833b7ab3494fbfc11bcb63a40aa307.jpg" },
  { id: 15, type: "Paithani Saree", origin: "Maharashtra", price: 6999, fabric: "Silk", color: "pink",image:"https://i.pinimg.com/736x/18/10/2b/18102bdc5cc55017acd4e91442162ccb.jpg" },

  // BLUE
  { id: 16, type: "Kanjivaram Saree", origin: "Tamil Nadu", price: 5999, fabric: "Silk", color: "blue",image:"https://i.pinimg.com/736x/bd/8c/31/bd8c3173b090874290b716aa2e449a3c.jpg" },
  { id: 17, type: "Tant Saree", origin: "West Bengal", price: 1599, fabric: "Cotton", color: "blue",image:"https://i.pinimg.com/736x/91/dc/9c/91dc9cec9647cdb5a11e54972bab3f1c.jpg" },
  { id: 18, type: "Maheshwari Saree", origin: "Madhya Pradesh", price: 2399, fabric: "Cotton Silk", color: "blue" ,image:"https://i.pinimg.com/1200x/17/a1/4d/17a14d3b14d45bc2ab45012cbd7458e3.jpg"},
  { id: 19, type: "Linen Saree", origin: "Andhra Pradesh", price: 2699, fabric: "Linen", color: "blue",image:"https://i.pinimg.com/736x/eb/ad/c7/ebadc76a61517601933c0d0ca7dfa557.jpg" },
  { id: 20, type: "Silk Blend Saree", origin: "Karnataka", price: 3499, fabric: "Silk Blend", color: "blue",image:"https://i.pinimg.com/736x/ae/21/a2/ae21a25641b1a1950cd8daccfea638b1.jpg" },

  // GREEN
  { id: 21, type: "Mysore Silk Saree", origin: "Karnataka", price: 5299, fabric: "Silk", color: "green",image:"https://i.pinimg.com/736x/24/d5/e6/24d5e6a59a8f4b1baa29d45b4fa6be9b.jpg" },
  { id: 22, type: "Chanderi Saree", origin: "Madhya Pradesh", price: 2799, fabric: "Silk Cotton", color: "green" ,image:"https://i.pinimg.com/736x/6f/2f/e3/6f2fe37efddf792c037c10153caf2227.jpg"},
  { id: 23, type: "Bandhani Saree", origin: "Rajasthan", price: 2599, fabric: "Georgette", color: "green",image:"https://i.pinimg.com/736x/4b/79/bf/4b79bf2a721fdb2ef83fa7bc64fe597e.jpg" },
  { id: 24, type: "Ikath Saree", origin: "Odisha", price: 2899, fabric: "Cotton", color: "green",image:"https://i.pinimg.com/1200x/f6/9b/8e/f69b8eea3ed6916f437cda645318e6b8.jpg" },
  { id: 25, type: "Cotton Silk Saree", origin: "Tamil Nadu", price: 3199, fabric: "Cotton Silk", color: "green" ,iamge:"https://i.pinimg.com/1200x/ad/b6/61/adb6617285596ae9aacfb1a1f0f376e2.jpg"},

  // EXTRA (to make 30)
  { id: 26, type: "Soft Cotton Saree", origin: "Andhra Pradesh", price: 1799, fabric: "Cotton", color: "golden",image:"https://i.pinimg.com/1200x/20/11/fc/2011fc935f1d25b3556889447ba18185.jpg" },
  { id: 27, type: "Silk Saree", origin: "Assam", price: 4599, fabric: "Silk", color: "golden",image:"https://i.pinimg.com/736x/f9/17/00/f917008b31867c0f78f30816b0f3940b.jpg" },
  { id: 28, type: "Handloom Saree", origin: "Telangana", price: 2299, fabric: "Cotton", color: "golden",image:"https://i.pinimg.com/1200x/81/c2/5e/81c25eaf8f20e22215623545c45d0c17.jpg" },
  { id: 29, type: "Designer Organza Saree", origin: "Delhi", price: 3799, fabric: "Organza", color: "golden",image:"https://i.pinimg.com/736x/dc/bc/c4/dcbcc49e80182886e6a908b55a3c9c02.jpg" },
  { id: 30, type: "Traditional Cotton Saree", origin: "Tamil Nadu", price: 1999, fabric: "Cotton", color: "golden",image:"https://i.pinimg.com/1200x/9e/5e/9c/9e5e9c0bdd8b2272418844fd3ce48bd4.jpg" }
];

export default sarees;
